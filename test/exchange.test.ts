import { time, loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { anyValue } from '@nomicfoundation/hardhat-chai-matchers/withArgs';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import hre from 'hardhat';

describe('Lock', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployExchange() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.viem.getWalletClients();

    const executionDelegate = await hre.viem.deployContract('ExecutionDelegate', [owner.account.address], {
      walletClient: owner,
    });

    const exchange = await hre.viem.deployContract('Exchange', [], {
      walletClient: owner,
    });

    return { exchange, executionDelegate, owner, otherAccount };
  }

  describe('Deployment', function () {
    it('Should set the right unlockTime', async function () {
      const { exchange, owner, executionDelegate } = await loadFixture(deployExchange);
      await expect(exchange.write.initialize([owner.account.address, executionDelegate.address])).not.to.be
        .reverted;
      // expect(await lock.unlockTime()).to.equal(unlockTime);
    });
  });
});
