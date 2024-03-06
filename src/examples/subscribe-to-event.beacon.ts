/// START
import { BeaconEvent, DAppClient } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const subscribeToEventBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
  });

  await dAppClient.clearActiveAccount();

  logger.log("Active account: ", await dAppClient.getActiveAccount());

  dAppClient.subscribeToEvent(BeaconEvent.PAIR_SUCCESS, (data) => {
    logger.log(`${BeaconEvent.PAIR_SUCCESS} triggered: `, data);
  });
  try {
    await dAppClient.requestPermissions();
  } catch (error) {
    logger.log("Error: ", error);
  }
  /// END
};
export default subscribeToEventBeacon;
