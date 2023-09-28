/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
/// END

async () => {
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({
    name: "Beacon Docs Taquito",
    preferredNetwork: NetworkType.CUSTOM,
  });

  Tezos.setWalletProvider(wallet);

  // Custom network (eg. local development or latest testnet)
  const result = await wallet.client.requestPermissions({
    network: {
      type: NetworkType.CUSTOM,
      name: "Local Node",
      rpcUrl: "http://localhost:8732/",
    },
  });
  /// END
};
