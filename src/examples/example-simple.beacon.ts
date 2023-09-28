/// START
import Logger from "../Logger";
import {
  DAppClient,
  TezosOperationType,
} from "../node_modules/beacon-sdk/dist/cjs";
/// END

const exampleSimpleBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  let myAddress: string | undefined;

  // This code should be called every time the page is loaded or refreshed to see if the user has already connected to a wallet.
  const activeAccount = await dAppClient.getActiveAccount();
  if (activeAccount) {
    // If defined, the user is connected to a wallet.
    // You can now do an operation request, sign request, or send another permission request to switch wallet
    logger.log("Already connected:", activeAccount.address);
    myAddress = activeAccount.address;
  } else {
    const permissions = await dAppClient.requestPermissions();
    logger.log("New connection:", permissions.address);
    myAddress = permissions.address;
  }

  // At this point we are connected to an account.
  // Let's send a simple transaction to the wallet that sends 1 mutez to ourselves.
  const response = await dAppClient.requestOperation({
    operationDetails: [
      {
        kind: TezosOperationType.TRANSACTION,
        destination: myAddress, // Send to ourselves
        amount: "1", // Amount in mutez, the smallest unit in Tezos
      },
    ],
  });

  logger.log("Operation Hash: ", response.transactionHash);
  /// END
};
export default exampleSimpleBeacon;
