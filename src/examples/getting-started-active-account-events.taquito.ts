/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { BeaconEvent } from "@airgap/beacon-sdk";
/// END

const getActiveAccountTaquitoWithEvents = async () => {
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  wallet.client.subscribeToEvent(BeaconEvent.ACTIVE_ACCOUNT_SET, (account) => {
    // An active account has been set
    console.log(`${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `, account);
  });

  /// END
};
export default getActiveAccountTaquitoWithEvents;
