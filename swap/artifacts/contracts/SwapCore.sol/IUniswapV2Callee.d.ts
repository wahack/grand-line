// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IUniswapV2Callee$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IUniswapV2Callee",
  "sourceName": "contracts/SwapCore.sol",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "uniswapV2Call",
      "outputs": [],
      "payable": false,
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
    contractName: "IUniswapV2Callee",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IUniswapV2Callee$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/SwapCore.sol:IUniswapV2Callee",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IUniswapV2Callee$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IUniswapV2Callee",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IUniswapV2Callee$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/SwapCore.sol:IUniswapV2Callee",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IUniswapV2Callee$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IUniswapV2Callee",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IUniswapV2Callee$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/SwapCore.sol:IUniswapV2Callee",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IUniswapV2Callee$Type["abi"]>>;
}