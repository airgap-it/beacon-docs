/// START
import {
  BeaconEvent,
  DAppClient,
  defaultEventCallbacks,
} from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({
    name: "My Sample DApp",
    disableDefaultEvents: true, // Disable all events / UI. This also disables the pairing alert.
    eventHandlers: {
      // To keep the pairing alert, we have to add the following default event handlers back
      [BeaconEvent.PAIR_INIT]: {
        handler: defaultEventCallbacks.PAIR_INIT,
      },
      [BeaconEvent.PAIR_SUCCESS]: {
        handler: defaultEventCallbacks.PAIR_SUCCESS,
      },
    },
  });

  try {
    console.log("Requesting permissions...");
    const permissions = await dAppClient.requestPermissions();
    console.log("Got permissions:", permissions.address);
  } catch (error) {
    console.log("Got error:", error);
  }
  /// END
};
