/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import Logger from "../Logger";
/// END

const infoVersionTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  logger.log(`Connected Accounts:`, await wallet.client.getAccounts());
  logger.log(`Connected Peers:`, await wallet.client.getPeers());
  /// END
};
export default infoVersionTaquito;
