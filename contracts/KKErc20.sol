// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol';
import '@openzeppelin/contracts/access/manager/AccessManaged.sol';

/**
 * 生态代币
 */
contract SP is ERC20, ERC20Burnable, AccessManaged, ERC20Permit {
  // initialAuthority：Market合约才能 mint
  constructor(
    address initialAuthority
  ) ERC20('SaiyaPetToken', 'SP') ERC20Permit('SaiyaPetToken') AccessManaged(initialAuthority) {}

  // todo: add restricted modifier
  // remove restricted for testing purpose
  function mint(address to, uint256 amount) public  {
    _mint(to, amount);
  }
}
