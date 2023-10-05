/// START
import {
  BEACON_VERSION,
  SDK_VERSION,
} from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const infoVersionBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  logger.log("SDK Version", SDK_VERSION);
  logger.log("Beacon Version", BEACON_VERSION);
  /// END
};
export default infoVersionBeacon;
