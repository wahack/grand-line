/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
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
} from "../../common";

export interface SvgHelperInterface extends Interface {
  getFunction(
    nameOrSignature: "generateL0" | "generateL1" | "generateL2"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "generateL0",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "generateL1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "generateL2",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "generateL0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "generateL1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "generateL2", data: BytesLike): Result;
}

export interface SvgHelper extends BaseContract {
  connect(runner?: ContractRunner | null): SvgHelper;
  waitForDeployment(): Promise<this>;

  interface: SvgHelperInterface;

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

  generateL0: TypedContractMethod<[], [string], "view">;

  generateL1: TypedContractMethod<[], [string], "view">;

  generateL2: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "generateL0"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "generateL1"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "generateL2"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
