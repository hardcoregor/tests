
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

// Initialize hardhat-tenderly plugin for automatic contract verification
var tdly = require("@tenderly/hardhat-tenderly");
tdly.setup({ automaticVerifications: false });

// Your private key and tenderly devnet URL (which contains our secret id)
// We read both from the .env file so we can push this config to git and/or share publicly
const privateKey = process.env.PRIVATE_KEY;
const tenderlyUrl = process.env.TENDERLY_URL;

module.exports = {
  solidity: "0.8.17",
  networks: {
    devnet: {
      url: 'https://rpc.vnet.tenderly.co/devnet/test-devnet/a1fa59af-e7b7-4110-bdc6-d3d5401a3a62',
      // This will allow us to use our private key for signing later
      accounts: [`0x${privateKey}`],
      // This is the mainnet chain ID
      chainId: 1,
    },
  },
  tenderly: {
    // Replace with project slug in Tenderly
    project: "project",
    // Replace with your Tenderly username
    username: "my-username",
    // Perform contract verification in private mode
    privateVerification: false,
  },
};