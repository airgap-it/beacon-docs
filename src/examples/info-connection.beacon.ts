/// START
import { DAppClient, NetworkType } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  const addressLink = await dAppClient.blockExplorer.getAddressLink(
    "tz1MJx9vhaNRSimcuXPK2rW4fLccQnDAnVKJ",
    { type: NetworkType.MAINNET }
  );
  console.log("Address Link", addressLink);

  const txLink = await dAppClient.blockExplorer.getTransactionLink(
    "onzCRJhQ9zPC38TLGhBTghCW7WAJpfUJ2NpwbbQKbW6LeEL8RfK",
    { type: NetworkType.MAINNET }
  );
  console.log("Transaction Link", txLink);

  console.log("\n\nConnection Info:\n");
  console.log("Status:", dAppClient.connectionStatus);
  const accounts = await dAppClient.getAccounts();
  console.log("Accounts:", accounts);
  const peers = await dAppClient.getPeers();
  console.log("Peers:", peers);

  console.log("\n\nDebug:\n");
  console.log("Local Beacon ID:", await dAppClient.beaconId);
  const colorMode = await dAppClient.getColorMode();
  console.log("Color Mode:", colorMode);
  const ownMetadata = await dAppClient.getOwnAppMetadata();
  console.log("Own Metadata:", ownMetadata);
  /// END
};
