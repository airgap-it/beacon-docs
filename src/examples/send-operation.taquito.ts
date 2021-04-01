/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosOperationType } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  const activeAccount = await wallet.client.getActiveAccount();
  if (activeAccount) {
    // User already has account connected, everything is ready
    // You can now do an operation request, sign request, or send another permission request to switch wallet
    console.log("Already connected:", activeAccount.address);
  } else {
    const permissions = await wallet.client.requestPermissions();
    console.log("New connection:", permissions.address);
  }

  wallet.sendOperations([
    {
      kind: TezosOperationType.TRANSACTION,
      destination: "tz1...",
      amount: "1", // Amount in mutez, the smallest unit in Tezos
    },
  ]);
  /// END
};
