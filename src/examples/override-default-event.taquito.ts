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

const overrideDefaultEventTaquito = async (loggerFun: Function) => {
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
export default overrideDefaultEventTaquito;
