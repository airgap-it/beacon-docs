/// START
import Logger from "../Logger";
import { DAppClient } from "../node_modules/beacon-sdk/dist/cjs";
/// END

const disconnectWalletBeacon2 = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  dAppClient
    .disconnect()
    .then(async () => {
      const account = await dAppClient.getActiveAccount();

      logger.log("Active Account", account);
    })
    .catch((err) => logger.log("Error: ", err.message));
  /// END
};
export default disconnectWalletBeacon2;
