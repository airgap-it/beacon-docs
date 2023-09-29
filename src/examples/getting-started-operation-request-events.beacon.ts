/// START
import Logger from "../Logger";
import {
  BeaconEvent,
  DAppClient,
  TezosOperationType,
} from "../node_modules/beacon-sdk/dist/cjs";
/// END

const getOperationRequestBeaconWithEvents = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  // Listen for all the active account changes
  dAppClient.subscribeToEvent(
    BeaconEvent.ACTIVE_ACCOUNT_SET,
    async (account) => {
      // An active account has been set, update the dApp UI
      logger.log(`${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `, account);

      // At this point we are connected to an account.
      // Let's send a simple transaction to the wallet that sends 1 mutez to ourselves.
      const response = await dAppClient.requestOperation({
        operationDetails: [
          {
            kind: TezosOperationType.TRANSACTION,
            destination: account.address, // Send to ourselves
            amount: "1", // Amount in mutez, the smallest unit in Tezos
          },
        ],
      });

      logger.log("Response: ", response);
    },
  );

  // Check if we are connected. If not, do a permission request first.
  const activeAccount = await dAppClient.getActiveAccount();
  if (!activeAccount) {
    await dAppClient.requestPermissions();
  }

  /// END
};

export default getOperationRequestBeaconWithEvents;
