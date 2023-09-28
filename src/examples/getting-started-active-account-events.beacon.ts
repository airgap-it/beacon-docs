/// START
import { BeaconEvent, DAppClient } from "@airgap/beacon-sdk";
/// END

const getActiveAccountBeaconWithEvents = async () => {
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  // Listen for all the active account changes
  dAppClient.subscribeToEvent(
    BeaconEvent.ACTIVE_ACCOUNT_SET,
    async (account) => {
      // An active account has been set, update the dApp UI
      console.log(`${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `, account);
    },
  );

  // Check if we are connected. If not, do a permission request first.
  const activeAccount = await dAppClient.getActiveAccount();
  if (!activeAccount) {
    await dAppClient.requestPermissions();
  }

  /// END
};
export default getActiveAccountBeaconWithEvents;
