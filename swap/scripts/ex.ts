import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import hardhat from 'hardhat';

async function main(hre: HardhatRuntimeEnvironment) {
  const contract = await hre.deployments.get('Execution');
  console.log('contract', contract);
}

main(hardhat).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
