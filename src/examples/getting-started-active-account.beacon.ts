/// START
import { DAppClient } from "../node_modules/beacon-sdk/dist/cjs";
/// END

const getActiveAccountBeacon = async () => {
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  // The following code should always be run during pageload if you want to show if the user is connected.
  const activeAccount = await dAppClient.getActiveAccount();
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

export default getActiveAccountBeacon;
