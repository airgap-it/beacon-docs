/// START
import Logger from "../Logger";
import {
  ColorMode,
  DAppClient,
  Network,
  NetworkType,
  TezosOperationType,
} from "../node_modules/beacon-sdk/dist/cjs";
/// END

const exampleAdvancedBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  // Set the network (Mainnet is default)
  const network: Network = { type: NetworkType.MAINNET };

  // Create a new DAppClient instance
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    network: network,
  });

  let myAddress: string | undefined;

  // OPTIONAL: Set the color mode
  // Read the current theme of the docs page from local storage. This depends on your dApp state
  const theme = localStorage.getItem("theme");
  await dAppClient.setColorMode(
    theme === "dark" ? ColorMode.DARK : ColorMode.LIGHT,
  );

  // Check if user already has an active connection from a previous session.
  // This should be called on page load to restore the connection state.
  // Note: For handling real-time connection changes, you can also subscribe to BeaconEvent.ACTIVE_ACCOUNT_SET
  const activeAccount = await dAppClient.getActiveAccount();
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
    try {
      const permissions = await dAppClient.requestPermissions();
      logger.log("New connection: ", permissions.address);
      myAddress = permissions.address;
    } catch (error) {
      logger.log("Error: ", error.message);
      return;
    }
  }

  // At this point we are connected to an account.
  // Let's send a simple transaction to the wallet that sends 1 mutez to ourselves.
  try {
    const response = await dAppClient.requestOperation({
      operationDetails: [
        {
          kind: TezosOperationType.TRANSACTION,
          destination: myAddress, // Send to ourselves
          amount: "1", // Amount in mutez, the smallest unit in Tezos
        },
      ],
    });

    logger.log("Operation Hash:", response.transactionHash);

    // Let's generate a link to see the transaction on a block explorer
    const explorerLink = await dAppClient.blockExplorer.getTransactionLink(
      response.transactionHash,
      network,
    );

    logger.log("Block Explorer:", explorerLink);
  } catch (error) {
    logger.log("Error: ", error.message);
    return;
  }

  // If you want to "disconnect" a wallet, clear the active account.
  // This means the next time the active account is checked or a permission request is triggered, it will be like it's the users first interaction.
  await dAppClient.clearActiveAccount();
  /// END
};
export default exampleAdvancedBeacon;
