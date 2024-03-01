/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { SP, SPInterface } from "../../contracts/SP";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialAuthority",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "AccessManagedInvalidAuthority",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "delay",
        type: "uint32",
      },
    ],
    name: "AccessManagedRequiredDelay",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AccessManagedUnauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "ERC2612ExpiredSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC2612InvalidSigner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256",
      },
    ],
    name: "InvalidAccountNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isConsumingScheduledOp",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101606040523480156200001257600080fd5b5060405162002aac38038062002aac833981810160405281019062000038919062000415565b6040518060400160405280600d81526020017f5361697961506574546f6b656e00000000000000000000000000000000000000815250806040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250836040518060400160405280600d81526020017f5361697961506574546f6b656e000000000000000000000000000000000000008152506040518060400160405280600281526020017f53500000000000000000000000000000000000000000000000000000000000008152508160039081620001239190620006c1565b508060049081620001359190620006c1565b50505062000149816200020260201b60201c565b50620001606006836200027f60201b90919060201c565b61012081815250506200017e6007826200027f60201b90919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a08181525050620001bd620002d760201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505050505050620009b4565b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad81604051620002749190620007b9565b60405180910390a150565b6000602083511015620002a5576200029d836200033460201b60201c565b9050620002d1565b82620002b783620003a160201b60201c565b6000019081620002c89190620006c1565b5060ff60001b90505b92915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e0516101005146306040516020016200031995949392919062000802565b60405160208183030381529060405280519060200120905090565b600080829050601f815111156200038457826040517f305a27a90000000000000000000000000000000000000000000000000000000081526004016200037b9190620008ee565b60405180910390fd5b805181620003929062000944565b60001c1760001b915050919050565b6000819050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003dd82620003b0565b9050919050565b620003ef81620003d0565b8114620003fb57600080fd5b50565b6000815190506200040f81620003e4565b92915050565b6000602082840312156200042e576200042d620003ab565b5b60006200043e84828501620003fe565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004c957607f821691505b602082108103620004df57620004de62000481565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005497fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200050a565b6200055586836200050a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620005a26200059c62000596846200056d565b62000577565b6200056d565b9050919050565b6000819050919050565b620005be8362000581565b620005d6620005cd82620005a9565b84845462000517565b825550505050565b600090565b620005ed620005de565b620005fa818484620005b3565b505050565b5b81811015620006225762000616600082620005e3565b60018101905062000600565b5050565b601f82111562000671576200063b81620004e5565b6200064684620004fa565b8101602085101562000656578190505b6200066e6200066585620004fa565b830182620005ff565b50505b505050565b600082821c905092915050565b6000620006966000198460080262000676565b1980831691505092915050565b6000620006b1838362000683565b9150826002028217905092915050565b620006cc8262000447565b67ffffffffffffffff811115620006e857620006e762000452565b5b620006f48254620004b0565b6200070182828562000626565b600060209050601f83116001811462000739576000841562000724578287015190505b620007308582620006a3565b865550620007a0565b601f1984166200074986620004e5565b60005b8281101562000773578489015182556001820191506020850194506020810190506200074c565b868310156200079357848901516200078f601f89168262000683565b8355505b6001600288020188555050505b505050505050565b620007b381620003d0565b82525050565b6000602082019050620007d06000830184620007a8565b92915050565b6000819050919050565b620007eb81620007d6565b82525050565b620007fc816200056d565b82525050565b600060a082019050620008196000830188620007e0565b620008286020830187620007e0565b620008376040830186620007e0565b620008466060830185620007f1565b620008556080830184620007a8565b9695505050505050565b600082825260208201905092915050565b60005b838110156200089057808201518184015260208101905062000873565b60008484015250505050565b6000601f19601f8301169050919050565b6000620008ba8262000447565b620008c681856200085f565b9350620008d881856020860162000870565b620008e3816200089c565b840191505092915050565b600060208201905081810360008301526200090a8184620008ad565b905092915050565b600081519050919050565b6000819050602082019050919050565b60006200093b8251620007d6565b80915050919050565b6000620009518262000912565b826200095d846200091d565b90506200096a816200092d565b92506020821015620009ad57620009a87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff836020036008026200050a565b831692505b5050919050565b60805160a05160c05160e05161010051610120516101405161209d62000a0f6000396000610e4101526000610e06015260006113560152600061133501526000610b8201526000610bd801526000610c01015261209d6000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806379cc6790116100ad57806395d89b411161007157806395d89b4114610310578063a9059cbb1461032e578063bf7e214f1461035e578063d505accf1461037c578063dd62ed3e1461039857610121565b806379cc6790146102665780637a9e5e4b146102825780637ecebe001461029e57806384b0196e146102ce5780638fb36037146102f257610121565b8063313ce567116100f4578063313ce567146101c25780633644e515146101e057806340c10f19146101fe57806342966c681461021a57806370a082311461023657610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd1461017457806323b872dd14610192575b600080fd5b61012e6103c8565b60405161013b9190611843565b60405180910390f35b61015e600480360381019061015991906118fe565b61045a565b60405161016b9190611959565b60405180910390f35b61017c61047d565b6040516101899190611983565b60405180910390f35b6101ac60048036038101906101a7919061199e565b610487565b6040516101b99190611959565b60405180910390f35b6101ca6104b6565b6040516101d79190611a0d565b60405180910390f35b6101e86104bf565b6040516101f59190611a41565b60405180910390f35b610218600480360381019061021391906118fe565b6104ce565b005b610234600480360381019061022f9190611a5c565b6104dc565b005b610250600480360381019061024b9190611a89565b6104f0565b60405161025d9190611983565b60405180910390f35b610280600480360381019061027b91906118fe565b610538565b005b61029c60048036038101906102979190611a89565b610558565b005b6102b860048036038101906102b39190611a89565b610644565b6040516102c59190611983565b60405180910390f35b6102d6610656565b6040516102e99796959493929190611bbe565b60405180910390f35b6102fa610700565b6040516103079190611c7d565b60405180910390f35b61031861072e565b6040516103259190611843565b60405180910390f35b610348600480360381019061034391906118fe565b6107c0565b6040516103559190611959565b60405180910390f35b6103666107e3565b6040516103739190611c98565b60405180910390f35b61039660048036038101906103919190611d0b565b61080d565b005b6103b260048036038101906103ad9190611dad565b610955565b6040516103bf9190611983565b60405180910390f35b6060600380546103d790611e1c565b80601f016020809104026020016040519081016040528092919081815260200182805461040390611e1c565b80156104505780601f1061042557610100808354040283529160200191610450565b820191906000526020600020905b81548152906001019060200180831161043357829003601f168201915b5050505050905090565b6000806104656109dc565b90506104728185856109e4565b600191505092915050565b6000600254905090565b6000806104926109dc565b905061049f8582856109f6565b6104aa858585610a8a565b60019150509392505050565b60006012905090565b60006104c9610b7e565b905090565b6104d88282610c35565b5050565b6104ed6104e76109dc565b82610cb7565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61054a826105446109dc565b836109f6565b6105548282610cb7565b5050565b60006105626109dc565b905061056c6107e3565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105db57806040517f068ca9d80000000000000000000000000000000000000000000000000000000081526004016105d29190611c98565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff163b0361063757816040517fc2f31e5e00000000000000000000000000000000000000000000000000000000815260040161062e9190611c98565b60405180910390fd5b61064082610d39565b5050565b600061064f82610db4565b9050919050565b60006060806000806000606061066a610dfd565b610672610e38565b46306000801b600067ffffffffffffffff81111561069357610692611e4d565b5b6040519080825280602002602001820160405280156106c15781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b6000600560149054906101000a900460ff1661072057600060e01b610729565b638fb3603760e01b5b905090565b60606004805461073d90611e1c565b80601f016020809104026020016040519081016040528092919081815260200182805461076990611e1c565b80156107b65780601f1061078b576101008083540402835291602001916107b6565b820191906000526020600020905b81548152906001019060200180831161079957829003601f168201915b5050505050905090565b6000806107cb6109dc565b90506107d8818585610a8a565b600191505092915050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b8342111561085257836040517f627913020000000000000000000000000000000000000000000000000000000081526004016108499190611983565b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886108818c610e73565b8960405160200161089796959493929190611e7c565b60405160208183030381529060405280519060200120905060006108ba82610eca565b905060006108ca82878787610ee4565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461093e57808a6040517f4b800e46000000000000000000000000000000000000000000000000000000008152600401610935929190611edd565b60405180910390fd5b6109498a8a8a6109e4565b50505050505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b6109f18383836001610f14565b505050565b6000610a028484610955565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a845781811015610a74578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610a6b93929190611f06565b60405180910390fd5b610a8384848484036000610f14565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610afc5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610af39190611c98565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b6e5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610b659190611c98565b60405180910390fd5b610b798383836110eb565b505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015610bfa57507f000000000000000000000000000000000000000000000000000000000000000046145b15610c27577f00000000000000000000000000000000000000000000000000000000000000009050610c32565b610c2f611310565b90505b90565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ca75760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610c9e9190611c98565b60405180910390fd5b610cb3600083836110eb565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d295760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610d209190611c98565b60405180910390fd5b610d35826000836110eb565b5050565b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad81604051610da99190611c98565b60405180910390a150565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060610e3360067f00000000000000000000000000000000000000000000000000000000000000006113a690919063ffffffff16565b905090565b6060610e6e60077f00000000000000000000000000000000000000000000000000000000000000006113a690919063ffffffff16565b905090565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050559050919050565b6000610edd610ed7610b7e565b83611456565b9050919050565b600080600080610ef688888888611497565b925092509250610f06828261158b565b829350505050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610f865760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610f7d9190611c98565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ff85760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610fef9190611c98565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080156110e5578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516110dc9190611983565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361113d5780600260008282546111319190611f6c565b92505081905550611210565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156111c9578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016111c093929190611f06565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361125957806002600082825403925050819055506112a6565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516113039190611983565b60405180910390a3505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000463060405160200161138b959493929190611fa0565b60405160208183030381529060405280519060200120905090565b606060ff60001b83146113c3576113bc836116ef565b9050611450565b8180546113cf90611e1c565b80601f01602080910402602001604051908101604052809291908181526020018280546113fb90611e1c565b80156114485780601f1061141d57610100808354040283529160200191611448565b820191906000526020600020905b81548152906001019060200180831161142b57829003601f168201915b505050505090505b92915050565b60006040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b60008060007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08460001c11156114d7576000600385925092509250611581565b6000600188888888604051600081526020016040526040516114fc9493929190611ff3565b6020604051602081039080840390855afa15801561151e573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361157257600060016000801b93509350935050611581565b8060008060001b935093509350505b9450945094915050565b6000600381111561159f5761159e612038565b5b8260038111156115b2576115b1612038565b5b03156116eb57600160038111156115cc576115cb612038565b5b8260038111156115df576115de612038565b5b03611616576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600381111561162a57611629612038565b5b82600381111561163d5761163c612038565b5b03611682578060001c6040517ffce698f70000000000000000000000000000000000000000000000000000000081526004016116799190611983565b60405180910390fd5b60038081111561169557611694612038565b5b8260038111156116a8576116a7612038565b5b036116ea57806040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004016116e19190611a41565b60405180910390fd5b5b5050565b606060006116fc83611763565b90506000602067ffffffffffffffff81111561171b5761171a611e4d565b5b6040519080825280601f01601f19166020018201604052801561174d5781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b60008060ff8360001c169050601f8111156117aa576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b600081519050919050565b600082825260208201905092915050565b60005b838110156117ed5780820151818401526020810190506117d2565b60008484015250505050565b6000601f19601f8301169050919050565b6000611815826117b3565b61181f81856117be565b935061182f8185602086016117cf565b611838816117f9565b840191505092915050565b6000602082019050818103600083015261185d818461180a565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118958261186a565b9050919050565b6118a58161188a565b81146118b057600080fd5b50565b6000813590506118c28161189c565b92915050565b6000819050919050565b6118db816118c8565b81146118e657600080fd5b50565b6000813590506118f8816118d2565b92915050565b6000806040838503121561191557611914611865565b5b6000611923858286016118b3565b9250506020611934858286016118e9565b9150509250929050565b60008115159050919050565b6119538161193e565b82525050565b600060208201905061196e600083018461194a565b92915050565b61197d816118c8565b82525050565b60006020820190506119986000830184611974565b92915050565b6000806000606084860312156119b7576119b6611865565b5b60006119c5868287016118b3565b93505060206119d6868287016118b3565b92505060406119e7868287016118e9565b9150509250925092565b600060ff82169050919050565b611a07816119f1565b82525050565b6000602082019050611a2260008301846119fe565b92915050565b6000819050919050565b611a3b81611a28565b82525050565b6000602082019050611a566000830184611a32565b92915050565b600060208284031215611a7257611a71611865565b5b6000611a80848285016118e9565b91505092915050565b600060208284031215611a9f57611a9e611865565b5b6000611aad848285016118b3565b91505092915050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b611aeb81611ab6565b82525050565b611afa8161188a565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611b35816118c8565b82525050565b6000611b478383611b2c565b60208301905092915050565b6000602082019050919050565b6000611b6b82611b00565b611b758185611b0b565b9350611b8083611b1c565b8060005b83811015611bb1578151611b988882611b3b565b9750611ba383611b53565b925050600181019050611b84565b5085935050505092915050565b600060e082019050611bd3600083018a611ae2565b8181036020830152611be5818961180a565b90508181036040830152611bf9818861180a565b9050611c086060830187611974565b611c156080830186611af1565b611c2260a0830185611a32565b81810360c0830152611c348184611b60565b905098975050505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611c7781611c42565b82525050565b6000602082019050611c926000830184611c6e565b92915050565b6000602082019050611cad6000830184611af1565b92915050565b611cbc816119f1565b8114611cc757600080fd5b50565b600081359050611cd981611cb3565b92915050565b611ce881611a28565b8114611cf357600080fd5b50565b600081359050611d0581611cdf565b92915050565b600080600080600080600060e0888a031215611d2a57611d29611865565b5b6000611d388a828b016118b3565b9750506020611d498a828b016118b3565b9650506040611d5a8a828b016118e9565b9550506060611d6b8a828b016118e9565b9450506080611d7c8a828b01611cca565b93505060a0611d8d8a828b01611cf6565b92505060c0611d9e8a828b01611cf6565b91505092959891949750929550565b60008060408385031215611dc457611dc3611865565b5b6000611dd2858286016118b3565b9250506020611de3858286016118b3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611e3457607f821691505b602082108103611e4757611e46611ded565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060c082019050611e916000830189611a32565b611e9e6020830188611af1565b611eab6040830187611af1565b611eb86060830186611974565b611ec56080830185611974565b611ed260a0830184611974565b979650505050505050565b6000604082019050611ef26000830185611af1565b611eff6020830184611af1565b9392505050565b6000606082019050611f1b6000830186611af1565b611f286020830185611974565b611f356040830184611974565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f77826118c8565b9150611f82836118c8565b9250828201905080821115611f9a57611f99611f3d565b5b92915050565b600060a082019050611fb56000830188611a32565b611fc26020830187611a32565b611fcf6040830186611a32565b611fdc6060830185611974565b611fe96080830184611af1565b9695505050505050565b60006080820190506120086000830187611a32565b61201560208301866119fe565b6120226040830185611a32565b61202f6060830184611a32565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea26469706673582212205272441fc66184058b5c2ef63a5382f70827ea2393802c7faac3b0d68ffc0c6764736f6c63430008140033";

type SPConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SPConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SP__factory extends ContractFactory {
  constructor(...args: SPConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialAuthority: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialAuthority, overrides || {});
  }
  override deploy(
    initialAuthority: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialAuthority, overrides || {}) as Promise<
      SP & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SP__factory {
    return super.connect(runner) as SP__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SPInterface {
    return new Interface(_abi) as SPInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SP {
    return new Contract(address, _abi, runner) as unknown as SP;
  }
}