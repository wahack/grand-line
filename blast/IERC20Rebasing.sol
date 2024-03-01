// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

enum YieldMode {
  AUTOMATIC,
  VOID,
  CLAIMABLE
}

interface IERC20Rebasing {
  // changes the yield mode of the caller and update the balance
  // to reflect the configuration
  function configure(YieldMode) external returns (uint256);

  // "claimable" yield mode accounts can call this this claim their yield
  // to another address
  function claim(address recipient, uint256 amount) external returns (uint256);

  // read the claimable amount for an account
  function getClaimableAmount(address account) external view returns (uint256);
}

// contract MyContract {
//   // NOTE: these addresses will be slightly different on the Blast mainnet
//   IERC20Rebasing public constant USDB = IERC20Rebasing(0x4200000000000000000000000000000000000022);
//   IERC20Rebasing public constant WETH = IERC20Rebasing(0x4200000000000000000000000000000000000023);

//   constructor() {
//     USDB.configure(YieldMode.CLAIMABLE) //configure claimable yield for USDB
//     WETH.configure(YieldMode.CLAIMABLE) //configure claimable yield for WETH
//   }
// }
