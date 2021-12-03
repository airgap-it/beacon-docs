/// START
import { DAppClient, TezosOperationType } from "@airgap/beacon-sdk";
/// END

async () => {
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

  const response = await dAppClient.requestOperation({
    operationDetails: [
      {
        kind: TezosOperationType.TRANSACTION,
        destination: myAddress, // Send to ourselves
        amount: "1",
        fee: "55000",
        gas_limit: "48000",
        storage_limit: "1000",
      },
    ],
  });
  /// END
};
