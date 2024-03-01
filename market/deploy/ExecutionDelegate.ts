import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const contract = await deploy('ExecutionDelegate', {
    from: deployer,
    contract: 'ExecutionDelegate', // contract name in ./contracts
    args: [deployer],
    log: true,
  });
};

export default func;
func.tags = ['exec'];
