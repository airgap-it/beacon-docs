/// START
import { DAppClient, Regions } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const differentNodeBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    matrixNodes: {
      [Regions.EUROPE_WEST]: ["beacon-node-0.papers.tech:8448"],
    },
  });

  try {
    logger.log("Requesting permissions...");
    const permissions = await dAppClient.requestPermissions();
    logger.log("Got permissions:", permissions.address);
  } catch (error) {
    logger.log("Got error:", error.message);
  }
  /// END
};
export default differentNodeBeacon;
