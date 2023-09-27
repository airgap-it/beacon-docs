/// START
import { DAppClient } from "../node_modules/beacon-sdk/cjs";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  console.log(dAppClient.name);
  /// END
};
