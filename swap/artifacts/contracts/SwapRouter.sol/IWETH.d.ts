// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IWETH$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IWETH",
  "sourceName": "contracts/SwapRouter.sol",
  "abi": [
    {
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "IWETH",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IWETH$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/SwapRouter.sol:IWETH",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IWETH$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IWETH",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IWETH$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/SwapRouter.sol:IWETH",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IWETH$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IWETH",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IWETH$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/SwapRouter.sol:IWETH",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IWETH$Type["abi"]>>;
}