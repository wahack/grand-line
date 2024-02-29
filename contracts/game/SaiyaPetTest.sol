// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol';

import {Pet} from './game/Pet.sol';
import {SvgHelper} from './game/SvgHelper.sol';

contract SaiyaPetTest is Pet, ERC721, ERC721Pausable, ERC721Burnable {
  uint256 private _nextTokenId;

  constructor() ERC721('Pet', 'PT') {}

  // 挖出100之后， 10 分钟产出一个宠物
  function mintPet(address to) public {
    uint256 tokenId =  _nextTokenId++;
    _safeMint(to, tokenId);
    initPet(tokenId);
  }

  // The following functions are overrides required by Solidity.

  function _update(
    address to,
    uint256 tokenId,
    address auth
  ) internal override(ERC721, ERC721Pausable) returns (address) {
    return super._update(to, tokenId, auth);
  }

  function tokenURI(uint256 tokenId) public  override view returns (string memory) {
    if (ownerOf(tokenId) == address(0)) {
      return '';
    }
    return _bulidTokenURI(tokenId);
  }

  function _bulidTokenURI(uint256 tokenId) internal view returns (string memory) {
    if (pets[tokenId].level == 0) return SvgHelper.generateL0();
    if (pets[tokenId].level == 1) return SvgHelper.generateL1();
    if (pets[tokenId].level == 2) return SvgHelper.generateL2();
    return SvgHelper.generateL0();
  }

  function supportsInterface(bytes4 interfaceId) public view override(ERC721) returns (bool) {
    return super.supportsInterface(interfaceId);
  }
}
