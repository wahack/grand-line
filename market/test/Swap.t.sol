// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.6.2;

import {Test, console} from "forge-std/Test.sol";
import {console2} from "forge-std/Console2.sol";
import {SwapRouter} from "../contracts/SwapRouter.sol";
import {UniswapV2Factory, UniswapV2Pair} from '../contracts/SwapCore.sol';
import {WETH9} from '../contracts/WETH9.sol';

contract SwapTest is Test {
    address internal deployer;
    SwapRouter public swapRouter;
    UniswapV2Pair public pair;
    UniswapV2Factory public factory;
    WETH9 public weth;
    uint256 netFork;
    function setUp() public {
        deployer = vm.envAddress("LOCAL_DEPLOYER");
        vm.startBroadcast(deployer);
        pair = new UniswapV2Pair();
        weth = new WETH9();
        bytes memory bytecode = type(pair).creationCode;
        bytes memory codehash = keccak256(bytecode);
        console2.log("codehash: ", codehash);
        factory = new UniswapV2Factory(address(deployer));
        swapRouter = new SwapRouter(address(factory), address(weth));
        vm.stopBroadcast(); 
    }

    function testSwapRouter() public {
        console.log("swapRouter: ", address(swapRouter));
        console.log("factory: ", address(factory));
        console.log("weth: ", address(weth));
        console.log("pair: ", address(pair));
    }
}
