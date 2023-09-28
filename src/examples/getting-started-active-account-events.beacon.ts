/// START
import Logger from "../Logger";
import { BeaconEvent, DAppClient } from "../node_modules/beacon-sdk/dist/cjs";
/// END

const getActiveAccountBeaconWithEvents = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });
  // Listen for all the active account changes
  dAppClient.subscribeToEvent(
    BeaconEvent.ACTIVE_ACCOUNT_SET,
    async (account) => {
      // An active account has been set, update the dApp UI
      logger.log(`${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `, account);
    }
  );

  try {
    console.log("Requesting permissions...");
    const permissions = await dAppClient.requestPermissions();
    console.log("Got permissions:", permissions.address);
  } catch (error) {
    console.log("Got error:", error.message);
  }

  /// END
};
export default getActiveAccountBeaconWithEvents;
