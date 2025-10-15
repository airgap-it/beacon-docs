/// START
import {
  BlockExplorer,
  DAppClient,
  NetworkType,
  Network,
} from "../node_modules/beacon-sdk/dist/cjs";
import Logger from "../Logger";
/// END

const customBlockExplorerBeacon = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  class TzStatsBlockExplorer extends BlockExplorer {
    constructor(
      public readonly rpcUrls: { [key in NetworkType]: string } = {
        [NetworkType.MAINNET]: "https://tzstats.com/",
        [NetworkType.GHOSTNET]: "https://ghost.tzstats.com/",
        [NetworkType.WEEKLYNET]: "https://monday.tzstats.com/",
        [NetworkType.DAILYNET]: "https://daily.tzstats.com/",
        [NetworkType.SEOULNET]: "https://seoul.tzstats.com/",
        [NetworkType.PARISNET]: "https://paris.tzstats.com/",
        [NetworkType.QUEBECNET]: "https://quebec.tzstats.com/",
        [NetworkType.CUSTOM]: "https://custom.tzstats.com/",
        // Deprecated networks (no longer active)
        [NetworkType.DELPHINET]: "https://tzstats.com/",
        [NetworkType.EDONET]: "https://tzstats.com/",
        [NetworkType.FLORENCENET]: "https://tzstats.com/",
        [NetworkType.GRANADANET]: "https://tzstats.com/",
        [NetworkType.HANGZHOUNET]: "https://tzstats.com/",
        [NetworkType.ITHACANET]: "https://tzstats.com/",
        [NetworkType.JAKARTANET]: "https://tzstats.com/",
        [NetworkType.KATHMANDUNET]: "https://tzstats.com/",
        [NetworkType.LIMANET]: "https://tzstats.com/",
        [NetworkType.MUMBAINET]: "https://tzstats.com/",
        [NetworkType.NAIROBINET]: "https://tzstats.com/",
        [NetworkType.OXFORDNET]: "https://tzstats.com/",
        [NetworkType.RIONET]: "https://tzstats.com/",
        [NetworkType.SHADOWNET]: "https://tzstats.com/",
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

  const dAppClient = new DAppClient({
    name: "Beacon Docs",
    blockExplorer: new TzStatsBlockExplorer(),
  });

  try {
    logger.log("Requesting permissions...");
    const permissions = await dAppClient.requestPermissions();
    logger.log("Got permissions:", permissions.address);
  } catch (error) {
    logger.log("Got error:", error.message);
  }
  /// END
};
export default customBlockExplorerBeacon;
