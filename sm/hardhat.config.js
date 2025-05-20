require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const { INFURA_API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 11155111,
    },
  },
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
