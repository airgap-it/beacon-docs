/// START
import { DAppClient, NetworkType } from "../node_modules/beacon-sdk/cjs";
/// END

async () => {
  /// START
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
