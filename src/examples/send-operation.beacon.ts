/// START
import { DAppClient, TezosOperationType } from "@airgap/beacon-sdk";
/// END

(async () => {
    /// START
    // Create a new DAppClient instance
    const dAppClient = new DAppClient({ name: 'Beacon Docs' })

    const activeAccount = await dAppClient.getActiveAccount()
    if (activeAccount) {
        // User already has account connected, everything is ready
        // You can now do an operation request, sign request, or send another permission request to switch wallet
        console.log('Already connected:', activeAccount.address)
    } else {
        const permissions = await dAppClient.requestPermissions()
        console.log('New connection:', permissions.address)
    }

    dAppClient.requestOperation({
        operationDetails: [{
            kind: TezosOperationType.TRANSACTION,
            destination: 'tz1...',
            amount: '1' // Amount in mutez, the smallest unit in Tezos
        }]
    })
    /// END
})