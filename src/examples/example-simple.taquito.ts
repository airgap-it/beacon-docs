/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosOperationType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const exampleSimpleTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" }); // Takes the same arguments as the DAppClient constructor

  Tezos.setWalletProvider(wallet);

  let myAddress: string | undefined;

  // This code should be called every time the page is loaded or refreshed to see if the user has already connected to a wallet.
  const activeAccount = await wallet.client.getActiveAccount();
  if (activeAccount) {
    // If defined, the user is connected to a wallet.
    // You can now do an operation request, sign request, or send another permission request to switch wallet
    logger.log("Already connected:", activeAccount.address);
    myAddress = activeAccount.address;
  } else {
    await wallet.requestPermissions();
    myAddress = await wallet.getPKH();
    logger.log("New connection:", myAddress);
  }

  // At this point we are connected to an account.
  // Let's send a simple transaction to the wallet that sends 1 mutez to ourselves.
  try {
    const hash = await wallet.sendOperations([
      {
        kind: TezosOperationType.TRANSACTION,
        destination: myAddress, // Send to ourselves
        amount: "1", // Amount in mutez, the smallest unit in Tezos
      },
    ]);

    logger.log("Operation Hash: ", hash);
  } catch (error) {
    logger.log("Error: ", error.message);
  }
  /// END
};
export default exampleSimpleTaquito;
