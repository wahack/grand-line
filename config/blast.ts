export default {
  'blast-mainnet': {},
  'blast-testnet': {
    // L1 ETH => L2 Blast ETH
    L1BlastBridgeProxy: '0xc644cc19d2A9388b71dd1dEde07cFFC73237Dca8',
    // bridge ERC20
    L1StandardBridge: '0xDeDa8D3CCf044fE2A16217846B6e1f1cfD8e122f',
    // bridge ERC721
    L1ERC721Bridge: '0x993385F8A2aD69dfa0884287801191DE9805Ff37',

    ETHYieldManagerProxy: '0xed530ba33b4dc14572864bb9a776c9a42cf89fa5',

    // blast  contract: yield/clainGas
    L2BlastYield: '0x4300000000000000000000000000000000000002',

    // L2 WETH address
    WETH: '0x4200000000000000000000000000000000000023',
    USDB: '0x4200000000000000000000000000000000000022',
  },
};
