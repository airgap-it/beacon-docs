/// START
import {
  BeaconEvent,
  DAppClient,
  defaultEventCallbacks,
  P2PPairingRequest,
  PostMessagePairingRequest,
  NetworkType,
} from "../node_modules/beacon-sdk/cjs";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    eventHandlers: {
      [BeaconEvent.PAIR_INIT]: {
        // Every BeaconEvent can be overriden by passing a handler here.
        // The default will not be executed anymore. To keep the default,
        // you will have to call it again.
        handler: async (data: {
          p2pPeerInfo: () => Promise<P2PPairingRequest>;
          postmessagePeerInfo: () => Promise<PostMessagePairingRequest>;
          preferredNetwork: NetworkType;
          abortedHandler?(): void;
          disclaimerText?: string;
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
            console.log("My logic");
          };
          data.abortedHandler = newHandler; // Replace the internal abortedHandler with the new one
          await defaultEventCallbacks.PAIR_INIT(data as any); // Add this if you want to keep the default behaviour.
          console.log("syncInfo", data);
        },
      } as any,
    },
  });

  try {
    console.log("Requesting permissions...");
    const permissions = await dAppClient.requestPermissions();
    console.log("Got permissions:", permissions.address);
  } catch (error) {
    console.log("Got error:", error);
  }
  /// END
};
