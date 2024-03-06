/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { SigningType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const signPayloadRawTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  try {
    const response = await wallet.client.requestSignPayload({
      signingType: SigningType.RAW,
      payload: "any string that will be signed",
    });

    logger.log(`Signature: ${response.signature}`);
  } catch (error) {
    logger.log("Result: ", error.message);
  }
  /// END
};
export default signPayloadRawTaquito;
