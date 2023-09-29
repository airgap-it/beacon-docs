/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { SigningType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const signPayloadRawTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  const response = await wallet.client.requestSignPayload({
    signingType: SigningType.RAW,
    payload: "any string that will be signed",
  });

  logger.log(`Signature: ${response.signature}`);
  /// END
};
export default signPayloadRawTaquito;
