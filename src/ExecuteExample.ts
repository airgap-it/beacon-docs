import getActiveAccountBeacon from "./examples/getting-started-active-account.beacon";
import getActiveAccountTaquito from "./examples/getting-started-active-account.taquito";
import getActiveAccountBeaconWithEvents from "./examples/getting-started-operation-request-events.beacon";
import getActiveAccountTaquitoWithEvents from "./examples/getting-started-operation-request-events.taquito";
// import requestOperationBeacon from "./examples/getting-started-operation-request.beacon";
// import requestOperationTaquito from "./examples/getting-started-operation-request.taquito";
import requestPermissionsBeacon from "./examples/getting-started-permission-request.beacon";
import requestPermissionsTaquito from "./examples/getting-started-permission-request.taquito";

export class ExecuteExample {
  static async execute(title: string) {
    switch (title) {
      case "Beacon permission request":
        await requestPermissionsBeacon();
        break;
      case "Taquito permission request":
        await requestPermissionsTaquito();
        break;
      case "Beacon get active account":
        await getActiveAccountBeacon();
        break;
      case "Taquito get active account":
        await getActiveAccountTaquito();
        break;
      case "Beacon get active account with events":
        await getActiveAccountBeaconWithEvents();
        break;
      case "Taquito get active account with events":
        await getActiveAccountTaquitoWithEvents();
        break;
      // case "Beacon request operation":
      //   await requestOperationBeacon();
      //   break;
      // case "Taquito request operation":
      //   await requestOperationTaquito();
      //   break;
      default:
        break;
    }
  }
}
