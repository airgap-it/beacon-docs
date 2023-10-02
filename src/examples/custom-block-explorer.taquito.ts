/// START
import {
  BlockExplorer,
  NetworkType,
  Network,
} from "../node_modules/beacon-sdk/dist/cjs";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
/// END

async () => {
  /// START
  class TzStatsBlockExplorer extends BlockExplorer {
    constructor(
      public readonly rpcUrls: { [key in NetworkType]: string } = {
        [NetworkType.MAINNET]: "https://tzstats.com/",
        [NetworkType.GHOSTNET]: "https://ghost.tzstats.com/",
        [NetworkType.MONDAYNET]: "https://monday.tzstats.com/",
        [NetworkType.DAILYNET]: "https://daily.tzstats.com/",
        [NetworkType.DELPHINET]: "https://delphi.tzstats.com/",
        [NetworkType.EDONET]: "https://edo.tzstats.com/",
        [NetworkType.FLORENCENET]: "https://florence.tzstats.com/",
        [NetworkType.GRANADANET]: "https://granada.tzstats.com/",
        [NetworkType.HANGZHOUNET]: "https://hangzhounet.tzstats.com/",
        [NetworkType.ITHACANET]: "https://ithaca.tzstats.com/",
        [NetworkType.JAKARTANET]: "https://jakara.tzstats.com/",
        [NetworkType.KATHMANDUNET]: "https://kathmandu.tzstats.com/",
        [NetworkType.LIMANET]: "https://lima.tzstats.com/",
        [NetworkType.MUMBAINET]: "https://mumbai.tzstats.com/",
        [NetworkType.NAIROBINET]: "https://nairobi.tzstats.com/",
        [NetworkType.OXFORDNET]: "https://oxford.tzstats.com/",
        [NetworkType.CUSTOM]: "https://custom.tzstats.com/",
      },
    ) {
      super(rpcUrls);
    }

    public async getAddressLink(
      address: string,
      network: Network,
    ): Promise<string> {
      const blockExplorer = await this.getLinkForNetwork(network);

      return `${blockExplorer}/${address}`;
    }
    public async getTransactionLink(
      transactionId: string,
      network: Network,
    ): Promise<string> {
      const blockExplorer = await this.getLinkForNetwork(network);

      return `${blockExplorer}/${transactionId}`;
    }
  }

  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({
    name: "Beacon Docs Taquito",
    blockExplorer: new TzStatsBlockExplorer(),
  });

  Tezos.setWalletProvider(wallet);
  /// END
};
