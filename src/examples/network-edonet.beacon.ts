/// START
import { DAppClient, NetworkType } from "../node_modules/beacon-sdk/cjs";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    preferredNetwork: NetworkType.EDONET,
  });

  // Edonet with default rpcUrl
  const result = await dAppClient.requestPermissions({
    network: {
      type: NetworkType.EDONET,
    },
  });
  /// END
};
