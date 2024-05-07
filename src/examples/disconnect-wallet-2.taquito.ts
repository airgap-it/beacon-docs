/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import Logger from "../Logger";
/// END

const disconnectWalletTaquito2 = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  try {
    await wallet.client.disconnect();
  } catch (err: any) {
    logger.log("Error: ", err.message);
  }

  /// END
};
export default disconnectWalletTaquito2;
