/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import {
  BeaconEvent,
  defaultEventCallbacks,
  P2PPairingRequest,
  PostMessagePairingRequest,
  NetworkType,
  WalletConnectPairingRequest,
  AnalyticsInterface,
} from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const overrideAlertAbortedTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({
    name: "Beacon Docs Taquito",
    eventHandlers: {
      [BeaconEvent.PAIR_INIT]: {
        // Every BeaconEvent can be overriden by passing a handler here.
        // The default will not be executed anymore. To keep the default,
        // you will have to call it again.
        handler: async (data: {
          p2pPeerInfo: () => Promise<P2PPairingRequest>;
          postmessagePeerInfo: () => Promise<PostMessagePairingRequest>;
          walletConnectPeerInfo: () => Promise<WalletConnectPairingRequest>;
          networkType: NetworkType;
          abortedHandler?(): void;
          disclaimerText?: string;
          analytics: AnalyticsInterface;
          featuredWallets?: string[];
        }): Promise<void> => {
          // If you want to attach your own "on alert closed" handler
          // eslint-disable-next-line @typescript-eslint/unbound-method
          const oldHandler = data.abortedHandler;
          const newHandler = (): void => {
            if (oldHandler) {
              // Make sure to call the internal abortedHandler
              oldHandler();
            }
            // Add your own logic here
            logger.log("My logic");
          };
          data.abortedHandler = newHandler; // Replace the internal abortedHandler with the new one
          await defaultEventCallbacks.PAIR_INIT(data); // Add this if you want to keep the default behaviour.
          logger.log("syncInfo", data);
        },
      },
    },
  });

  Tezos.setWalletProvider(wallet);

  try {
    logger.log("Requesting permissions...");
    const permissions = await wallet.client.requestPermissions();
    logger.log("Got permissions:", permissions.address);
  } catch (error) {
    logger.log("Got error:", error.message);
  }
  /// END
};
export default overrideAlertAbortedTaquito;
