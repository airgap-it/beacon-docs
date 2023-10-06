/// START
import Logger from "../Logger";
import { DAppClient } from "../node_modules/beacon-sdk/dist/cjs";
/// END

const disconnectWalletBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  // TODO: Remove temporary workaround in sandbox
  await new Promise((resolve) => setTimeout(resolve, 1000));

  dAppClient.clearActiveAccount().then(async () => {
    const account = await dAppClient.getActiveAccount();

    logger.log("Active Account", account);
  });
  /// END
};
export default disconnectWalletBeacon;
