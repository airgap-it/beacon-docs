/// START
import { DAppClient, NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const infoConnectionBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  const addressLink = await dAppClient.blockExplorer.getAddressLink(
    "tz1MJx9vhaNRSimcuXPK2rW4fLccQnDAnVKJ",
    { type: NetworkType.MAINNET },
  );
  logger.log("Address Link", addressLink);

  const txLink = await dAppClient.blockExplorer.getTransactionLink(
    "onzCRJhQ9zPC38TLGhBTghCW7WAJpfUJ2NpwbbQKbW6LeEL8RfK",
    { type: NetworkType.MAINNET },
  );
  logger.log("Transaction Link", txLink);

  logger.log("\n\nConnection Info:\n");
  logger.log("Status:", dAppClient.connectionStatus);
  const accounts = await dAppClient.getAccounts();
  logger.log("Accounts:", accounts);
  const peers = await dAppClient.getPeers();
  logger.log("Peers:", peers);

  logger.log("\n\nDebug:\n");
  logger.log("Local Beacon ID:", await dAppClient.beaconId);
  const colorMode = await dAppClient.getColorMode();
  logger.log("Color Mode:", colorMode);
  const ownMetadata = await dAppClient.getOwnAppMetadata();
  logger.log("Own Metadata:", ownMetadata);
  /// END
};
export default infoConnectionBeacon;
