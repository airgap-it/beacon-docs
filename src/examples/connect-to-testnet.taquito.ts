/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
/// END

async () => {
  /// START
  // We set the preferred network to "EDONET"
  // The "preferred network" will make the connection is sent to the correct URL
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({
    name: "Beacon Docs Taquito",
    preferredNetwork: NetworkType.EDONET,
  });

  Tezos.setWalletProvider(wallet);

  const result = await wallet.client.requestPermissions({
    network: {
      type: NetworkType.EDONET, // Try: NetworkType.DELPHINET
    },
  });

  console.log(`Connected to ${result.address} on ${result.network.type}`);
  /// END
};
