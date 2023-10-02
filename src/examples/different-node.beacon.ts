/// START
import { DAppClient, Regions } from "../node_modules/beacon-sdk/dist/cjs";

/// END

async () => {
  /// START
  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    matrixNodes: {
      [Regions.EUROPE_WEST]: ["beacon-node-0.papers.tech:8448"],
    },
  });

  try {
    console.log("Requesting permissions...");
    const permissions = await dAppClient.requestPermissions();
    console.log("Got permissions:", permissions.address);
  } catch (error) {
    console.log("Got error:", error.message);
  }
  /// END
};
