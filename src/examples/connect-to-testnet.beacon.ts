/// START
import { DAppClient, NetworkType } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  // We set the preferred network to "EDONET"
  // The "preferred network" will make the connection is sent to the correct URL
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    preferredNetwork: NetworkType.EDONET,
  });

  const result = await dAppClient.requestPermissions({
    network: {
      type: NetworkType.EDONET, // Try: NetworkType.DELPHINET
    },
  });

  console.log(`Connected to ${result.address} on ${result.network.type}`);
  /// END
};
