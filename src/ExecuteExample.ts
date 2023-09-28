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

export class ExecuteExample {
  static async execute(code: string, updateLogs: Function) {
    switch (code) {
      case "beacon permission request":
        await requestPermissionsBeacon(updateLogs);
        break;
      case "taquito permission request":
        await requestPermissionsTaquito();
        break;
      case "beacon get active account":
        await getActiveAccountBeacon();
        break;
      case "taquito get active account":
        await getActiveAccountTaquito();
        break;
      case "beacon get active account with events":
        await getActiveAccountBeaconWithEvents();
        break;
      case "taquito get active account with events":
        await getActiveAccountTaquitoWithEvents();
        break;
      case "beacon request operation":
        await requestOperationBeacon();
        break;
      case "taquito request operation":
        await requestOperationTaquito();
        break;
      case "beacon request operation with events":
        await getOperationRequestBeaconWithEvents();
        break;
      case "taquito request operation with events":
        await getOperationRequestTaquitoWithEvents();
        break;
      default:
        break;
    }
  }
}
