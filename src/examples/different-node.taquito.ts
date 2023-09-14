/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
/// END

async () => {
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({
    name: "Beacon Docs Taquito",
    matrixNodes: ["beacon-node-0.papers.tech:8448"],
  });

  Tezos.setWalletProvider(wallet);

  try {
    const permissions = await wallet.client.requestPermissions();
    console.log("Got permissions:", permissions.address);
  } catch (error) {
    console.log("Got error:", error);
  }

  /// END
};
