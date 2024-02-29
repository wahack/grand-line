import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, execute } = deployments;

  const { deployer } = await getNamedAccounts();

  const contract = await deploy('Exchange', {
    from: deployer,
    contract: 'Exchange', // contract name in ./contracts
    args: [],
    log: true,
  });
  const execDelegate = await deployments.get('ExecutionDelegate');

  await execute(
    'Exchange',
    { from: deployer, log: true, gasLimit: 2100281 },
    'initialize',
    deployer,
    execDelegate.address
  ).catch((e) => {
    console.log(e);
  });

  await execute(
    'ExecutionDelegate',
    { from: deployer, log: true, gasLimit: 2100281 },
    'approveContract',
    contract.address
  ).catch((e) => {
    console.log(e);
  });
};

export default func;
func.tags = ['ex'];
