/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const networkMainnetWithUrlTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  // Mainnet with different rpcUrl
  try {
    const result = await wallet.client.requestPermissions({
      network: {
        type: NetworkType.MAINNET,
        rpcUrl: "https://mainnet.api.tez.ie",
      },
    });
    logger.log("Permissions: ", result);
  } catch (error) {
    logger.log("Error: ", error.message);
  }
  /// END
};
export default networkMainnetWithUrlTaquito;
