/// START
import { DAppClient, SigningType } from "@airgap/beacon-sdk";
/// END

(async () => {
    /// START
    // Create a new DAppClient instance
    const dAppClient = new DAppClient({ name: 'Beacon Docs' })

    const response = await dAppClient.requestSignPayload({
        signingType: SigningType.OPERATION,
        payload: '0300' // This hex string needs to be prefixed with 03
    })

    console.log(`Signature: ${response.signature}`)
    /// END
})