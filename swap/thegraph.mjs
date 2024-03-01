import { exec, spawn } from 'child_process';
import { input, select } from '@inquirer/prompts';

const graphName = 'saiyapet';

const network = await select({
  message: 'Select a deploy network:',
  choices: [
    { name: 'Blast Sepolia', value: 'blast-testnet' },
    { name: 'Blast mainnet', value: 'blast', disabled: true },
  ],
});

const action = await select({
  message: 'Select a deploy network:',
  choices: [
    { name: 'codegen', value: 'cd ./subgraph && graph codegen' },
    { name: 'build', value: `cd ./subgraph && graph build --network ${network}` },
    // { name: 'deploy', value: `cd ./subgraph && graph deploy ${graphName} --network ${network}` },
  ],
});

exec(action, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log('------command execution result:----');
  console.log(stdout);
});
