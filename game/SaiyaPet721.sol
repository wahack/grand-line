// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol';
import '@openzeppelin/contracts/access/manager/AccessManaged.sol';

import {Pet} from './Pet.sol';
import {SvgHelper} from './SvgHelper.sol';

contract SaiyaPet721 is Pet, ERC721, ERC721Pausable, ERC721Burnable, AccessManaged {
  uint256 private _nextTokenId;

  // initialAuthority：PetMint合约才能 mint
  constructor(address initialAuthority) ERC721('SaiyaPet', 'SP') AccessManaged(initialAuthority) {}

  function pause() public restricted {
    _pause();
  }

  function unpause() public restricted {
    _unpause();
  }

  // 挖出100之后， 10 分钟产出一个宠物
  function mintPet(address to) external restricted {
    uint256 tokenId = _nextTokenId++;
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

  function tokenURI(uint256 tokenId) public override view  returns (string memory) {
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
