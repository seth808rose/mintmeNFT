const hre = require("hardhat");

async function main() {
  const MintMeNFT = await hre.ethers.getContractFactory("MintMeNFT");
  const mintmeNFT = await MintMeNFT.deploy();

  await mintmeNFT.deployed();

  console.log("MintMeNFT deployed to:", mintmeNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
