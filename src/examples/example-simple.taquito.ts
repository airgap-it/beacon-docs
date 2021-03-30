/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosOperationType } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" }); // Takes the same arguments as the DAppClient constructor

  Tezos.setWalletProvider(wallet);

  let myAddress: string | undefined;

  // This code should be called every time the page is loaded or refreshed to see if the user has already connected to a wallet.
  const activeAccount = await wallet.client.getActiveAccount();
  if (activeAccount) {
    // If defined, the user is connected to a wallet.
    // You can now do an operation request, sign request, or send another permission request to switch wallet
    console.log("Already connected:", activeAccount.address);
    myAddress = activeAccount.address;
  } else {
    await wallet.requestPermissions();
    myAddress = await wallet.getPKH();
    console.log("New connection:", myAddress);
  }

  // At this point we are connected to an account.
  // Let's send a simple transaction to the wallet that sends 1 mutez to ourselves.
  const hash = await wallet.sendOperations([{
    operationDetails: [
      {
        kind: TezosOperationType.TRANSACTION,
        destination: myAddress, // Send to ourselves
        amount: "1", // Amount in mutez, the smallest unit in Tezos
      },
    ],
  }])

  console.log("Operation Hash: ", hash);
  /// END
};
