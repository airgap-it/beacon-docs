import { DAppClient } from "./node_modules/beacon-sdk/dist/cjs";

export enum BeaconDocsState {
  CLEAR_CONSOLE = "CLEAR_CONSOLE",
}

export const reset = async () => {
  const dAppClient = new DAppClient({ name: "Cleanup" });
  await dAppClient.destroy();
};
