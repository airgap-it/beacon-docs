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
    signingType: SigningType.OPERATION,
    payload: "0300", // This hex string needs to be prefixed with 03
  });

  console.log(`Signature: ${response.signature}`);
  /// END
};
