/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import {
  BeaconEvent,
  DAppClient,
  TezosOperationType,
} from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const getOperationRequestTaquitoWithEvents = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  // Listen for all the active account changes
  wallet.client.subscribeToEvent(
    BeaconEvent.ACTIVE_ACCOUNT_SET,
    async (account) => {
      // An active account has been set, update the dApp UI
      logger.log(`${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `, account);

      // At this point we are connected to an account.
      // Let's send a simple transaction to the wallet that sends 1 mutez to ourselves.
      const response = await wallet.sendOperations([
        {
          kind: TezosOperationType.TRANSACTION,
          destination: account.address, // Send to ourselves
          amount: "1", // Amount in mutez, the smallest unit in Tezos
        },
      ]);

      logger.log(response);
    },
  );

  // Check if we are connected. If not, do a permission request first.
  const activeAccount = await wallet.client.getActiveAccount();
  if (!activeAccount) {
    await wallet.client.requestPermissions();
  }

  /// END
};
export default getOperationRequestTaquitoWithEvents;
