import { CONTRACT_KEY } from "../constants/index";
import hre from "hardhat";
import "@nomiclabs/hardhat-etherscan";
import { appendAddress, getAddress, sleep } from "../utils";

async function main() {
  const { ethers, network, config, upgrades } = hre;
  const contract = await ethers.getContractFactory("ConnectoNFTManager");
  const signatureVerifier = new ethers.Wallet(
    process.env.PRIVATE_KEY_SIGNATUER_VERIFIER as string
  );
  const deployedContract = await upgrades.deployProxy(contract, [
    process.env.ADDRESS_COLLECTION_HELPER as string,
    getAddress(network.name, CONTRACT_KEY.CONNECTO_TOKEN),
    process.env.ADDRESS_TREASURY,
    signatureVerifier.address,
    process.env.ADDRESS_OWNER as string,
  ]);
  await deployedContract.deployed();

  console.log("ConnectoNFTManager deployed to:", deployedContract.address);
  const implAddr = await upgrades.erc1967.getImplementationAddress(
    deployedContract.address
  );
  console.log("ConnectoNFTManager Implementation deployed to:", implAddr);

  appendAddress(
    network.name,
    deployedContract.address,
    CONTRACT_KEY.CONNECTO_NFT_MANAGER
  );
  appendAddress(network.name, implAddr, CONTRACT_KEY.CONNECTO_NFT_MANAGER_IMPL);

  if (
    !config.etherscan.apiKey || /// not configure apiKey
    (typeof config.etherscan.apiKey !== "string" && /// apiKey is an object
      !config.etherscan.apiKey[network.name]) /// not configure apiKey for network
  )
    return;

  await sleep(5000);
  await hre.run("verify:verify", {
    address: implAddr,
    constructorArguments: [],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
