// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {SwapRouter} from "../contracts/SwapRouter.sol";

contract SwapRouterTest is Test {
    SwapRouter public swapRouter;
    uint256 netFork;
    address public factory = 0x3560Fe14fE6D232186259d2ce4C742192206Ef15;
    address public WETH9 = 0xd38e292e9C74f99C6B05eC897Dd7A39d6F8a3A96;
    function setUp() public {
        netFork = vm.createFork("http://127.0.0.1:7545");
        vm.selectFork(netFork);
        swapRouter = new SwapRouter(factory, WETH9);
    }

    function test_Increment() public {
        counter.increment();
        assertEq(counter.number(), 1);
    }

    function testFuzz_SetNumber(uint256 x) public {
        counter.setNumber(x);
        assertEq(counter.number(), x);
    }
}
