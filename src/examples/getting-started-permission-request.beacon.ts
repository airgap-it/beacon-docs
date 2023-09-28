/// START
import { DAppClient } from "@airgap/beacon-sdk";
import Logger from "../Logger";
/// END

const requestPermissionsBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  try {
    logger.log("Requesting permissions...");
    const permissions = await dAppClient.requestPermissions();
    logger.log("Got permissions:", permissions.address);
  } catch (error) {
    logger.log("Got error:", error);
  }
  /// END
};

export default requestPermissionsBeacon;
