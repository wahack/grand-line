/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  SvgHelper,
  SvgHelperInterface,
} from "../../../contracts/game/SvgHelper";

const _abi = [
  {
    inputs: [],
    name: "generateL0",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "generateL1",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "generateL2",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x613032610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806340cc62a6146100505780636c57f0801461006e5780639ca5e6bd1461008c575b600080fd5b6100586100aa565b6040516100659190610465565b60405180910390f35b610076610142565b6040516100839190610465565b60405180910390f35b6100946101da565b6040516100a19190610465565b60405180910390f35b606060006100d46040516020016100c0906111c3565b604051602081830303815290604052610272565b6040516020016100e4919061126b565b604051602081830303815290604052905061011d81604051602001610109919061136c565b604051602081830303815290604052610272565b60405160200161012d91906113e5565b60405160208183030381529060405291505090565b6060600061016c604051602001610158906122b9565b604051602081830303815290604052610272565b60405160200161017c919061126b565b60405160208183030381529060405290506101b5816040516020016101a1919061136c565b604051602081830303815290604052610272565b6040516020016101c591906113e5565b60405160208183030381529060405291505090565b606060006102046040516020016101f090612e53565b604051602081830303815290604052610272565b604051602001610214919061126b565b604051602081830303815290604052905061024d81604051602001610239919061136c565b604051602081830303815290604052610272565b60405160200161025d91906113e5565b60405160208183030381529060405291505090565b60606000825103610294576040518060200160405280600081525090506103d0565b6000604051806060016040528060408152602001612fbd60409139905060006003600285516102c39190612eb7565b6102cd9190612f1a565b60046102d99190612f4b565b67ffffffffffffffff8111156102f2576102f1612f8d565b5b6040519080825280601f01601f1916602001820160405280156103245781602001600182028036833780820191505090505b509050600182016020820185865187015b80821015610390576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f8116850151845360018401935050610335565b50506003865106600181146103ac57600281146103bf576103c7565b603d6001830353603d60028303536103c7565b603d60018303535b50505080925050505b919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561040f5780820151818401526020810190506103f4565b60008484015250505050565b6000601f19601f8301169050919050565b6000610437826103d5565b61044181856103e0565b93506104518185602086016103f1565b61045a8161041b565b840191505092915050565b6000602082019050818103600083015261047f818461042c565b905092915050565b600081905092915050565b7f3c7376672077696474683d22313030707822206865696768743d22313030707860008201527f222076696577426f783d223020302033362e30302033362e30302220786d6c6e60208201527f733d22687474703a2f2f7777772e77332e6f72672f323030302f73766722207860408201527f6d6c6e733a786c696e6b3d22687474703a2f2f7777772e77332e6f72672f313960608201527f39392f786c696e6b2220617269612d68696464656e3d22747275652220726f6c60808201527f653d22696d672220636c6173733d2269636f6e6966792069636f6e6966792d2d60a08201527f7477656d6f6a6922207072657365727665417370656374526174696f3d22784d60c08201527f6964594d6964206d656574222066696c6c3d222334303430343022207374726f60e08201527f6b653d222334303430343022207374726f6b652d77696474683d22302e3732226101008201527f207472616e73666f726d3d226d617472697828312c20302c20302c20312c20306101208201527f2c203029223e3c672069643d225356475265706f5f62674361727269657222206101408201527f7374726f6b652d77696474683d2230223e3c2f673e3c672069643d22535647526101608201527f65706f5f7472616365724361727269657222207374726f6b652d6c696e6563616101808201527f703d22726f756e6422207374726f6b652d6c696e656a6f696e3d22726f756e646101a08201527f22207374726f6b653d222343434343434322207374726f6b652d77696474683d6101c08201527f22302e3231363030303030303030303030303033223e3c2f673e3c672069643d6101e08201527f225356475265706f5f69636f6e43617272696572223e203c706174682066696c6102008201527f6c3d22236666666666662220643d224d33352e3733342031392e3932394333356102208201527f2e3337352031362e36362033352031352033342031336330203020332d3920316102408201527f2d31322e37632d2e3637342d312e3234362d372e34303420312e3638382d31306102608201527f20332e37633020302d342d2e3939382d372d2e393938533131203420313120346102808201527f43382e34303420312e39383820312e3637342d2e3934362031202e33432d31206102a08201527f34203220313320322031334331203135202e3632352031362e36362e323636206102c08201527f31392e393239432d2e3132392032332e3531332e3635372032362e33372031206102e08201527f3237632e33392e37313620322e33363720332e303235203520356334203320316103008201527f302034203132203473382d312031322d3463322e3633332d312e39373520342e6103208201527f36312d342e32383420352d35632e3334332d2e363320312e3132392d332e34386103408201527f372e3733342d372e3037317a223e203c2f706174683e203c706174682066696c6103608201527f6c3d22233335333133322220643d224d31382031392e35633320302033202e356103808201527f203320312e35732d312e3520332d332033732d332d322d332d33732d2e3030316103a08201527f2d312e3520332d312e357a223e203c2f706174683e203c706174682066696c6c6103c08201527f3d22233338333833382220643d224d322033632e3434372d312e33343220352e6103e08201527f3634203120362e3634203243382e36342035203420382033203131633020302d6104008201527f322d352d312d387a6d33322030632d2e3434372d312e3334322d352e363420316104208201527f2d362e363420326330203020342e3634203320352e363420366330203020322d6104408201527f3520312d387a223e203c2f706174683e203c706174682066696c6c3d222366666104608201527f666666662220643d224d342e39333420352e36303343342e39333420342e31386104808201527f3920313120372031302038732d3220312e3630332d3320322e363033732d322e6104a08201527f3036362d342d322e3036362d357a6d32362e31333220304333312e30363620346104c08201527f2e31383920323520372032362038733220312e363033203320322e36303373326104e08201527f2e3036362d3420322e3036362d357a223e203c2f706174683e203c70617468206105008201527f66696c6c3d22233338333833382220643d224d2e373031203235612e352e35206105208201527f30203020312d2e33312d2e383932632e3136322d2e31323720342e30322d332e6105408201527f31322031302e3634382d322e363035632e3237352e30322e3438312e3236312e6105608201527f34362e353336632d2e3032312e3237352d2e3235372e3530312d2e3533372e346105808201527f36632d362e3233332d2e3437342d392e39313520322e3336362d392e393531206105a08201527f322e333935612e35312e35312030203020312d2e33312e3130367a6d382e38366105c08201527f382d342e363633612e3531322e3531322030203020312d2e3134392d2e3032326105e08201527f632d342e37392d312e3439372d382e3733372d2e3334372d382e3737372d2e336106008201527f3336612e3439392e3439392030203120312d2e3238382d2e393537632e3137336106208201527f2d2e30353220342e3238362d312e32343720392e3336322e333338612e352e356106408201527f2030203020312d2e3134382e3937377a4d33352e323939203235612e352e35206106608201527f3020302030202e33312d2e383932632d2e3136322d2e3132372d342e30322d336106808201527f2e31322d31302e3634382d322e363035612e3439392e3439392030203020302d6106a08201527f2e34362e353336632e3032312e3237352e3235372e3530312e3533372e3436636106c08201527f362e3233332d2e34373420392e39313520322e33363620392e39353120322e336106e08201527f3935612e35312e3531203020302030202e33312e3130367a6d2d382e3836382d6107008201527f342e363633632e3034392030202e312d2e3030372e3134392d2e30323263342e6107208201527f37392d312e34393720382e3733372d2e33343720382e3737372d2e333336612e6107408201527f3439392e343939203020312030202e3238382d2e393537632d2e3137332d2e306107608201527f35322d342e3238362d312e3234372d392e3336322e333338612e352e352030206107808201527f302030202e3134382e3937377a223e203c2f706174683e203c706174682066696107a08201527f6c6c3d22233437343734372220643d224d32352e3332372032352e363232612e6107c08201527f352e352030203020302d2e3535312d2e3036396c2d342032632d312e3837312e6107e08201527f3933352d362e3732372e3934372d362e3737362e393437612e352e35203020306108008201527f20302d2e32352e393333762e303031682e303031762e303031632e3037312e306108208201527f342e3135332e3036332e32342e30363568372e30303863322e363538203020346108408201527f2e3038392d322e31383620342e3437352d332e333432612e352e3520302030206108608201527f302d2e3134372d2e3533367a223e203c2f706174683e203c672066696c6c3d226108808201527f23343734373437223e203c656c6c697073652063783d223132222063793d22316108a08201527f342e35222072783d2232222072793d22332e35223e203c2f656c6c697073653e6108c08201527f203c656c6c697073652063783d223234222063793d2231342e35222072783d226108e08201527f32222072793d22332e35223e203c2f656c6c697073653e20000000000000000061090082015250565b6000610fba61091883610487565b9150610fc582610492565b61091882019050919050565b7f3c7061746820643d224d3231203132612e3939392e3939392030203020312d2e60008201527f3730372d312e3730374332342e35333720362e3034392032382e38313920362060208201527f3239203661312031203020302031202e3030352032632d2e3036352e3030312d60408201527f332e3638372e3039362d372e32393820332e373037412e3939372e393937203060608201527f203020312032312031327a6d2d362030612e3939372e3939372030203020312d60808201527f2e3730372d2e3239334331302e36363720382e30383220372e3033312038203660a08201527f2e393935203861312e30303220312e3030322030203020312d2e3939322d312e60c08201527f303035412e3939372e39393720302030203120372036632e3138203020342e3460e08201527f36332e30343920382e37303720342e323933412e3939392e39393920302030206101008201527f312031352031327a223e203c2f706174683e000000000000000000000000000061012082015250565b600061116061013283610487565b915061116b82610fd1565b61013282019050919050565b7f3c2f673e203c2f673e3c2f7376673e0000000000000000000000000000000000600082015250565b60006111ad600f83610487565b91506111b882611177565b600f82019050919050565b60006111ce82610fac565b91506111d982611152565b91506111e4826111a0565b9150819050919050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b6000611224601a83610487565b915061122f826111ee565b601a82019050919050565b6000611245826103d5565b61124f8185610487565b935061125f8185602086016103f1565b80840191505092915050565b600061127682611217565b9150611282828461123a565b915081905092915050565b7f7b226e616d65223a225361697961506574222c2022696d616765223a22000000600082015250565b60006112c3601d83610487565b91506112ce8261128d565b601d82019050919050565b600081519050919050565b600081905092915050565b60006112fa826112d9565b61130481856112e4565b93506113148185602086016103f1565b80840191505092915050565b7f222c20226465736372697074696f6e223a2022227d0000000000000000000000600082015250565b6000611356601583610487565b915061136182611320565b601582019050919050565b6000611377826112b6565b915061138382846112ef565b915061138e82611349565b915081905092915050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000600082015250565b60006113cf601d83610487565b91506113da82611399565b601d82019050919050565b60006113f0826113c2565b91506113fc828461123a565b915081905092915050565b7f3c7376672077696474683d22313030707822206865696768743d22313030707860008201527f222076696577426f783d223020302033362e30302033362e30302220786d6c6e60208201527f733d22687474703a2f2f7777772e77332e6f72672f323030302f73766722207860408201527f6d6c6e733a786c696e6b3d22687474703a2f2f7777772e77332e6f72672f313960608201527f39392f786c696e6b2220617269612d68696464656e3d22747275652220726f6c60808201527f653d22696d672220636c6173733d2269636f6e6966792069636f6e6966792d2d60a08201527f7477656d6f6a6922207072657365727665417370656374526174696f3d22784d60c08201527f6964594d6964206d656574222066696c6c3d222334303430343022207374726f60e08201527f6b653d222334303430343022207374726f6b652d77696474683d22302e3732226101008201527f207472616e73666f726d3d226d617472697828312c20302c20302c20312c20306101208201527f2c203029223e000000000000000000000000000000000000000000000000000061014082015250565b60006115bd61014683610487565b91506115c882611407565b61014682019050919050565b7f3c672069643d225356475265706f5f62674361727269657222207374726f6b6560008201527f2d77696474683d2230223e3c2f673e3c672069643d225356475265706f5f747260208201527f616365724361727269657222207374726f6b652d6c696e656361703d22726f7560408201527f6e6422207374726f6b652d6c696e656a6f696e3d22726f756e6422207374726f60608201527f6b653d222343434343434322207374726f6b652d77696474683d22302e32313660808201527f3030303030303030303030303033223e3c2f673e3c672069643d22535647526560a08201527f706f5f69636f6e43617272696572223e203c706174682066696c6c3d2223666660c08201527f666666662220643d224d33352e3733342031392e3932394333352e333735203160e08201527f362e36362033352031352033342031336330203020332d3920312d31322e37636101008201527f2d2e3637342d312e3234362d372e34303420312e3638382d313020332e3763306101208201527f20302d342d2e3939382d372d2e3939385331312034203131203443382e3430346101408201527f20312e39383820312e3637342d2e3934362031202e33432d31203420322031336101608201527f20322031334331203135202e3632352031362e36362e3236362031392e3932396101808201527f432d2e3132392032332e3531332e3635372032362e33372031203237632e33396101a08201527f2e37313620322e33363720332e303235203520356334203320313020342031326101c08201527f203473382d312031322d3463322e3633332d312e39373520342e36312d342e326101e08201527f383420352d35632e3334332d2e363320312e3132392d332e3438372e3733342d6102008201527f372e3037317a223e203c2f706174683e203c706174682066696c6c3d222365666102208201527f653336322220643d224d31382031392e35633320302033202e35203320312e356102408201527f732d312e3520332d332033732d332d322d332d33732d2e3030312d312e3520336102608201527f2d312e357a223e203c2f706174683e203c706174682066696c6c3d22236566656102808201527f3336322220643d224d322033632e3434372d312e33343220352e3634203120366102a08201527f2e3634203243382e36342035203420382033203131633020302d322d352d312d6102c08201527f387a6d33322030632d2e3434372d312e3334322d352e363420312d362e3634206102e08201527f326330203020342e3634203320352e363420366330203020322d3520312d387a6103008201527f223e203c2f706174683e203c706174682066696c6c3d222366666666666622206103208201527f643d224d342e39333420352e36303343342e39333420342e31383920313120376103408201527f2031302038732d3220312e3630332d3320322e363033732d322e3036362d342d6103608201527f322e3036362d357a6d32362e31333220304333312e30363620342e31383920326103808201527f3520372032362038733220312e363033203320322e36303373322e3036362d346103a08201527f20322e3036362d357a223e203c2f706174683e203c706174682066696c6c3d226103c08201527f236566653336322220643d224d2e373031203235612e352e352030203020312d6103e08201527f2e33312d2e383932632e3136322d2e31323720342e30322d332e31322031302e6104008201527f3634382d322e363035632e3237352e30322e3438312e3236312e34362e3533366104208201527f632d2e3032312e3237352d2e3235372e3530312d2e3533372e3436632d362e326104408201527f33332d2e3437342d392e39313520322e3336362d392e39353120322e333935616104608201527f2e35312e35312030203020312d2e33312e3130367a6d382e3836382d342e36366104808201527f33612e3531322e3531322030203020312d2e3134392d2e303232632d342e37396104a08201527f2d312e3439372d382e3733372d2e3334372d382e3737372d2e333336612e34396104c08201527f392e3439392030203120312d2e3238382d2e393537632e3137332d2e303532206104e08201527f342e3238362d312e32343720392e3336322e333338612e352e352030203020316105008201527f2d2e3134382e3937377a4d33352e323939203235612e352e35203020302030206105208201527f2e33312d2e383932632d2e3136322d2e3132372d342e30322d332e31322d31306105408201527f2e3634382d322e363035612e3439392e3439392030203020302d2e34362e35336105608201527f36632e3032312e3237352e3235372e3530312e3533372e343663362e3233332d6105808201527f2e34373420392e39313520322e33363620392e39353120322e333935612e35316105a08201527f2e3531203020302030202e33312e3130367a6d2d382e3836382d342e363633636105c08201527f2e3034392030202e312d2e3030372e3134392d2e30323263342e37392d312e346105e08201527f393720382e3733372d2e33343720382e3737372d2e333336612e3439392e34396106008201527f39203020312030202e3238382d2e393537632d2e3137332d2e3035322d342e326106208201527f38362d312e3234372d392e3336322e333338612e352e35203020302030202e316106408201527f34382e3937377a223e203c2f706174683e203c706174682066696c6c3d2223656106608201527f66653336322220643d224d32352e3332372032352e363232612e352e352030206106808201527f3020302d2e3535312d2e3036396c2d342032632d312e3837312e3933352d362e6106a08201527f3732372e3934372d362e3737362e393437612e352e352030203020302d2e32356106c08201527f2e393333762e303031682e303031762e303031632e3037312e30342e3135332e6106e08201527f3036332e32342e30363568372e30303863322e363538203020342e3038392d326107008201527f2e31383620342e3437352d332e333432612e352e352030203020302d2e3134376107208201527f2d2e3533367a223e203c2f706174683e203c672066696c6c3d222365666533366107408201527f32223e203c656c6c697073652063783d223132222063793d2231342e352220726107608201527f783d2232222072793d22332e35223e203c2f656c6c697073653e203c656c6c696107808201527f7073652063783d223234222063793d2231342e35222072783d2232222072793d6107a08201527f22332e35223e203c2f656c6c697073653e203c7061746820643d224d323120316107c08201527f32612e3939392e3939392030203020312d2e3730372d312e3730374332342e356107e08201527f333720362e3034392032382e38313920362032392036613120312030203020316108008201527f202e3030352032632d2e3036352e3030312d332e3638372e3039362d372e32396108208201527f3820332e373037412e3939372e3939372030203020312032312031327a6d2d366108408201527f2030612e3939372e3939372030203020312d2e3730372d2e3239334331302e366108608201527f363720382e30383220372e303331203820362e393935203861312e30303220316108808201527f2e3030322030203020312d2e3939322d312e303035412e3939372e39393720306108a08201527f2030203120372036632e3138203020342e3436332e30343920382e37303720346108c08201527f2e323933412e3939392e3939392030203020312031352031327a223e203c2f706108e08201527f6174683e203c2f673e203c2f673e3c2f7376673e00000000000000000000000061090082015250565b60006120fc61091483610487565b9150612107826115d4565b61091482019050919050565b7f3c7061746820643d224d3231203132612e3939392e3939392030203020312d2e60008201527f3730372d312e3730374332342e35333720362e3034392032382e38313920362060208201527f3239203661312031203020302031202e3030352032632d2e3036352e3030312d60408201527f332e3638372e3039362d372e32393820332e373037412e3939372e393937203060608201527f203020312032312031327a6d2d362030612e3939372e3939372030203020312d60808201527f2e3730372d2e3239334331302e36363720382e30383220372e3033312038203660a08201527f2e393935203861312e30303220312e3030322030203020312d2e3939322d312e60c08201527f303035412e3939372e39393720302030203120372036632e3138203020342e3460e08201527f36332e30343920382e37303720342e323933412e3939392e39393920302030206101008201527f312031352031327a223e3c2f706174683e00000000000000000000000000000061012082015250565b60006122a261013183610487565b91506122ad82612113565b61013182019050919050565b60006122c4826115af565b91506122cf826120ee565b91506122da82612294565b91506122e5826111a0565b9150819050919050565b7f3c672069643d225356475265706f5f62674361727269657222207374726f6b6560008201527f2d77696474683d2230223e3c2f673e3c672069643d225356475265706f5f747260208201527f616365724361727269657222207374726f6b652d6c696e656361703d22726f7560408201527f6e6422207374726f6b652d6c696e656a6f696e3d22726f756e6422207374726f60608201527f6b653d222343434343434322207374726f6b652d77696474683d22302e32313660808201527f3030303030303030303030303033223e3c2f673e3c672069643d22535647526560a08201527f706f5f69636f6e43617272696572223e203c706174682066696c6c3d2223666660c08201527f666666662220643d224d33352e3733342031392e3932394333352e333735203160e08201527f362e36362033352031352033342031336330203020332d3920312d31322e37636101008201527f2d2e3637342d312e3234362d372e34303420312e3638382d313020332e3763306101208201527f20302d342d2e3939382d372d2e3939385331312034203131203443382e3430346101408201527f20312e39383820312e3637342d2e3934362031202e33432d31203420322031336101608201527f20322031334331203135202e3632352031362e36362e3236362031392e3932396101808201527f432d2e3132392032332e3531332e3635372032362e33372031203237632e33396101a08201527f2e37313620322e33363720332e303235203520356334203320313020342031326101c08201527f203473382d312031322d3463322e3633332d312e39373520342e36312d342e326101e08201527f383420352d35632e3334332d2e363320312e3132392d332e3438372e3733342d6102008201527f372e3037317a223e203c2f706174683e203c706174682066696c6c3d222366666102208201527f373037302220643d224d31382031392e35633320302033202e35203320312e356102408201527f732d312e3520332d332033732d332d322d332d33732d2e3030312d312e3520336102608201527f2d312e357a223e203c2f706174683e203c706174682066696c6c3d22236666376102808201527f3037302220643d224d322033632e3434372d312e33343220352e3634203120366102a08201527f2e3634203243382e36342035203420382033203131633020302d322d352d312d6102c08201527f387a6d33322030632d2e3434372d312e3334322d352e363420312d362e3634206102e08201527f326330203020342e3634203320352e363420366330203020322d3520312d387a6103008201527f223e203c2f706174683e203c706174682066696c6c3d222366666666666622206103208201527f643d224d342e39333420352e36303343342e39333420342e31383920313120376103408201527f2031302038732d3220312e3630332d3320322e363033732d322e3036362d342d6103608201527f322e3036362d357a6d32362e31333220304333312e30363620342e31383920326103808201527f3520372032362038733220312e363033203320322e36303373322e3036362d346103a08201527f20322e3036362d357a223e203c2f706174683e203c706174682066696c6c3d226103c08201527f236666373037302220643d224d2e373031203235612e352e352030203020312d6103e08201527f2e33312d2e383932632e3136322d2e31323720342e30322d332e31322031302e6104008201527f3634382d322e363035632e3237352e30322e3438312e3236312e34362e3533366104208201527f632d2e3032312e3237352d2e3235372e3530312d2e3533372e3436632d362e326104408201527f33332d2e3437342d392e39313520322e3336362d392e39353120322e333935616104608201527f2e35312e35312030203020312d2e33312e3130367a6d382e3836382d342e36366104808201527f33612e3531322e3531322030203020312d2e3134392d2e303232632d342e37396104a08201527f2d312e3439372d382e3733372d2e3334372d382e3737372d2e333336612e34396104c08201527f392e3439392030203120312d2e3238382d2e393537632e3137332d2e303532206104e08201527f342e3238362d312e32343720392e3336322e333338612e352e352030203020316105008201527f2d2e3134382e3937377a4d33352e323939203235612e352e35203020302030206105208201527f2e33312d2e383932632d2e3136322d2e3132372d342e30322d332e31322d31306105408201527f2e3634382d322e363035612e3439392e3439392030203020302d2e34362e35336105608201527f36632e3032312e3237352e3235372e3530312e3533372e343663362e3233332d6105808201527f2e34373420392e39313520322e33363620392e39353120322e333935612e35316105a08201527f2e3531203020302030202e33312e3130367a6d2d382e3836382d342e363633636105c08201527f2e3034392030202e312d2e3030372e3134392d2e30323263342e37392d312e346105e08201527f393720382e3733372d2e33343720382e3737372d2e333336612e3439392e34396106008201527f39203020312030202e3238382d2e393537632d2e3137332d2e3035322d342e326106208201527f38362d312e3234372d392e3336322e333338612e352e35203020302030202e316106408201527f34382e3937377a223e203c2f706174683e203c706174682066696c6c3d2223666106608201527f66373037302220643d224d32352e3332372032352e363232612e352e352030206106808201527f3020302d2e3535312d2e3036396c2d342032632d312e3837312e3933352d362e6106a08201527f3732372e3934372d362e3737362e393437612e352e352030203020302d2e32356106c08201527f2e393333762e303031682e303031762e303031632e3037312e30342e3135332e6106e08201527f3036332e32342e30363568372e30303863322e363538203020342e3038392d326107008201527f2e31383620342e3437352d332e333432612e352e352030203020302d2e3134376107208201527f2d2e3533367a223e203c2f706174683e203c672066696c6c3d222366663730376107408201527f30223e203c656c6c697073652063783d223132222063793d2231342e352220726107608201527f783d2232222072793d22332e35223e203c2f656c6c697073653e203c656c6c696107808201527f7073652063783d223234222063793d2231342e35222072783d2232222072793d6107a08201527f22332e35223e203c2f656c6c697073653e203c7061746820643d224d323120316107c08201527f32612e3939392e3939392030203020312d2e3730372d312e3730374332342e356107e08201527f333720362e3034392032382e38313920362032392036613120312030203020316108008201527f202e3030352032632d2e3036352e3030312d332e3638372e3039362d372e32396108208201527f3820332e373037412e3939372e3939372030203020312032312031327a6d2d366108408201527f2030612e3939372e3939372030203020312d2e3730372d2e3239334331302e366108608201527f363720382e30383220372e303331203820362e393935203861312e30303220316108808201527f2e3030322030203020312d2e3939322d312e303035412e3939372e39393720306108a08201527f2030203120372036632e3138203020342e3436332e30343920382e37303720346108c08201527f2e323933412e3939392e3939392030203020312031352031327a223e200000006108e082015250565b6000612df06108fd83610487565b9150612dfb826122ef565b6108fd82019050919050565b7f3c2f706174683e203c2f673e203c2f673e3c2f7376673e000000000000000000600082015250565b6000612e3d601783610487565b9150612e4882612e07565b601782019050919050565b6000612e5e826115af565b9150612e6982612de2565b9150612e7482612e30565b9150819050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612ec282612e7e565b9150612ecd83612e7e565b9250828201905080821115612ee557612ee4612e88565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612f2582612e7e565b9150612f3083612e7e565b925082612f4057612f3f612eeb565b5b828204905092915050565b6000612f5682612e7e565b9150612f6183612e7e565b9250828202612f6f81612e7e565b91508282048414831517612f8657612f85612e88565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212201e1d954a03c074578d53108fdabdcf75fa15b8ab7d2c394462fe9be682d70b9d64736f6c63430008140033";

type SvgHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SvgHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SvgHelper__factory extends ContractFactory {
  constructor(...args: SvgHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SvgHelper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SvgHelper__factory {
    return super.connect(runner) as SvgHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SvgHelperInterface {
    return new Interface(_abi) as SvgHelperInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SvgHelper {
    return new Contract(address, _abi, runner) as unknown as SvgHelper;
  }
}
