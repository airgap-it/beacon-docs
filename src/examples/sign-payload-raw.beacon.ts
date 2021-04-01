/// START
import { DAppClient, SigningType } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  const response = await dAppClient.requestSignPayload({
    signingType: SigningType.RAW,
    payload: "any string that will be signed",
  });

  console.log(`Signature: ${response.signature}`);
  /// END
};
