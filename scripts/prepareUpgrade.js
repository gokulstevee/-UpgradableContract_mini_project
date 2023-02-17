const { ethers, upgrades } = require("hardhat");

async function main() {
  // proxyAddressis the address where the version 1 (BoxV1) smart contract is deployed at
  const proxyAddress = "0x34A9CCAECE2988918287F7848A635aDb37c1aA24";

  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Preparing upgrade...");

  // contract is upgraded to V2 by passing V1 SC address and V2 SC code in prepareUpgrade() function
  const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
  console.log("BoxV2 at: ", boxV2Address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
