/// START
import { BlockExplorer, NetworkType, Network } from "../node_modules/beacon-sdk/dist/cjs";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
/// END

async () => {
  /// START
  class TzStatsBlockExplorer extends BlockExplorer {
    constructor(
      public readonly rpcUrls: { [key in NetworkType]: string } = {
        [NetworkType.MAINNET]: "https://tzstats.com/",
        [NetworkType.DELPHINET]: "https://delphi.tzstats.com/",
        [NetworkType.EDONET]: "https://edo.tzstats.com/",
        [NetworkType.FLORENCENET]: "https://florence.tzstats.com/",
        [NetworkType.GRANADANET]: "https://granadanet.tzstats.com/",
        [NetworkType.HANGZHOUNET]: "https://hangzhou.tzstats.com/",
        [NetworkType.ITHACANET]: "https://ithacanet.tzstats.com/",
        // [NetworkType.JAKARTANET]: "https://jakartanet.tzstats.com/",
        [NetworkType.CUSTOM]: "https://jakartanet.tzstats.com/",
      } as any,
    ) {
      super(rpcUrls);
    }

    public async getAddressLink(
      address: string,
      network: Network,
    ): Promise<string> {
      const blockExplorer = await (this as any).getLinkForNetwork(network);

      return `${blockExplorer}/${address}`;
    }
    public async getTransactionLink(
      transactionId: string,
      network: Network,
    ): Promise<string> {
      const blockExplorer = await (this as any).getLinkForNetwork(network);

      return `${blockExplorer}/${transactionId}`;
    }
  }

  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({
    name: "Beacon Docs Taquito",
    blockExplorer: new TzStatsBlockExplorer() as any,
  });

  Tezos.setWalletProvider(wallet);
  /// END
};
