// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface UniswapV2Library$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "UniswapV2Library",
  "sourceName": "contracts/SwapRouter.sol",
  "abi": [],
  "bytecode": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220fa9023442ab9508b720438dd59bd03b3a8f96dde600690bb5681141a71f1c9d664736f6c63430006060033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220fa9023442ab9508b720438dd59bd03b3a8f96dde600690bb5681141a71f1c9d664736f6c63430006060033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "UniswapV2Library",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<UniswapV2Library$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/SwapRouter.sol:UniswapV2Library",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<UniswapV2Library$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "UniswapV2Library",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<UniswapV2Library$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/SwapRouter.sol:UniswapV2Library",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<UniswapV2Library$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "UniswapV2Library",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<UniswapV2Library$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/SwapRouter.sol:UniswapV2Library",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<UniswapV2Library$Type["abi"]>>;
}
