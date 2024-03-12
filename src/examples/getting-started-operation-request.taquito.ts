/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosOperationType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const requestOperationTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  let myAddress: string | undefined;

  // Check if we are connected. If not, do a permission request first.
  const activeAccount = await wallet.client.getActiveAccount();
  if (!activeAccount) {
    const permissions = await wallet.client.requestPermissions();
    logger.log("New connection:", permissions.address);
    myAddress = permissions.address;
  } else {
    myAddress = activeAccount.address;
  }

  // At this point we are connected to an account.
  // Let's send a simple transaction to the wallet that sends 1 mutez to ourselves.
  try {
    const response = await wallet.sendOperations([
      {
        kind: TezosOperationType.TRANSACTION,
        destination: myAddress, // Send to ourselves
        amount: "1", // Amount in mutez, the smallest unit in Tezos
      },
    ]);
    logger.log("Response: ", response);
  } catch (error) {
    logger.log("Error: ", error.message);
  }
  /// END
};

export default requestOperationTaquito;
