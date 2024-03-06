/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const infoConnectionTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  const addressLink = await wallet.client.blockExplorer.getAddressLink(
    "tz1MJx9vhaNRSimcuXPK2rW4fLccQnDAnVKJ",
    { type: NetworkType.MAINNET },
  );
  logger.log("Address Link", addressLink);

  const txLink = await wallet.client.blockExplorer.getTransactionLink(
    "onzCRJhQ9zPC38TLGhBTghCW7WAJpfUJ2NpwbbQKbW6LeEL8RfK",
    { type: NetworkType.MAINNET },
  );
  logger.log("Transaction Link", txLink);

  logger.log("\n\nConnection Info:\n");
  logger.log("Status:", wallet.client.connectionStatus);
  const accounts = await wallet.client.getAccounts();
  logger.log("Accounts:", accounts);
  const peers = await wallet.client.getPeers();
  logger.log("Peers:", peers);

  logger.log("\n\nDebug:\n");
  logger.log("Local Beacon ID:", await wallet.client.beaconId);
  const colorMode = await wallet.client.getColorMode();
  logger.log("Color Mode:", colorMode);
  const ownMetadata = await wallet.client.getOwnAppMetadata();
  logger.log("Own Metadata:", ownMetadata);
  /// END
};
export default infoConnectionTaquito;
