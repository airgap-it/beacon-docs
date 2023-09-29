/// START
import { DAppClient, NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const networkEdonetBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    preferredNetwork: NetworkType.EDONET,
  });

  // Edonet with default rpcUrl
  const result = await dAppClient.requestPermissions({
    network: {
      type: NetworkType.EDONET,
    },
  });
  logger.log("Permissions: ", result);
  /// END
};
export default networkEdonetBeacon;
