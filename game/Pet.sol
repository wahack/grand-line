// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Pet {
  struct Trait {
    uint256 level;
    uint256 exp;
    uint256 hp;
  }
  mapping(uint256 => Trait) internal pets;

  // todo：权限控制
  function resetPet(uint256 tokenId) external {
    pets[tokenId] = Trait(0, 0, 100);
  }

  function initPet(uint256 tokenId) internal {
    pets[tokenId] = Trait(0, 0, 100);
  }

  function increaseExp(uint256 tokenId, uint256 exp) external {
    pets[tokenId].exp += exp;
  }

  function increaseLevel(uint256 tokenId) external {
    pets[tokenId].level += 1;
  }

  function setHp(uint256 tokenId, uint256 hp) external {
    pets[tokenId].hp = hp;
  }
}
