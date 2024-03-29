/// START
import {
  DAppClient,
  PermissionScope,
} from "../node_modules/beacon-sdk/dist/cjs";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  // You can request specific permissions if you want
  const scopes: PermissionScope[] = [
    PermissionScope.OPERATION_REQUEST,
    PermissionScope.SIGN,
  ];

  try {
    console.log("Requesting permissions...");
    const permissions = await dAppClient.requestPermissions({ scopes });
    console.log("Got permissions:", permissions.address);
  } catch (error) {
    console.log("Got error:", error.message);
  }
  /// END
};
