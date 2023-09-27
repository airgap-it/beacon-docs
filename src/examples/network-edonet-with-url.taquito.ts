/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "../node_modules/beacon-sdk/cjs";
/// END

async () => {
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({
    name: "Beacon Docs",
    preferredNetwork: NetworkType.EDONET,
  });

  Tezos.setWalletProvider(wallet);

  // Edonet with different rpcUrl
  const result = await wallet.client.requestPermissions({
    network: {
      type: NetworkType.EDONET,
      rpcUrl: "https://testnet-tezos.giganode.io/",
    },
  });
  /// END
};
