import React, { useState } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useWindowSize from "@site/src/hooks/useWindowSize";
import styles from "./styles.module.css";
import { ExecutionState } from "../ExecutionState";

import BrowserOnly from "@docusaurus/BrowserOnly";
import ErrorBoundary from "@docusaurus/ErrorBoundary";

const defaultCode = `import { DAppClient, BeaconEvent } from "@airgap/beacon-sdk";

const dAppClient = new DAppClient({ name: "Beacon Docs" });

// Listen for all the active account changes
dAppClient.subscribeToEvent(BeaconEvent.ACTIVE_ACCOUNT_SET, async (account) => {
  // An active account has been set, update the dApp UI
  console.log(BeaconEvent.ACTIVE_ACCOUNT_SET, "triggered:", account);
});

try {
  console.log("Requesting permissions...");
  const permissions = await dAppClient.requestPermissions();
  console.log("Got permissions:", permissions.address);
} catch (error) {
  console.error("Got error:", error);
}`;

function Playground() {
  if (typeof window === "undefined") {
    return null;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const initialCode = urlParams.has("code")
    ? atob(urlParams.get("code"))
    : defaultCode;

  const [input, setInput] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [executionState, setExecutionState] = useState(ExecutionState.INIT);

  const windowSize = useWindowSize();

  const inputChanged = (str) => {
    setInput(str);
  };

  const headerLayout = {
    height: 100,
  };

  const editorWidthRatio = 3 / 5;
  const editorLayout = {
    xs: {
      width: windowSize.width,
      height: 200,
    },
    lg: {
      width: editorWidthRatio * windowSize.width,
      height: windowSize.height - headerLayout.height,
    },
  };

  const outputLayout = {
    xs: {
      width: windowSize.width,
      height: windowSize.height - headerLayout.height - editorLayout.xs.height,
    },
    lg: {
      width: (1 - editorWidthRatio - 0.05) * windowSize.width,
      height: windowSize.height,
    },
  };

  return (
    <BrowserOnly fallback={<></>}>
      {() => {
        const { DAppClient } = require("@airgap/beacon-sdk");
        const Monaco = require("@site/src/components/Monaco").default;
        const { copyShareUrl, runBeaconCode } = require("../utils");

        const execute = async () => {
          if (executionState === ExecutionState.STARTED) {
            return;
          }
          await clear();
          setExecutionState(ExecutionState.STARTED);
          await runBeaconCode(input, setOutput);
          setExecutionState(ExecutionState.ENDED);
        };
        const clear = async () => {
          setOutput("");
          setExecutionState(ExecutionState.INIT);
        };

        const handleClickShare = () => {
          copyShareUrl(input);
        };

        const reset = async () => {
          clear();
          const dAppClient = new DAppClient({ name: "Cleanup" });
          await dAppClient.destroy();
        };

        return (
          <Layout
            title="Beacon"
            description="Beacon Playground"
            noFooter={true}
          >
            <div className={classnames(styles.runbox)}>
              <button
                onClick={execute}
                className="button button--primary margin-bottom--lg margin-right--xs"
              >
                Run Code
              </button>
              <button
                onClick={reset}
                className="button button--secondary margin-bottom--lg margin-right--xs"
              >
                Reset
              </button>
              <button
                onClick={clear}
                className="button button--secondary margin-bottom--lg margin-right--xs"
              >
                Clear Output
              </button>
              <button
                onClick={handleClickShare}
                className="button button--secondary margin-bottom--lg margin-right--xs"
              >
                Share Code (Copy to Clipboard)
              </button>
            </div>

            <div className={classnames(styles.row)}>
              <ErrorBoundary
                fallback={({ error, tryAgain }) => (
                  <div>
                    <p>
                      This editor crashed because of error: {error.message}.
                    </p>
                    <button onClick={tryAgain}>Try Again!</button>
                  </div>
                )}
              >
                <Monaco
                  {...(windowSize.width > 600
                    ? editorLayout.lg
                    : editorLayout.xs)}
                  language="typescript"
                  value={input}
                  onChange={inputChanged}
                  options={{ minimap: { enabled: false }, wordWrap: "on" }}
                />
                <Monaco
                  {...(windowSize.width > 600
                    ? outputLayout.lg
                    : outputLayout.xs)}
                  language="shell"
                  value={output}
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    wordWrap: "on",
                  }}
                />
              </ErrorBoundary>
            </div>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
}

export default Playground;
