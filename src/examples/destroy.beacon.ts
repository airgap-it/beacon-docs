/// START
import Logger from "../Logger";
import { DAppClient } from "../node_modules/beacon-sdk/dist/cjs";
/// END

const destroyBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  dAppClient
    .destroy()
    .then(() => {
      logger.log("Instance destroyed.");
    })
    .catch((err) => logger.log("Error: ", err.message));
  /// END
};
export default destroyBeacon;
