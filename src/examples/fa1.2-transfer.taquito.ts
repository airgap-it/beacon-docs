/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import Logger from "../Logger";
/// END

const fa12TransferTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({ name: "Beacon Docs" });

  Tezos.setWalletProvider(wallet);

  const address = await wallet.getPKH();
  if (!address) {
    await wallet.requestPermissions();
  }

  // Connect to a specific contract on the tezos blockchain.
  // Make sure the contract is deployed on the network you requested permissions for.
  const contract = await Tezos.wallet.at(
    "KT1PWx2mnDueood7fEmfbBDKx1D9BAnnXitn", // For this example, we use the TZBTC contract on mainnet.
  );

  // Call a method on the contract. In this case, we use the transfer entrypoint.
  // Taquito will automatically check if the entrypoint exists and if we call it with the right parameters.
  // In this case the parameters are [from, to, amount].
  // This will prepare the contract call and send the request to the connected wallet.
  try {
    const result = await contract.methods
      .transfer(
        "tz1d75oB6T4zUMexzkr5WscGktZ1Nss1JrT7",
        "tz1Mj7RzPmMAqDUNFBn5t5VbXmWW4cSUAdtT",
        1,
      )

      .send();
    // As soon as the operation is broadcasted, you will receive the operation hash
    logger.log("Operation hash: ", result.opHash);
  } catch (error) {
    logger.log("Error: ", error.message);
  }

  /// END
};
export default fa12TransferTaquito;
