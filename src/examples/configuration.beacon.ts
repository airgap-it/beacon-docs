/// START
import { DAppClient } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  // Create a new DAppClient instance
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  console.log(dAppClient.name);
  /// END
};
