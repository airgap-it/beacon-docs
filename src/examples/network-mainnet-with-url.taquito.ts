/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "../node_modules/beacon-sdk/cjs";
/// END

async () => {
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  // Mainnet with different rpcUrl
  const result = await wallet.client.requestPermissions({
    network: {
      type: NetworkType.MAINNET,
      rpcUrl: "https://mainnet-tezos.giganode.io/",
    },
  });
  /// END
};
