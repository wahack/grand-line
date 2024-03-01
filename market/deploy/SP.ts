import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, execute } = deployments;

  const { deployer } = await getNamedAccounts();

  const contract = await deploy('SP', {
    from: deployer,
    contract: 'SP',
    args: [deployer],
    log: true,
  });
};

export default func;
func.tags = ['sp', 'all'];
