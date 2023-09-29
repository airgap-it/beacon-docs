/// START
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import Logger from "../Logger";
/// END

const fa2TransferTaquito = async (loggerFun: Function) => {
  const logger = new Logger(loggerFun);
  /// START
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs" });

  Tezos.setWalletProvider(wallet);

  const address = await wallet.getPKH();
  if (!address) {
    await wallet.requestPermissions();
  }

  // Connect to a specific contract on the tezos blockchain.
  // Make sure the contract is deployed on the network you requested permissions for.
  const contract = await Tezos.wallet.at(
    "KT1CpeSQKdkhWi4pinYcseCFKmDhs5M74BkU", // For this example, we use the tzcolors contract on mainnet.
  );

  const TOKEN_ID = 0; // FA2 token id
  const recipient = address; // Send to ourself

  // Call a method on the contract. In this case, we use the transfer entrypoint.
  // Taquito will automatically check if the entrypoint exists and if we call it with the right parameters.
  // In this case the parameters are [from, to, amount].
  // This will prepare the contract call and send the request to the connected wallet.
  const result = await contract.methods
    .transfer([
      {
        from_: address,
        txs: [
          {
            to_: recipient,
            token_id: TOKEN_ID,
            amount: 1,
          },
        ],
      },
    ])
    .send();

  logger.log("Operation hash: ", result);
  // As soon as the operation is broadcast, you will receive the operation hash
  return result.opHash;
  /// END
};
export default fa2TransferTaquito;
