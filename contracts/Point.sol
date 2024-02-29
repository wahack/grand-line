// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol';
import '@openzeppelin/contracts/access/manager/AccessManaged.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol';

/**
 * 积分用于交易奖励
 */
contract Point is ERC20, ERC20Pausable, AccessManaged, ERC20Permit {
  constructor(
    address initialAuthority
  ) ERC20('Point', 'PT') AccessManaged(initialAuthority) ERC20Permit('Point') {}

  function pause() public restricted {
    _pause();
  }

  function unpause() public restricted {
    _unpause();
  }

  function mint(address to, uint256 amount) public restricted {
    _mint(to, amount);
  }

  // The following functions are overrides required by Solidity.

  function _update(address from, address to, uint256 value) internal override(ERC20, ERC20Pausable) {
    super._update(from, to, value);
  }
}
