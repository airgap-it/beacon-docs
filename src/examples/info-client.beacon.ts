/// START
import { DAppClient } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const infoClientBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  logger.log(`Connected Accounts:`, await dAppClient.getAccounts());
  logger.log(`Connected Peers:`, await dAppClient.getPeers());
  /// END
};
export default infoClientBeacon;
