const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "5a8c63cf3e2244048144b2d3e778b39b";
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
//const mnemonic = "spirit supply whale amount human item harsh scare congress discover talent hamster";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
    },
  }
};