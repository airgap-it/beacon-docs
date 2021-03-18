/// START
import { ColorMode, DAppClient } from "@airgap/beacon-sdk";
/// END

(async () => {
    /// START
    // Create a new DAppClient instance
    const dAppClient = new DAppClient({ name: 'Beacon Docs' })

    await dAppClient.setColorMode(ColorMode.DARK)
    console.log('Setting colorMode to Dark')

    const result = await dAppClient.requestPermissions()

    console.log('Permissions', result.address)
    /// END
})