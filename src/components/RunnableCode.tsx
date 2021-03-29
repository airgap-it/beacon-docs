import { DAppClient } from "@airgap/beacon-sdk";

import React, { useState } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import BrowserWindow from "./BrowserWindow/BrowserWindow";
import Monaco from "./Monaco";
import LoadingAnimation from "./LoadingAnimation";
import { runBeaconCode } from "../utils";

enum ExecutionState {
  INIT,
  STARTED,
  ENDED,
}

const Child = ({ code }) => {
  const [executionState, setExecutionState] = useState(ExecutionState.INIT);
  const [output, setOutput] = useState("");
  const [readonly, setReadonly] = useState(true);

  const execute = async () => {
    if (executionState === ExecutionState.STARTED) {
      return;
    }
    await clear();
    setExecutionState(ExecutionState.STARTED);
    await runBeaconCode(code.props.children.props.children, setOutput);
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

  const editorLayout = {
    width: 800,
    height: 500,
  };
  const input = code.props.children.props.children;
  const setInput = (input: string) => {
    console.log("set input", input);
  };

  return (
    <>
      <button
        className="button button--secondary"
        onClick={() => {
          toggleReadonly();
        }}
      >
        Toggle Readonly
      </button>

      {readonly ? (
        code
      ) : (
        <Monaco
          {...editorLayout}
          language="typescript"
          value={input}
          onChange={setInput}
          options={{ minimap: { enabled: false }, wordWrap: "on" }}
        />
      )}
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
              {output || executionState === ExecutionState.ENDED
                ? output
                : "Waiting for output..."}
              {executionState === ExecutionState.STARTED ? (
                <>
                  <br />
                  <LoadingAnimation />
                </>
              ) : (
                ""
              )}
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
  // console.log("children", children);
  // console.log("color", color);
  // console.log("beacon", beacon);
  // console.log("taquito", taquito);
  return (
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
  );
};
