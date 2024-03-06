/// START
import {
  BeaconEvent,
  defaultEventCallbacks,
} from "../node_modules/beacon-sdk/dist/cjs";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import Logger from "../Logger";
/// END

const disableUITaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({
    name: "Beacon Docs Taquito",
    disableDefaultEvents: true, // Disable all events / UI. This also disables the pairing alert.
    eventHandlers: {
      // To keep the pairing alert, we have to add the following default event handlers back
      [BeaconEvent.PAIR_INIT]: {
        handler: defaultEventCallbacks.PAIR_INIT,
      },
      [BeaconEvent.PAIR_SUCCESS]: {
        handler: defaultEventCallbacks.PAIR_SUCCESS,
      },
    },
  });

  Tezos.setWalletProvider(wallet);

  try {
    await wallet.requestPermissions();
    const address = await wallet.getPKH();
    logger.log("Got permissions:", address);
  } catch (error) {
    logger.log("Got error:", error.message);
  }

  /// END
};
export default disableUITaquito;
