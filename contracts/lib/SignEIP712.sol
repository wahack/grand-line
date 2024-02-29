// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {Order} from './Structs.sol';
import '@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol';
import {ECDSA} from '@openzeppelin/contracts/utils/cryptography/ECDSA.sol';

/**
 * @title Sign
 * @dev Contains all of the order hashing functions for EIP712 compliant signature
 */
contract SignEIP712 is EIP712Upgradeable {
  bytes32 public constant ORDER_TYPEHASH = keccak256(
    'Order(address seller,uint8 assetType,address collection,uint256 tokenId,uint256 amount,address paymentToken,uint256 price,uint256 listingTime,uint256 expirationTime,uint256 salt,uint256 nonce)'
  );
  
  function __SignEIP712_init (string memory name, string memory version) internal{
    __EIP712_init(name, version);
  }

  function _hashOrder(Order calldata order, uint256 nonce) internal pure returns (bytes32) {
    return
      keccak256(
          abi.encode(
            ORDER_TYPEHASH,
            order.seller,
            order.assetType,
            order.collection,
            order.tokenId,
            order.amount,
            order.paymentToken,
            order.price,
            order.listingTime,
            order.expirationTime,
            order.salt,
            nonce
        )
      );
  }

  function _hashToSign(bytes32 orderHash) internal view returns (bytes32 hash) {
    return _hashTypedDataV4(orderHash);
  }

  function _verify(address signer, bytes32 digest, bytes memory signature) internal pure returns (bool) {    
    address recoveredSigner = ECDSA.recover(digest, signature);
    if (recoveredSigner == address(0)) {
      return false;
    } else {
      return signer == recoveredSigner;
    }
  }
}
