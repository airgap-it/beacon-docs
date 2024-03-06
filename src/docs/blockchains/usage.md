---
title: Usage
slug: /blockchains/usage
---

Let's look at an example how a dApp can be initialized with support for a `substrate` based blockchain.

```ts
import { DAppClient } from "@airgap/beacon-dapp";
import { SubstrateBlockchain } from "@airgap/beacon-blockchain-substrate";

const client = new DAppClient({
  name: "Example dApp",
});

const substrateBlockchain = new SubstrateBlockchain();
client.addBlockchain(substrateBlockchain);

client.getActiveAccount().then((activeAccount) => {
  client
    .request({
      blockchainIdentifier: "substrate",
      type: "blockchain_request",
      blockchainData: {
        type: "transfer_request",
        scope: "transfer",
        sourceAddress: activeAccount.address,
        amount: "1",
        recipient: activeAccount.address, // Send to self
        network: {
          genesisHash:
            "0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636",
        },
        mode: "return",
      },
    })
    .then((response) => {
      console.log("response", response);
    });
});
```

On the wallet side, the blockchain doesn't explicitly have to be registered, it can be filtered by the `blockchainIdentifier` property.

```ts
import { WalletClient } from "@airgap/beacon-wallet";
import { BeaconMessageType } from "@airgap/beacon-types";

const client = new WalletClient({
  name: "Example Wallet", // Name of the Wallet
});

await client.init();

client.connect(async (message) => {
  if (message.version === "3") {
    // Example: Handle PermissionRequest. A wallet should handle all request types
    if (message.message.type === beacon.BeaconMessageType.PermissionRequest) {
      if (message.message.blockchainIdentifier !== "substrate") {
        throw new Error("Only KSM supported");
      }
      console.log("SUBSTRATE MESSAGE");
      // Show a UI to the user where he can confirm sharing an account with the dApp

      const response = {
        id: message.id,
        type: BeaconMessageType.PermissionResponse,
        blockchainData: {
          appMetadata: { name: "Example Wallet" },
          scopes: [0],
          accounts: [
            {
              network: {
                genesisHash:
                  "0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636",
              },
              addressPrefix: 0,
              publicKey:
                "3b92229274683b338cf8b040cf91ac0f8e19e410f06eda5537ef077e718e0024",
            },
          ],
        },      // Send response back to dApp
      client.respond(response);
    }
  }
});
```
