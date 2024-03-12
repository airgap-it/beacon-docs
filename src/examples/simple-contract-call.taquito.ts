/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import Logger from "../Logger";
/// END

const simpleContractCallTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START

  const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");
  const wallet = new BeaconWallet({ name: "Beacon Docs" });

  Tezos.setWalletProvider(wallet);

  const address = await wallet.getPKH();
  if (!address) {
    await wallet.requestPermissions();
  }

  // We now know we are connected, or the above code threw an error
  const TZ_BUTTON_COLORS_CONTRACT = "KT1RPW5kTX6WFxg8JK34rGEU24gqEEudyfvz";
  const contract = await Tezos.wallet.at(TZ_BUTTON_COLORS_CONTRACT);

  const tokenId = "925";

  try {
    const result = await contract.methods.set_color(tokenId).send();
    logger.log("Result: ", result);
  } catch (error) {
    logger.log(
      `The contract call failed and the following error was returned:`,
      error?.data[1]?.with?.string,
    );
  }
  /// END
};
export default simpleContractCallTaquito;
