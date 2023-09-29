/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { BeaconEvent } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const subscribeToEventTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  // TODO: Remove temporary workaround in sandbox
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await wallet.clearActiveAccount();

  logger.log("Active account: ", await wallet.client.getActiveAccount());

  wallet.client.subscribeToEvent(BeaconEvent.PAIR_SUCCESS, (data) => {
    logger.log(`${BeaconEvent.PAIR_SUCCESS} triggered: `, data);
  });

  await wallet.client.requestPermissions();
  /// END
};
export default subscribeToEventTaquito;
