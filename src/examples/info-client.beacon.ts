/// START
import { DAppClient } from "../node_modules/beacon-sdk/dist/cjs";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  console.log(`Connected Accounts:`, await dAppClient.getAccounts());
  console.log(`Connected Peers:`, await dAppClient.getPeers());
  /// END
};
