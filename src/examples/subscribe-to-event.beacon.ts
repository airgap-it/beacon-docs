/// START
import { BeaconEvent, DAppClient } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
  });

  // TODO: Remove temporary workaround in sandbox
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await dAppClient.clearActiveAccount();

  console.log(await dAppClient.getActiveAccount());

  dAppClient.subscribeToEvent(BeaconEvent.PAIR_SUCCESS, (data) => {
    console.log(`${BeaconEvent.PAIR_SUCCESS} triggered: `, data);
  });

  await dAppClient.requestPermissions();
  /// END
};
