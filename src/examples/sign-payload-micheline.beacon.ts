/// START
import { DAppClient, SigningType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const signPayloadMichelineBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  try {
    const response = await dAppClient.requestSignPayload({
      signingType: SigningType.MICHELINE,
      // This hex string needs to be prefixed with 05
      // The following is packed data, it can also be signed by Kukai
      payload:
        "05010000004254657a6f73205369676e6564204d6573736167653a206d79646170702e636f6d20323032312d30312d31345431353a31363a30345a2048656c6c6f20776f726c6421",
    });

    logger.log(`Signature: ${response.signature}`);
  } catch (error) {
    logger.log("Error: ", error.message);
  }
  /// END
};
export default signPayloadMichelineBeacon;
