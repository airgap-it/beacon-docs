import requestPermissionsBeacon from "./examples/getting-started-permission-request.beacon";
import requestPermissionsTaquito from "./examples/getting-started-permission-request.taquito";

export class ExecuteExample {
  private static getId(code: string) {
    return (code.split("\n")[0].split("//")[1] ?? "").trim();
  }

  static async execute(code: string) {
    switch (this.getId(code)) {
      case "beacon requestPermissions":
        await requestPermissionsBeacon();
        break;
      case "taquito requestPermissions":
        await requestPermissionsTaquito();
        break;
      default:
        break;
    }
  }
}
