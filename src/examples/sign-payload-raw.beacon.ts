/// START
import { DAppClient, SigningType } from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const signPayloadRawBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const dAppClient = new DAppClient({ name: "Beacon Docs" });
  try {
    const response = await dAppClient.requestSignPayload({
      signingType: SigningType.RAW,
      payload: "any string that will be signed",
    });

    logger.log(`Signature: ${response.signature}`);
  } catch (error) {
    logger.log("Error: ", error.message);
  }
  /// END
};
export default signPayloadRawBeacon;
