/// START
import { DAppClient, NetworkType } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  // Create a new DAppClient instance
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  // Mainnet with different rpcUrl
  const result = await dAppClient.requestPermissions({
    network: {
      type: NetworkType.MAINNET,
      rpcUrl: "https://mainnet-tezos.giganode.io/",
    },
  });

  /// END
};
