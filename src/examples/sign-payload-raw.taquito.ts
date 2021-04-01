/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { SigningType } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  const response = await wallet.client.requestSignPayload({
    signingType: SigningType.RAW,
    payload: "any string that will be signed",
  });

  console.log(`Signature: ${response.signature}`);
  /// END
};
