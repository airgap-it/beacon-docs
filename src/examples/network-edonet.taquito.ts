/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const networkEdonetTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({
    name: "Beacon Docs",
    preferredNetwork: NetworkType.EDONET,
  });

  Tezos.setWalletProvider(wallet);

  // Edonet with default rpcUrl
  const result = await wallet.client.requestPermissions({
    network: {
      type: NetworkType.EDONET,
    },
  });
  logger.log("Permissions: ", result);
  /// END
};
export default networkEdonetTaquito;
