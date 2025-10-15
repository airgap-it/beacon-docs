/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const networkSeoulnetWithRpcTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({
    name: "Beacon Docs",
    network: { type: NetworkType.SEOULNET },
  });

  Tezos.setWalletProvider(wallet);

  // Seoulnet with different rpcUrl
  try {
    const result = await wallet.client.requestPermissions();
    logger.log("Permissions: ", result);
  } catch (error) {
    logger.log("Error: ", error.message);
  }
  /// END
};
export default networkSeoulnetWithRpcTaquito;
