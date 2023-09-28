import broadcastRequestBeacon from "./examples/broadcast-request.beacon";
import broadcastRequestTaquito from "./examples/broadcast-request.taquito";
import disconnectWalletBeacon from "./examples/disconnect-wallet.beacon";
import disconnectWalletTaquito from "./examples/disconnect-wallet.taquito";
import exampleAdvancedBeacon from "./examples/example-advanced.beacon";
import exampleAdvancedTaquito from "./examples/example-advanced.taquito";
import exampleSimpleBeacon from "./examples/example-simple.beacon";
import exampleSimpleTaquito from "./examples/example-simple.taquito";
import fa12TransferTaquito from "./examples/fa1.2-transfer.taquito";
import fa2TransferTaquito from "./examples/fa2-transfer.taquito";
import getActiveAccountBeaconWithEvents from "./examples/getting-started-active-account-events.beacon";
import getActiveAccountTaquitoWithEvents from "./examples/getting-started-active-account-events.taquito";
import getActiveAccountBeacon from "./examples/getting-started-active-account.beacon";
import getActiveAccountTaquito from "./examples/getting-started-active-account.taquito";
import getOperationRequestBeaconWithEvents from "./examples/getting-started-operation-request-events.beacon";
import getOperationRequestTaquitoWithEvents from "./examples/getting-started-operation-request-events.taquito";
import requestOperationBeacon from "./examples/getting-started-operation-request.beacon";
import requestOperationTaquito from "./examples/getting-started-operation-request.taquito";
import requestPermissionsBeacon from "./examples/getting-started-permission-request.beacon";
import requestPermissionsTaquito from "./examples/getting-started-permission-request.taquito";
import simpleContractCallBeacon from "./examples/simple-contract-call.beacon";
import simpleContractCallTaquito from "./examples/simple-contract-call.taquito";
import subscribeToEventBeacon from "./examples/subscribe-to-event.beacon";
import subscribeToEventTaquito from "./examples/subscribe-to-event.taquito";

export class ExecuteExample {
  static async execute(code: string, updateLogs: Function) {
    switch (code) {
      case "beacon permission request":
        await requestPermissionsBeacon(updateLogs);
        break;
      case "taquito permission request":
        await requestPermissionsTaquito(updateLogs);
        break;
      case "beacon get active account":
        await getActiveAccountBeacon(updateLogs);
        break;
      case "taquito get active account":
        await getActiveAccountTaquito(updateLogs);
        break;
      case "beacon get active account with events":
        await getActiveAccountBeaconWithEvents(updateLogs);
        break;
      case "taquito get active account with events":
        await getActiveAccountTaquitoWithEvents(updateLogs);
        break;
      case "beacon request operation":
        await requestOperationBeacon(updateLogs);
        break;
      case "taquito request operation":
        await requestOperationTaquito(updateLogs);
        break;
      case "beacon request operation with events":
        await getOperationRequestBeaconWithEvents(updateLogs);
        break;
      case "taquito request operation with events":
        await getOperationRequestTaquitoWithEvents(updateLogs);
        break;
      case "beacon advanced example":
        await exampleAdvancedBeacon(updateLogs);
        break;
      case "taquito advanced example":
        await exampleAdvancedTaquito(updateLogs);
        break;
      case "beacon simple example":
        await exampleSimpleBeacon(updateLogs);
        break;
      case "taquito simple example":
        await exampleSimpleTaquito(updateLogs);
        break;
      case "beacon disconnect wallet":
        await disconnectWalletBeacon(updateLogs);
        break;
      case "taquito disconnect wallet":
        await disconnectWalletTaquito(updateLogs);
        break;
      case "beacon broadcast request":
        await broadcastRequestBeacon(updateLogs);
        break;
      case "taquito broadcast request":
        await broadcastRequestTaquito(updateLogs);
        break;
      case "beacon simple contract call":
        await simpleContractCallBeacon(updateLogs);
        break;
      case "taquito simple contract call":
        await simpleContractCallTaquito(updateLogs);
        break;
      case "taquito fa1.2 transfer":
        await fa12TransferTaquito(updateLogs);
        break;
      case "taquito fa2 transfer":
        await fa2TransferTaquito(updateLogs);
        break;
      case "beacon subscribe to event":
        await subscribeToEventBeacon(updateLogs);
        break;
      case "taquito subscribe to event":
        await subscribeToEventTaquito(updateLogs);
        break;
      default:
        break;
    }
  }
}
