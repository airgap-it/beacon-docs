/// START
import { DAppClient, NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const networkCustomBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    preferredNetwork: NetworkType.CUSTOM,
  });

  // Custom network (eg. local development or latest testnet)
  try {
    const result = await dAppClient.requestPermissions({
      network: {
        type: NetworkType.CUSTOM,
        name: "Local Node",
        rpcUrl: "http://localhost:8732/",
      },
    });
    logger.log("Permissions: ", result);
  } catch (error) {
    logger.log("Error: ", error.message);
  }
  /// END
};
export default networkCustomBeacon;
