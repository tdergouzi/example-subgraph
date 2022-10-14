require('babel-register')
require('babel-polyfill')
const HDWalletProvider = require('truffle-hdwallet-provider')
const privateKeys = [""]

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://ropsten.infura.io/v3/${process.env.ROPSTEN_INFURA_API_KEY}`
        )
      },
      network_id: '3',
    },
    bsctest: {
      provider: function () {
        return new HDWalletProvider(privateKeys, "https://data-seed-prebsc-1-s1.binance.org:8545/", 0, 2)
      },
      network_id: '97',
    },
  },
  compilers: {
    solc: {
      version: '^0.8.7'
    }
  }
}
