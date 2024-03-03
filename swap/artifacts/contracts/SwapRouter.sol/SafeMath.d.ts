// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface SafeMath$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "SafeMath",
  "sourceName": "contracts/SwapRouter.sol",
  "abi": [],
  "bytecode": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212205fa6d7751e8a0bb63a03dcea41a24a9f390da45fa6aa25c246ceb0d76430408564736f6c63430006060033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212205fa6d7751e8a0bb63a03dcea41a24a9f390da45fa6aa25c246ceb0d76430408564736f6c63430006060033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "contracts/SwapRouter.sol:SafeMath",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<SafeMath$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "contracts/SwapRouter.sol:SafeMath",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<SafeMath$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "contracts/SwapRouter.sol:SafeMath",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<SafeMath$Type["abi"]>>;
}
