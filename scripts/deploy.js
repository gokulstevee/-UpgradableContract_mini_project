const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("BoxV1");
  console.log("Deploying Box...");
  const box = await upgrades.deployProxy(Box, [10], { initializer: "set" });
  console.log("Box deployed to: ", box.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
