/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
/// END

(async () => {
    /// START
    // Create a new DAppClient instance
    const Tezos = new TezosToolkit('https://mainnet-tezos.giganode.io')
    const wallet = new BeaconWallet({ name: 'Beacon Docs Taquito' }) // Takes the same arguments as the DAppClient constructor

    Tezos.setWalletProvider(wallet)

    console.log(wallet.client.name)
    /// END
})