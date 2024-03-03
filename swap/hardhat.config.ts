import { HardhatUserConfig } from 'hardhat/config';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomicfoundation/hardhat-viem';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-foundry';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import '@graphprotocol/hardhat-graph';

const config: HardhatUserConfig = {
  solidity:{
    compilers:[
      {
        version: '0.8.20'
      },{
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  networks: {
    sepolia: {
      url: 'https://ethereum-sepolia.publicnode.com',
      chainId: 11155111,
      accounts: require('../config/sepolia-wallet.js'),
    },
    'blast-mainnet': {
      url: '',
      gasPrice: 1000000000,
    },
    'blast-testnet': {
      url: 'https://sepolia.blast.io',
      chainId: 168587773,
      gasPrice: 1000000000,
      accounts: require('../config/sepolia-wallet.js'),
    },
    // local ganache cli
    ganache: {
      url: 'http://127.0.0.1:7545',
      chainId: 1337,
      gasPrice: 1000000000,
      accounts: require('../config/ganache-wallet.js'),
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  // @ts-ignore
  subgraph: {
    name: 'saiyapet', // Defaults to the name of the root folder of the hardhat project
    product: 'subgraph-studio', // 'hosted-service'|'subgraph-studio', // Defaults to 'subgraph-studio'
    // node: 'http://127.0.0.1:8020',
    indexEvents: true, // Defaults to false
    allowSimpleName: true, // Defaults to `false` if product is `hosted-service` and `true` if product is `subgraph-studio`
  },
  paths: {
    deploy: 'deploy',
    deployments: 'deployments',
    subgraph: './subgraph', // Defaults to './subgraph'
  },
  // defaultNetwork: 'blast-testnet',
};

export default config;
