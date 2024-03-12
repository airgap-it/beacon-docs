/// START
import { DAppClient, NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const networkMainnetWithUrlBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  // Mainnet with different rpcUrl
  try {
    const result = await dAppClient.requestPermissions({
      network: {
        type: NetworkType.MAINNET,
        rpcUrl: "https://mainnet.api.tez.ie",
      },
    });
    logger.log("Permissions: ", result);
  } catch (error) {
    logger.log("Error: ", error.message);
  }
  /// END
};
export default networkMainnetWithUrlBeacon;
