// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface TransferHelper$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "TransferHelper",
  "sourceName": "contracts/SwapRouter.sol",
  "abi": [],
  "bytecode": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122016c18d10a9d11c3b312c935bce60107102058d47660007bb735a29d8bc3f966264736f6c63430006060033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122016c18d10a9d11c3b312c935bce60107102058d47660007bb735a29d8bc3f966264736f6c63430006060033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "TransferHelper",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<TransferHelper$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/SwapRouter.sol:TransferHelper",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<TransferHelper$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "TransferHelper",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<TransferHelper$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/SwapRouter.sol:TransferHelper",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<TransferHelper$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "TransferHelper",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TransferHelper$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/SwapRouter.sol:TransferHelper",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TransferHelper$Type["abi"]>>;
}