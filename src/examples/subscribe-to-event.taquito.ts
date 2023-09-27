/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { BeaconEvent } from "../node_modules/beacon-sdk/cjs";
/// END

async () => {
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  // TODO: Remove temporary workaround in sandbox
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await wallet.clearActiveAccount();

  console.log(await wallet.client.getActiveAccount());

  wallet.client.subscribeToEvent(BeaconEvent.PAIR_SUCCESS, (data) => {
    console.log(`${BeaconEvent.PAIR_SUCCESS} triggered: `, data);
  });

  await wallet.client.requestPermissions();
  /// END
};
