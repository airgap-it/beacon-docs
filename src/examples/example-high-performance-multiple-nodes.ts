/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
/// END

async () => {
  /// START
  // Define an array of nodes
  const RPCs = [
    "https://mainnet.api.tez.ie",
  ];

  // Select random node from array
  const randomRpc = RPCs[Math.floor(RPCs.length * Math.random())];

  const Tezos = new TezosToolkit(randomRpc);
  const wallet = new BeaconWallet({ name: "Beacon Docs" }); // Takes the same arguments as the DAppClient constructor

  Tezos.setWalletProvider(wallet);
  /// END
};
