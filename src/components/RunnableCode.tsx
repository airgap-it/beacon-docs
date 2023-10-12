import React, { useState } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import BrowserWindow from "./BrowserWindow/BrowserWindow";
import LoadingAnimation from "./LoadingAnimation";
import { ExecutionState } from "../ExecutionState";
import BrowserOnly from "@docusaurus/BrowserOnly";

const Child = ({ code }) => {
  const { DAppClient } = require("../node_modules/beacon-sdk/dist/cjs");

  const Monaco = require("./Monaco");

  const { copyShareUrl, runBeaconCode } = require("../utils");

  const [runnableCode, setRunnableCode] = useState<string>(
    code.props.children.props.children,
  );
  const [executionState, setExecutionState] = useState(ExecutionState.INIT);
  const [output, setOutput] = useState("");
  const [readonly, setReadonly] = useState(true);

  const execute = async () => {
    if (executionState === ExecutionState.STARTED) {
      return;
    }
    await clear();
    setExecutionState(ExecutionState.STARTED);
    await runBeaconCode(runnableCode, setOutput);
    setExecutionState(ExecutionState.ENDED);
  };
  const reset = async () => {
    clear();
    const dAppClient = new DAppClient({ name: "Cleanup" });
    await dAppClient.destroy();
  };
  const clear = async () => {
    setOutput("");
    setExecutionState(ExecutionState.INIT);
  };
  const toggleReadonly = async () => {
    setReadonly(!readonly);
  };
  const handleShareUrl = async () => {
    copyShareUrl(runnableCode);
  };

  const numberOfLines = 1 + runnableCode.split("\n").length;
  const editorLayout = {
    width: 800,
    height: 18 * numberOfLines,
  };

  const setInput = (input: string) => {
    setRunnableCode(input);
  };

  return (
    <>
      {readonly ? (
        code
      ) : (
        <Monaco
          {...editorLayout}
          language="typescript"
          value={runnableCode}
          onChange={setInput}
          options={{
            scrollBeyondLastLine: false,
            minimap: { enabled: false },
            wordWrap: "on",
          }}
        />
      )}

      <button
        className="button button--secondary margin-bottom--lg margin-right--xs"
        onClick={() => {
          toggleReadonly();
        }}
      >
        {readonly ? "Edit Code" : "Show Example"}
      </button>
      <button
        className="button button--secondary margin-bottom--lg"
        onClick={() => {
          handleShareUrl();
        }}
      >
        Copy Share URL
      </button>
      <BrowserWindow minHeight="" url="https://example.com">
        <button
          className="button button--primary margin-right--xs"
          onClick={() => {
            execute();
          }}
        >
          Run Code
        </button>
        <button
          className="button button--secondary margin-right--xs"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
        <button
          className="button button--secondary"
          onClick={() => {
            clear();
          }}
        >
          Clear Output
        </button>
        {executionState !== ExecutionState.INIT ? (
          <>
            <h4 className="margin-vert--md">Output</h4>
            <pre>
              <span className="d-align-items--center">
                {executionState === ExecutionState.STARTED ? (
                  <>
                    <LoadingAnimation />
                  </>
                ) : (
                  ""
                )}
                {output || executionState === ExecutionState.ENDED
                  ? output
                  : "Waiting for output..."}
              </span>
            </pre>
          </>
        ) : (
          ""
        )}
      </BrowserWindow>
    </>
  );
};

export const RunnableCode = ({ children, color, beacon, taquito }) => {
  return (
    <BrowserOnly fallback={<></>}>
      {() => (
        <Tabs
          groupId="beaconOrTaquito"
          defaultValue="beacon"
          values={[
            { label: "Beacon", value: "beacon" },
            { label: "Taquito", value: "taquito" },
          ]}
        >
          <TabItem value="beacon">
            <Child code={children[0]} />
          </TabItem>
          <TabItem value="taquito">
            <Child code={children[1]} />
          </TabItem>
        </Tabs>
      )}
    </BrowserOnly>
  );
};
