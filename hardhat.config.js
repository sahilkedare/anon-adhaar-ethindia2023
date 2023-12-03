/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-dependency-compiler");

module.exports = {
  solidity: "0.8.19",
  dependencyCompiler: {
    paths: ["anon-aadhaar-contracts/contracts/Verifier.sol"],
  },
  networks: {
		hardhat: {
			chainId: 31337,
		},
	},

};