/// START
import { DAppClient } from "@airgap/beacon-sdk";
/// END

(async () => {
    /// START
    // Create a new DAppClient instance
    const dAppClient = new DAppClient({ name: 'Beacon Docs' })

    try {
        console.log('Requesting permissions...')
        const permissions = await dAppClient.requestPermissions()
        console.log('Got permissions:', permissions.address)
    } catch (error) {
        console.log('Got error:', error)
    }
    /// END
})