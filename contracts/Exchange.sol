// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import {Initializable} from '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
// import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol';
import './interfaces/IExecutionDelegate.sol';
import {AssetType, Order, Input} from './lib/Structs.sol';
import  './lib/SignEIP712.sol';
// import "hardhat/console.sol";
import {SP} from './SP.sol';
/**
 * @title Exchange
 * @dev Core exchange contract
 */
 contract Exchange is Initializable, SignEIP712, OwnableUpgradeable, ReentrancyGuardUpgradeable {
  uint256 public isOpen;
  modifier whenOpen() {
    require(isOpen == 1, 'Closed');
    _;
  }
  
  modifier setupExecution() {
    require(!isInternal, 'Unsafe call'); // add redundant re-entrancy check for clarity
    remainingETH = msg.value;
    isInternal = true;
    _;
    remainingETH = 0;
    isInternal = false;
  }

  modifier internalCall() {
    require(isInternal, 'Unsafe call');
    _;
  }

  event Opened();
  event Closed();

  function open() external onlyOwner {
    isOpen = 1;
    emit Opened();
  }

  function close() external onlyOwner {
    isOpen = 0;
    emit Closed();
  }

  // required by the OZ UUPS module
  // function _authorizeUpgrade(address) internal override onlyOwner {}

  /* Constants */
  string public constant NAME = 'SaiyaPet Exchange';
  string public constant VERSION = '1.0';
  address public constant SPTOKEN = 0x3C67b79eD8a15CE7a7F4eff6c139c2BC37fE8CEE;

  /* Variables */
  IExecutionDelegate public executionDelegate;
  uint256 public blockRange;

  /* Storage */
  mapping(bytes32 => bool) public cancelledOrFilled;
  mapping(address => uint256) public nonces;

  bool public isInternal = false;
  uint256 public remainingETH = 0;

  /* Events */
  event OrdersMatched(
    address indexed maker,
    address indexed taker,
    Order order
  );

  event ConsumeGas(
    address indexed consumer,
    uint256 amount
  );

  event OrderCancelled(bytes32 hash);
  event NonceIncremented(address indexed trader, uint256 newNonce);

  event NewExecutionDelegate(IExecutionDelegate indexed executionDelegate);
  event NewBlockRange(uint256 blockRange);
  event NewGovernor(address governor);

  // constructor() {
  //   // _disableInitializers();
  // }

  /* Constructor (for ERC1967) */
  function initialize(address _owner, IExecutionDelegate _executionDelegate) public initializer {
    __Ownable_init(_owner);
    __SignEIP712_init(NAME, VERSION);
    isOpen = 1;
    executionDelegate = _executionDelegate;
    __ReentrancyGuard_init();
  }

  /* External Functions */
  /**
   * @dev _execute wrapper
   */
  function execute(Input calldata order) external payable whenOpen setupExecution {
    _execute(order);
    _returnDust();
  }

  /**
   * @dev Match two orders, ensuring validity of the match, and execute all associated state transitions. Must be called internally.
   */
  function _execute(Input calldata input) public payable internalCall nonReentrant {
    uint256 gasStart = gasleft();

    bytes32 sellHash = _hashOrder(input.order, nonces[input.order.seller]);
    bytes32 buyHash = _hashOrder(input.order, nonces[msg.sender]);

    require(_validateOrderParameters(input.order, sellHash), 'Sell has invalid parameters');

    require(_validateSignatures(input.order.seller,input.signatureSeller, sellHash), 'Sell failed authorization');
    require(_validateSignatures(msg.sender,input.signatureBuyer, buyHash), 'Buy failed authorization');

    /* Mark orders as filled. */
    cancelledOrFilled[sellHash] = true;


    _executeFundsTransfer(input.order.seller, msg.sender, input.order.paymentToken, input.order.price);

    _executeTokenTransfer(
      input.order.collection,
      input.order.seller,
      msg.sender,
      input.order.tokenId,
      input.order.amount,
      input.order.assetType
    );

    uint256 gasEnd = gasleft();
    uint256 consumedGas = gasStart - gasEnd;

    SP(SPTOKEN).mint(input.order.seller, consumedGas*10**10);
    SP(SPTOKEN).mint(msg.sender, consumedGas * 10**10);
    emit ConsumeGas(msg.sender, consumedGas);
    emit OrdersMatched(
      input.order.seller,
      msg.sender,
      input.order
    );
  }

  /**
   * @dev Cancel an order, preventing it from being matched. Must be called by the trader of the order
   * @param order Order to cancel
   */
  function cancelOrder(Order calldata order) public {
    /* Assert sender is authorized to cancel order. */
    require(msg.sender == order.seller, 'Not sent by seller');

    bytes32 hash = _hashOrder(order, nonces[order.seller]);

    require(!cancelledOrFilled[hash], 'Order cancelled or filled');

    /* Mark order as cancelled, preventing it from being matched. */
    cancelledOrFilled[hash] = true;
    emit OrderCancelled(hash);
  }

  /**
   * @dev Cancel all current orders for a user, preventing them from being matched. Must be called by the trader of the order
   */
  function incrementNonce() external {
    nonces[msg.sender] += 1;
    emit NonceIncremented(msg.sender, nonces[msg.sender]);
  }

  function setExecutionDelegate(IExecutionDelegate _executionDelegate) external onlyOwner {
    require(address(_executionDelegate) != address(0), 'Address cannot be zero');
    executionDelegate = _executionDelegate;
    emit NewExecutionDelegate(executionDelegate);
  }

  function setBlockRange(uint256 _blockRange) external onlyOwner {
    blockRange = _blockRange;
    emit NewBlockRange(blockRange);
  }

  /* Internal Functions */

  /**
   * @dev Verify the validity of the order parameters
   */
  function _validateOrderParameters(Order calldata order, bytes32 orderHash) internal view returns (bool) {
    return (/* Order must have a trader. */
     (order.seller != address(0)) && 
      /* Order must not be cancelled or filled. */
      (!cancelledOrFilled[orderHash]) &&
      /* Order must be settleable. */
      (order.listingTime < block.timestamp) &&
      (block.timestamp < order.expirationTime));
  }

  /**
   * @dev Verify the validity of the signatures
   */
  function _validateSignatures(address trader, bytes memory signature,  bytes32 orderHash) internal view returns (bool) {
    if (trader == msg.sender) {
      return true;
    }

    /* Check user authorization. */
    if (!_validateUserAuthorization(orderHash, trader, signature)) {
      return false;
    }
    return true;
  }

  /**
   * @dev Verify the validity of the user signature
   */
  function _validateUserAuthorization(
    bytes32 orderHash,
    address trader,
    bytes memory signature
  ) internal view returns (bool) {
    bytes32 hashToSign;
    /*  authentication: Order signed by trader */
    hashToSign = _hashToSign(orderHash);

    return _verify(trader, hashToSign, signature);
  }

  /**
   * @dev Execute all ERC20 token / ETH transfers associated with an order match (fees and buyer => seller transfer)
   * @param seller seller
   * @param buyer buyer
   * @param paymentToken payment token
   * @param price price
   */
  function _executeFundsTransfer(
    address seller,
    address buyer,
    address paymentToken,
    uint256 price
  ) internal {
    if (paymentToken == address(0)) {
      require(msg.sender == buyer, 'Cannot use ETH');
      require(remainingETH >= price, 'Insufficient value');
      remainingETH -= price;
    }

    /* Transfer remainder to seller. */
    _transferTo(paymentToken, buyer, seller, price);
  }

  /**
   * @dev Transfer 
   */
  function _transferTo(address paymentToken, address from, address to, uint256 amount) internal {
    if (amount == 0) {
      return;
    }

    if (paymentToken == address(0)) {
      /* Transfer funds in ETH. */
      require(to != address(0), 'Transfer to zero address');
      (bool success, ) = payable(to).call{value: amount}('');
      require(success, 'ETH transfer failed');
    } else if (paymentToken == SPTOKEN) {
      /* Transfer funds in SPTOKEN. */
      executionDelegate.transferERC20(SPTOKEN, from, to, amount);
    } else {
      revert('Invalid payment token');
    }
  }

  /**
   * @dev Execute call through delegate proxy
   * @param collection collection contract address
   * @param from seller address
   * @param to buyer address
   * @param tokenId tokenId
   * @param assetType asset type of the token
   */
  function _executeTokenTransfer(
    address collection,
    address from,
    address to,
    uint256 tokenId,
    uint256 amount,
    AssetType assetType
  ) internal {
    /* Call execution delegate. */
    if (assetType == AssetType.ERC721) {
      executionDelegate.transferERC721(collection, from, to, tokenId);
    } else if (assetType == AssetType.ERC1155) {
      executionDelegate.transferERC1155(collection, from, to, tokenId, amount);
    }
  }

  /**
   * @dev Return remaining ETH sent to bulkExecute or execute
   */
  function _returnDust() private {
    uint256 _remainingETH = remainingETH;
    assembly {
      if gt(_remainingETH, 0) {
        let callStatus := call(gas(), caller(), _remainingETH, 0, 0, 0, 0)
        if iszero(callStatus) {
          revert(0, 0)
        }
      }
    }
  }
}
