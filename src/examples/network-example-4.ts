/// START
import { DAppClient, NetworkType } from "@airgap/beacon-sdk";
/// END

(async () => {
    /// START
    // Create a new DAppClient instance
    const dAppClient = new DAppClient({ name: 'Beacon Docs', preferredNetwork: NetworkType.CUSTOM })

    // Custom network (eg. local development or latest testnet)
    const result = await dAppClient.requestPermissions({
        network: {
            type: NetworkType.CUSTOM,
            name: 'Local Node',
            rpcUrl: 'http://localhost:8732/'
        }
    })

    /// END
})