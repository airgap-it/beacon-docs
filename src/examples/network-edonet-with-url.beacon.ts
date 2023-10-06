/// START
import { DAppClient, NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const networkEdonetWithRpcBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    preferredNetwork: NetworkType.EDONET,
  });

  // Edonet with different rpcUrl
  try {
    const result = await dAppClient.requestPermissions({
      network: {
        type: NetworkType.EDONET,
        rpcUrl: "https://testnet-tezos.giganode.io/",
      },
    });
    logger.log("Permissions: ", result);
  } catch (error) {
    logger.log("Result: ", error.message);
  }
  /// END
};
export default networkEdonetWithRpcBeacon;
