import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { keccak256 } from 'ethers';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const factory = await deploy('UniswapV2Factory', {
    from: deployer,
    contract: 'UniswapV2Factory', // contract name in ./contracts
    args: [deployer],
    log: true,
  });

  console.log('code hash of factory:', keccak256(factory.bytecode!));

  const Pair = await deploy('UniswapV2Pair', {
    from: deployer,
    contract: 'UniswapV2Pair', // contract name in ./contracts
    args: [],
    log: true,
  });

  const UniswapV2ERC20 = await deploy('UniswapV2ERC20', {
    from: deployer,
    contract: 'UniswapV2ERC20', // contract name in ./contracts
    args: [],
    log: true,
  });


};

export default func;
func.tags = ['swap'];
