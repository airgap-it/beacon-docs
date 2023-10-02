import { DAppClient } from "./node_modules/beacon-sdk/dist/cjs";

export const reset = async () => {
  const dAppClient = new DAppClient({ name: "Cleanup" });
  await dAppClient.destroy();
};
