/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import Logger from "../Logger";
/// END

const disconnectWalletTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  // TODO: Remove temporary workaround in sandbox
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await wallet.clearActiveAccount();

  try {
    const account = await wallet.getPKH();
    logger.log("Active Account", account);
  } catch {
    logger.log("No wallet connected");
  }

  /// END
};
export default disconnectWalletTaquito;
