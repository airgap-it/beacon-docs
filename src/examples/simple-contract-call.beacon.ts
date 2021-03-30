/// START
import { DAppClient, TezosOperationType } from "@airgap/beacon-sdk";
/// END

async () => {
  /// START
  // Create a new DAppClient instance
  const dAppClient = new DAppClient({ name: "Beacon Docs" });

  const activeAccount = await dAppClient.getActiveAccount();
  if (activeAccount) {
    // User already has account connected, everything is ready
    // You can now do an operation request, sign request, or send another permission request to switch wallet
    console.log("Already connected:", activeAccount.address);
  } else {
    const permissions = await dAppClient.requestPermissions();
    console.log("New connection:", permissions.address);
  }

  const TZ_BUTTON_COLORS_CONTRACT = "KT1RPW5kTX6WFxg8JK34rGEU24gqEEudyfvz";
  const tokenId = "925";

  // Setting the color of TzButton is only possible if you are currently the leader and own a color
  // So this call will likely fail
  try {
    const result = await dAppClient.requestOperation({
      operationDetails: [
        {
          kind: TezosOperationType.TRANSACTION,
          amount: "0",
          destination: TZ_BUTTON_COLORS_CONTRACT,
          parameters: {
            entrypoint: "set_color",
            value: {
              int: tokenId,
            },
          },
        },
      ],
    });

    console.log(result);
  } catch (error) {
    // TODO: Move to error handling code
    console.log(
      `The contract call failed and the following error was returned:`,
      error?.data[1]?.with?.string
    );
  }

  /// END
};
