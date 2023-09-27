/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
/// END

const getActiveAccountTaquito = async () => {
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  // The following code should always be run during pageload if you want to show if the user is connected.
  const activeAccount = await wallet.client.getActiveAccount();
  if (activeAccount) {
    // User already has account connected, everything is ready
    // You can now do an operation request, sign request, or send another permission request to switch wallet
    console.log("Already connected:", activeAccount.address);
    return activeAccount;
  } else {
    // The user is not connected. A button should be displayed where the user can connect to his wallet.
    console.log("Not connected!");
  }
  /// END
};

export default getActiveAccountTaquito
