import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const contract = await deploy('SaiyaPetTest1', {
    from: deployer,
    contract: 'SaiyaPetTest', // contract name in ./contracts
    args: [],
    log: true,
  });
  await hre.run('graph', {
    contractName: 'SaiyaPetTest',
    address: contract.address,
    abi: contract.abi,
    mergeEntities: false,
    startBlock: contract.receipt && contract.receipt.blockNumber,
  });
};

export default func;
func.tags = ['pettest'];
