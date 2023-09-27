/// START
import { DAppClient, NetworkType } from "../node_modules/beacon-sdk/cjs";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    preferredNetwork: NetworkType.CUSTOM,
  });

  // Custom network (eg. local development or latest testnet)
  const result = await dAppClient.requestPermissions({
    network: {
      type: NetworkType.CUSTOM,
      name: "Local Node",
      rpcUrl: "http://localhost:8732/",
    },
  });
  /// END
};
