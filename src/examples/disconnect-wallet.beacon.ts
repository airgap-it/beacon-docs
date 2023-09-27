/// START
import { DAppClient } from "../node_modules/beacon-sdk/cjs";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  // TODO: Remove temporary workaround in sandbox
  await new Promise((resolve) => setTimeout(resolve, 1000));

  dAppClient.clearActiveAccount().then(async () => {
    const account = await dAppClient.getActiveAccount();

    console.log("Active Account", account);
  });
  /// END
};
