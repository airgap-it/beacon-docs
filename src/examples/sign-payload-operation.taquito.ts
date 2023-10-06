/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { SigningType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const signPayloadOperationTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);
  try {
    const response = await wallet.client.requestSignPayload({
      signingType: SigningType.OPERATION,
      payload: "0300", // This hex string needs to be prefixed with 03
    });

    logger.log(`Signature: ${response.signature}`);
  } catch (error) {
    logger.log("Error: ", error.message);
  }
  /// END
};
export default signPayloadOperationTaquito;
