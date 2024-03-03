import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { keccak256 } from 'ethers';
import { bytesToHex, hexToBytes } from 'viem'
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const deploynet = deployments.getNetworkName();

  let WETH;
  if (deploynet === 'blast-testnet') {
    WETH = "0x4200000000000000000000000000000000000023";
  } else if (deploynet === 'ganache') {
    const WETH9 = await deploy('WETH9', {
      from: deployer,
      contract: 'WETH9', // contract name in ./contracts
      args: [],
      log: true,
    });
    WETH = WETH9.address;
  }



  // const UniswapV2ERC20 = await deploy('UniswapV2ERC20', {
  //   from: deployer,
  //   contract: 'UniswapV2ERC20', // contract name in ./contracts
  //   args: [],
  //   log: true,
  // });

  const UniswapV2Pair = await deploy('UniswapV2Pair', {
    from: deployer,
    contract: 'UniswapV2Pair', // contract name in ./contracts
    args: [],
    log: true,
  });

  console.log('code hash of UniswapV2Pair:', keccak256(UniswapV2Pair.bytecode!.slice(0, 64)));


  const UniswapV2Factory = await deploy('UniswapV2Factory', {
    from: deployer,
    contract: 'UniswapV2Factory', // contract name in ./contracts
    args: [deployer],
    log: true,
  });


  const SwapRouter = await deploy('SwapRouter', {
    from: deployer,
    contract: 'SwapRouter', // contract name in ./contracts
    args: [UniswapV2Factory.address, WETH],
    log: true,
  });

};

export default func;
func.tags = ['swap'];
