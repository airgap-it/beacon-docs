/// START
import { DAppClient, NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
/// END

async () => {
  /// START
  // We set the network to "SEOULNET"
  // The network configuration will make the connection is sent to the correct URL
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    network: {
      type: NetworkType.SEOULNET,
      rpcUrl: "https://rpc.seoulnet.teztnets.com",
    },
  });

  const result = await dAppClient.requestPermissions();

  console.log(`Connected to ${result.address} on ${result.network.type}`);
  /// END
};
