/// START
import {
  BeaconEvent,
  DAppClient,
  defaultEventCallbacks,
  P2PPairingRequest,
  PostMessagePairingRequest,
  NetworkType,
} from "@airgap/beacon-sdk";
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
        handler: async (
          data: {
            p2pPeerInfo: () => Promise<P2PPairingRequest>;
            postmessagePeerInfo: () => Promise<PostMessagePairingRequest>;
            preferredNetwork: NetworkType;
            abortedHandler?(): void;
            disclaimerText?: string;
          },
          eventCallback?: any[] | undefined
        ): Promise<void> => {
          await defaultEventCallbacks.PAIR_INIT(data as any); // Add this if you want to keep the default behaviour.
          console.log("syncInfo", data, eventCallback);
        },
      },
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
