import { time, loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { anyValue } from '@nomicfoundation/hardhat-chai-matchers/withArgs';
import { expect } from 'chai';
import hre from 'hardhat';
import { parseUnits } from 'viem';
describe('Swap', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployExchange() {
    // Contracts are deployed using the first signer/account by default
    const [deployer, otherAccount] = await hre.viem.getWalletClients();

    // const executionDelegate = await hre.viem.deployContract('TokenErc20', [owner.account.address]);
    const WETH = await hre.viem.deployContract('WETH9', [], {
      client: {
        wallet: deployer
      },
    });

    const TokenA = await hre.viem.deployContract('TokenErc20', ["TokenA", "TokenA"], {
      client: {
        wallet: deployer
      },
    });

    const TokenB = await hre.viem.deployContract('TokenErc20', ["TokenB", "TokenB"], {
      client: {
        wallet: deployer
      },
    })
    const TokenC = await hre.viem.deployContract('TokenErc20', ["TokenC", "TokenC"], {
      client: {
        wallet: deployer
      },
    })

    const UniswapV2Pair = await hre.viem.deployContract('UniswapV2Pair',[], {
      client: {
        wallet: deployer
      },
    });

    // get UniswapV2Pair deploy code
    const UniswapV2PairDeployment = await hre.deployments.getArtifact('UniswapV2Pair');
    // console.log('code hash of UniswapV2Pair:', keccak256(UniswapV2PairDeployment.bytecode));


    const UniswapV2Factory = await hre.viem.deployContract('UniswapV2Factory', [deployer.account.address], {
      client: {
        wallet: deployer
      },
    });

    const SwapRouter = await hre.viem.deployContract('SwapRouter', [UniswapV2Factory.address, WETH.address], {
      client: {
        wallet: deployer
      },
    })


    return { deployer, otherAccount, TokenA, TokenB, TokenC, UniswapV2Pair, UniswapV2Factory, SwapRouter, WETH};
  }

  describe('Deployment', function () {
    it('add liquity', async function () {
      const  { deployer, otherAccount, TokenA, TokenB, TokenC, UniswapV2Pair, UniswapV2Factory, SwapRouter, WETH} = await loadFixture(deployExchange);
      // const codeHash = await UniswapV2Factory.read.initCodeHash()
      // const pairAddress = await SwapRouter.write.createPairA([TokenA.address, TokenB.address]);
      // const  pairAddressB = await SwapRouter.read.pairForA([TokenA.address, TokenB.address]);
      // expect(pairAddress).to.equal(pairAddressB);

      await TokenA.write.approve([SwapRouter.address, parseUnits('10000', 18)], {
        client: {
          wallet: deployer
        }
      })
      await TokenB.write.approve([SwapRouter.address, parseUnits('100', 18)], {
        client: {
          wallet: deployer
        }
      })
      await SwapRouter.write.addLiquidity([TokenA.address, TokenB.address, parseUnits('10000', 18),  parseUnits('100', 18), 0, 0, deployer.account.address, Math.floor(+new Date() / 1000) + time.duration.days(1)], {
        client: {
          wallet: deployer
        }
      });

      const pairAddress = await UniswapV2Factory.read.getPair([TokenA.address, TokenB.address]);

      console.log('pair address', pairAddress);

      const tokenAAtPair =  await TokenA.read.balanceOf([pairAddress]);
      const tokenBAtPair =  await TokenB.read.balanceOf([pairAddress]);



      expect(tokenAAtPair).to.equal(parseUnits('10000', 18));
      expect(tokenBAtPair).to.equal(parseUnits('100', 18));

      console.log('facotry address', await SwapRouter.read.factory());

      console.log('all parise', await UniswapV2Factory.read.allPairs([0]))
      

    });
  });
});
