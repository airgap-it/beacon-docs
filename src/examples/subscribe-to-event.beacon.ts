/// START
import {
  BeaconEvent,
  DAppClient,
} from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
  });
  await dAppClient.setActiveAccount(undefined);

  setTimeout(async () => {
    console.log(await dAppClient.getActiveAccount());

    dAppClient.subscribeToEvent(BeaconEvent.PAIR_SUCCESS, (data) => {
      console.log(`${BeaconEvent.PAIR_SUCCESS} triggered: `, data);
    });

    await dAppClient.requestPermissions();
  }, 1000);
  /// END
};
