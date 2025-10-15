/// START
import { DAppClient, NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const networkSeoulnetWithRpcBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    network: { type: NetworkType.SEOULNET },
  });

  // Seoulnet with different rpcUrl
  try {
    const result = await dAppClient.requestPermissions();
    logger.log("Permissions: ", result);
  } catch (error) {
    logger.log("Result: ", error.message);
  }
  /// END
};
export default networkSeoulnetWithRpcBeacon;
