/// START
import { BeaconEvent, DAppClient } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const requestPermissionsBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
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

  try {
    logger.log("Requesting permissions...");
    const permissions = await dAppClient.requestPermissions();
    logger.log("Got permissions:", permissions.address);
  } catch (error) {
    logger.log("Got error:", error.message);
  }
  /// END
};

export default requestPermissionsBeacon;
