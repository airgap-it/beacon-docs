/// START
import { DAppClient } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  console.log(`Connected Accounts:`, await dAppClient.getAccounts());
  console.log(`Connected Peers:`, await dAppClient.getPeers());
  /// END
};
