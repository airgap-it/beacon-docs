/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { DAppClient, NetworkType } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  const addressLink = await wallet.client.blockExplorer.getAddressLink(
    "tz1MJx9vhaNRSimcuXPK2rW4fLccQnDAnVKJ",
    { type: NetworkType.MAINNET }
  );
  console.log("Address Link", addressLink);

  const txLink = await wallet.client.blockExplorer.getTransactionLink(
    "onzCRJhQ9zPC38TLGhBTghCW7WAJpfUJ2NpwbbQKbW6LeEL8RfK",
    { type: NetworkType.MAINNET }
  );
  console.log("Transaction Link", txLink);

  console.log("\n\nConnection Info:\n");
  console.log("Status:", wallet.client.connectionStatus);
  const accounts = await wallet.client.getAccounts();
  console.log("Accounts:", accounts);
  const peers = await wallet.client.getPeers();
  console.log("Peers:", peers);

  console.log("\n\nDebug:\n");
  console.log("Local Beacon ID:", await wallet.client.beaconId);
  const colorMode = await wallet.client.getColorMode();
  console.log("Color Mode:", colorMode);
  const ownMetadata = await wallet.client.getOwnAppMetadata();
  console.log("Own Metadata:", ownMetadata);
  /// END
};
