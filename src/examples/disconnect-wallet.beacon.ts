/// START
import { DAppClient } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  // Create a new DAppClient instance
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  // TODO: Remove temporary workaround in sandbox
  await new Promise((resolve) => setTimeout(resolve, 1000));

  dAppClient.clearActiveAccount().then(async () => {
    const account = await dAppClient.getActiveAccount();

    console.log("Active Account", account);
  });
  /// END
};
