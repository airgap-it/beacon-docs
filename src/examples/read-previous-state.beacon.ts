/// START
import { DAppClient } from "../node_modules/beacon-sdk/dist/cjs";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  const activeAccount = await dAppClient.getActiveAccount();
  if (activeAccount) {
    // User already has account connected, everything is ready
    // You can now do an operation request, sign request, or send another permission request to switch wallet
    console.log("Already connected:", activeAccount.address);
    return activeAccount;
  } else {
    const permissions = await dAppClient.requestPermissions();
    console.log("New connection:", permissions.address);
    return permissions;
  }
  /// END
};
