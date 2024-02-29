import { exec } from 'child_process';
import { input, select } from '@inquirer/prompts';

const network = await select({
  message: 'Select a deploy network:',
  choices: [
    { name: 'Blast testnet', value: 'blast-testnet' },
    { name: 'ganache', value: 'ganache' },
    { name: 'Blast mainnet', value: 'blast', disabled: true },
  ],
});
let tag = await input({ message: 'Enter the tag of the deploy script shows in deploy folder: ' });
tag = tag.trim();

const cmd = `hardhat deploy --network ${network}  --export ../web/app/contracts/${network}/artifacts.json --tags ${tag}`;

// `npx hardhat deploy --network blast-testnet  --export ../web/app/contracts/blast-testnet/artifacts.json --tags `

exec(cmd, (error, stdout, stderr) => {
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
