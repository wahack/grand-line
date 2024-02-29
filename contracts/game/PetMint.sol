// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import {SaiyaPet721} from './SaiyaPet721.sol';
contract PetMint {
  uint256 public constant MAX_SUPPLY = 8888;
  uint256 public constant TIME_LIMIT = 10 minutes;
  uint256 public totalSupply = 0;
  uint256 public lastMintedAt = 0;
  IERC20 public SpToken;
  address public saiyaPet721;

  constructor(address _token, address _saiyaPet721) {
    SpToken = IERC20(_token);
    saiyaPet721 = _saiyaPet721;
  }

  function mint(address to) public {
    require(totalSupply < MAX_SUPPLY, 'Max supply reached');
    require(
      totalSupply < 100 || block.timestamp >= lastMintedAt + TIME_LIMIT,
      '15 minutes not passed since last mint'
    );
    totalSupply += 1;
    lastMintedAt = block.timestamp;
    SpToken.transfer(to, 100 * 10 ** 18);
    SaiyaPet721(saiyaPet721).mintPet(msg.sender);
  }
}
