/// START
import { DAppClient, NetworkType } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  // Create a new DAppClient instance
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    preferredNetwork: NetworkType.EDONET,
  });

  // Edonet with different rpcUrl
  const result = await dAppClient.requestPermissions({
    network: {
      type: NetworkType.EDONET,
      rpcUrl: "https://testnet-tezos.giganode.io/",
    },
  });

  /// END
};
