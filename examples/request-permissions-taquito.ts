import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

// Create a new DAppClient instance
const Tezos = new TezosToolkit('https://mainnet-tezos.giganode.io')
const wallet = new BeaconWallet({ name: 'Beacon Docs Taquito' }) // Takes the same arguments as the DAppClient constructor

Tezos.setWalletProvider(wallet)

try {
    await wallet.requestPermissions()
    const address = await wallet.getPKH()
    console.log('Got permissions', address)
} catch (error) {
    console.log('Got error:', error)
}