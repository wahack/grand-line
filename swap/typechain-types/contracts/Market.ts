/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface MarketInterface extends Interface {
  getFunction(
    nameOrSignature: "buyAsset" | "buyWithEth" | "buyWithSP" | "spToken"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "buyAsset", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyWithEth",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "buyWithSP", values?: undefined): string;
  encodeFunctionData(functionFragment: "spToken", values?: undefined): string;

  decodeFunctionResult(functionFragment: "buyAsset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyWithEth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyWithSP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spToken", data: BytesLike): Result;
}

export interface Market extends BaseContract {
  connect(runner?: ContractRunner | null): Market;
  waitForDeployment(): Promise<this>;

  interface: MarketInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  buyAsset: TypedContractMethod<[], [void], "nonpayable">;

  buyWithEth: TypedContractMethod<
    [nft: AddressLike, tokenId: BigNumberish, price: BigNumberish],
    [void],
    "nonpayable"
  >;

  buyWithSP: TypedContractMethod<[], [void], "nonpayable">;

  spToken: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "buyAsset"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "buyWithEth"
  ): TypedContractMethod<
    [nft: AddressLike, tokenId: BigNumberish, price: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "buyWithSP"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "spToken"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
