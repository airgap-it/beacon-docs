/// START
import {
  BlockExplorer,
  DAppClient,
  NetworkType,
  Network,
} from "@airgap/beacon-sdk";
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
        [NetworkType.GRANADANET]: "https://granada.tzstats.com/",
        [NetworkType.HANGZHOUNET]: "https://hangzhou.tzstats.com/",
        [NetworkType.ITHACANET]: "https://ithacanet.tzstats.com/",
        // [NetworkType.JAKARTANET]: "https://jakartanet.tzstats.com/",
        [NetworkType.CUSTOM]: "https://jakartanet.tzstats.com/",
      },
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

  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    blockExplorer: new TzStatsBlockExplorer() as any,
  });
  /// END
};
