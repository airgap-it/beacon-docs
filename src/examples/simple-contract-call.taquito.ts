/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
/// END

(async () => {
    /// START

    const Tezos = new TezosToolkit('https://mainnet-tezos.giganode.io')
    const wallet = new BeaconWallet({ name: 'Beacon Docs' })

    Tezos.setWalletProvider(wallet)

    const address = await wallet.getPKH()
    if (!address) {
        await wallet.requestPermissions()
    }

    // We now know we are connected, or the above code threw an error
    const TZ_BUTTON_COLORS_CONTRACT = 'KT1RPW5kTX6WFxg8JK34rGEU24gqEEudyfvz'
    const contract = await Tezos.wallet.at(TZ_BUTTON_COLORS_CONTRACT)

    const tokenId = '925'

    const result = await contract.methods.set_color(tokenId).send()

    /// END
})