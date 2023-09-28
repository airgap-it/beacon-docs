/// START
import { DAppClient, TezosOperationType } from "../node_modules/beacon-sdk/dist/cjs";
/// END

const requestOperationBeacon = async () => {
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  let myAddress: string | undefined;

  // Check if we are connected. If not, do a permission request first.
  const activeAccount = await dAppClient.getActiveAccount();
  if (!activeAccount) {
    const permissions = await dAppClient.requestPermissions();
    console.log("New connection:", permissions.address);
    myAddress = permissions.address;
  } else {
    myAddress = activeAccount.address;
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
  /// END
};
export default requestOperationBeacon;
