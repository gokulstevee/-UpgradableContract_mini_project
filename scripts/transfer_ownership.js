/**
setting time-lock contract as a proxy admin, so the proxy contract 
so that the MultiSig wallet created with Gnosis Safe can manage the 
proxy contract
   
 */

const { upgrades } = require("hardhat");

async function main() {
  // this will be the address of the TimeLock, as we need it to be the owner of the Proxy Admin.
  const newOwnerOfTheProxyAdmin = "0x045703ac3b753F5A64D30a4056BaD649F5997ad1";

  // The owner of the ProxyAdmin can upgrade our contracts
  console.log("Transfering ownership of ProxyAdmin...");
  await upgrades.admin.transferProxyAdminOwnership(newOwnerOfTheProxyAdmin);
  console.log(
    "Transfered ownership of ProxyAdmin to: ",
    newOwnerOfTheProxyAdmin
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
