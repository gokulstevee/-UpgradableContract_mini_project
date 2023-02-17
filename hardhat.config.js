require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */

const {
  etherscanAPIKey,
  deployerWalletPrivateKey,
  infuraGoerliAPI,
} = require("./secret.json");

module.exports = {
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: infuraGoerliAPI,
      accounts: [deployerWalletPrivateKey],
      gas: 10000000,
    },
  },
  etherscan: {
    apiKey: etherscanAPIKey,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
