/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { BeaconEvent } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const getActiveAccountTaquitoWithEvents = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  wallet.client.subscribeToEvent(BeaconEvent.ACTIVE_ACCOUNT_SET, (account) => {
    // An active account has been set, update the dApp UI
    logger.log(`${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `, account);
  });

  try {
    logger.log("Requesting permissions...");
    const permissions = await wallet.client.requestPermissions();
    logger.log("Got permissions:", permissions.address);
  } catch (error) {
    logger.log("Got error:", error.message);
  }

  /// END
};
export default getActiveAccountTaquitoWithEvents;
