const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "5a39d5b0c4524bde83bd4f9fb88bfdb8";
const mnemonic = "stage broccoli salmon flower brass all film valid deny pride creek fringe";



module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        skipDryRun: true
    },

  }
};