/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import {
  ColorMode,
  Network,
  NetworkType,
  TezosOperationType,
} from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const exampleAdvancedTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  // Set the network (Mainnet is default)
  const network: Network = { type: NetworkType.MAINNET };

  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({
    name: "Beacon Docs",
    preferredNetwork: network.type,
  }); // Takes the same arguments as the DAppClient constructor

  Tezos.setWalletProvider(wallet);

  let myAddress: string | undefined;

  // OPTIONAL: Set the color mode
  // Read the current theme of the docs page from local storage. This depends on your dApp state
  const theme = localStorage.getItem("theme");
  await wallet.client.setColorMode(
    theme === "dark" ? ColorMode.DARK : ColorMode.LIGHT,
  );

  // This code should be called every time the page is loaded or refreshed to see if the user has already connected to a wallet.
  const activeAccount = await wallet.client.getActiveAccount();
  if (activeAccount) {
    // If defined, the user is connected to a wallet.
    // You can now do an operation request, sign request, or send another permission request to switch wallet
    logger.log("Already connected:", activeAccount.address);

    // You probably want to show the address in your UI somewhere.
    myAddress = activeAccount.address;
  } else {
    // The user is NOT connected to a wallet.

    // The following permission request should not be called on pageload,
    // it should be triggered when the user clicks on a "connect" button on your page.
    // This will trigger the pairing alert UI where the user can select which wallet to pair.
    wallet.requestPermissions({
      network: network,
    });
    myAddress = await wallet.getPKH();
    logger.log("New connection: ", myAddress);
  }

  // At this point we are connected to an account.
  // Let's send a simple transaction to the wallet that sends 1 mutez to ourselves.
  const hash = await wallet.sendOperations([
    {
      kind: TezosOperationType.TRANSACTION,
      destination: myAddress, // Send to ourselves
      amount: "1", // Amount in mutez, the smallest unit in Tezos
    },
  ]);

  logger.log("Operation Hash:", hash);

  // Let's generate a link to see the transaction on a block explorer
  const explorerLink = await wallet.client.blockExplorer.getTransactionLink(
    hash,
    network,
  );

  logger.log("Block Explorer:", explorerLink);

  // TODO: Remove temporary workaround in sandbox
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // If you want to "disconnect" a wallet, clear the active account.
  // This means the next time the active account is checked or a permission request is triggered, it will be like it's the users first interaction.
  await wallet.clearActiveAccount();
  /// END
};

export default exampleAdvancedTaquito;
