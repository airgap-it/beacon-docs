/// START
import { DAppClient, SigningType } from "../node_modules/beacon-sdk/dist/cjs";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  const response = await dAppClient.requestSignPayload({
    signingType: SigningType.OPERATION,
    payload: "0300", // This hex string needs to be prefixed with 03
  });

  console.log(`Signature: ${response.signature}`);
  /// END
};
