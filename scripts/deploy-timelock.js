//deployer for timelock

const { ethers } = require("hardhat");
const argumentsArray = require("../arguments.js");

async function main() {
  let delayTime = argumentsArray[0];
  let proposalArray = argumentsArray[1];
  let executorArray = argumentsArray[2];
  let admin = argumentsArray[3];

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the accounts: ", deployer.address);
  console.log("Account balance: ", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("TimelockController");

  const token = await Token.deploy(
    delayTime,
    proposalArray,
    executorArray,
    admin
  );

  console.log("Time-lock address: ", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit();
  });
