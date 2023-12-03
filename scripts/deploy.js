// deploy.ts

// import "@nomiclabs/hardhat-ethers";
const hre = require("hardhat");

async function main() {
  const verifier = await hre.ethers.deployContract("Verifier");
  await verifier.waitForDeployment();

  const _verifierAddress = verifier.getAddress();

  // Setup you appId in the smart contract
  const appId = BigInt(359n).toString();

  const anonAadhaarVerifier = await ethers.deployContract(
    "AnonAadhaarVerifier",
    [_verifierAddress, appId]
  );
  await anonAadhaarVerifier.waitForDeployment();

  console.log(`contract deployed to ${await anonAadhaarVerifier.getAddress()}`);

  const _anonAadhaarVerifierAddress = verifier.getAddress();

  console.log(_anonAadhaarVerifierAddress, "addddddd");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});