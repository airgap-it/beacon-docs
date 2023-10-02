/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { Regions } from "../node_modules/beacon-sdk/dist/cjs";
/// END

async () => {
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({
    name: "Beacon Docs Taquito",
    matrixNodes: {
      [Regions.EUROPE_WEST]: ["beacon-node-0.papers.tech:8448"],
    },
  });

  Tezos.setWalletProvider(wallet);

  try {
    const permissions = await wallet.client.requestPermissions();
    console.log("Got permissions:", permissions.address);
  } catch (error) {
    console.log("Got error:", error.message);
  }

  /// END
};
