/// START
import {
  BeaconEvent,
  DAppClient,
  defaultEventCallbacks,
  P2PPairingRequest,
  PostMessagePairingRequest,
  NetworkType,
  WalletConnectPairingRequest,
  AnalyticsInterface,
} from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const overrideDefaultEventBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    eventHandlers: {
      [BeaconEvent.PAIR_INIT]: {
        // Every BeaconEvent can be overriden by passing a handler here.
        // The default will not be executed anymore. To keep the default,
        // you will have to call it again.
        handler: async (
          data: {
            p2pPeerInfo: Promise<string>;
            postmessagePeerInfo: Promise<string>;
            walletConnectPeerInfo: Promise<string>;
            networkType: NetworkType;
            abortedHandler?(): void;
            disclaimerText?: string;
            analytics: AnalyticsInterface;
            featuredWallets?: string[];
            substratePairing?: boolean;
          },
          eventCallback?: any[] | undefined,
        ): Promise<void> => {
          await defaultEventCallbacks.PAIR_INIT(data); // Add this if you want to keep the default behaviour.
          logger.log("syncInfo", data, eventCallback);
        },
      },
    },
  });

  try {
    logger.log("Requesting permissions...");
    const permissions = await dAppClient.requestPermissions();
    logger.log("Got permissions:", permissions.address);
  } catch (error) {
    logger.log("Got error:", error.message);
  }
  /// END
};
export default overrideDefaultEventBeacon;
