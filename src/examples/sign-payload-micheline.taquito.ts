/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { SigningType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const signPayloadMichelineTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  const response = await wallet.client.requestSignPayload({
    signingType: SigningType.MICHELINE,
    // This hex string needs to be prefixed with 05
    // The following is packed data, it can also be signed by Kukai
    payload:
      "05010000004254657a6f73205369676e6564204d6573736167653a206d79646170702e636f6d20323032312d30312d31345431353a31363a30345a2048656c6c6f20776f726c6421",
  });

  logger.log(`Signature: ${response.signature}`);
  /// END
};
export default signPayloadMichelineTaquito;
