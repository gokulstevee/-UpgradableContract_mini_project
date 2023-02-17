const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");

let Box, BoxV2, box, boxV2;

describe("BoxV2 (proxy)", () => {
  beforeEach(async function () {
    Box = await ethers.getContractFactory("Box");
    BoxV2 = await ethers.getContractFactory("BoxV2");

    box = await upgrades.deployProxy(Box, [10], { initializer: "stores" });
    boxV2 = await upgrades.upgradeProxy(box.address, BoxV2);
  });

  it("retrieve returns a value previously incremented", async function () {
    //Increment
    await boxV2.increment();

    expect((await boxV2.retrieve()).toString()).to.equal("11");
  });
});
