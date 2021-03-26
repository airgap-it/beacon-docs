import * as beacon from "@airgap/beacon-sdk";
import * as ts from "typescript";

import * as taquito from "@taquito/taquito";
import * as taquitoWallet from "@taquito/beacon-wallet";

import React, { useState } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import BrowserWindow from "./BrowserWindow/BrowserWindow";
import Editor from "./editor";

function replaceAll(string: string, search: string, replace: string) {
  return string.split(search).join(replace);
}

const removeImports = (code: string) => {
  const lines = code.split("\n");
  let include = true;

  return lines
    .map((l) => {
      if (l.trim().startsWith("import")) {
        include = false;
      }

      const out = include ? l : undefined;

      if (l.indexOf("@airgap/beacon-sdk") >= 0 || l.indexOf("@taquito") >= 0) {
        include = true;
      }

      return out;
    })
    .filter((l) => !!l)
    .join("\n");
};

const run = (rawCode: string, setOutput: (str: string) => void) => {
  let code = rawCode;

  let output = "";
  const appendOutput = (str: string) => {
    output += "\n" + str;
    setOutput(output.trim());
  };

  const myLog = (...args: any[]) => {
    appendOutput(args.join(" "));
    console.log(...args);
  };

  code = replaceAll(code, "console.log(", "progress(");
  code = removeImports(code);
  code = ts.transpile(`({
    run: async (beacon: any, taquito: any, taquitoWallet: any, progress: any): string => {
      Object.keys(beacon).forEach(key => {
        window[key] = beacon[key]
      })
      Object.keys(taquito).forEach(key => {
        window[key] = taquito[key]
      })
      Object.keys(taquitoWallet).forEach(key => {
        window[key] = taquitoWallet[key]
      })
      return (async () => {
        ${code};
        if (typeof result !== 'undefined') {
          return result
        }
      })()
    })`);
  let runnable: any;
  // console.log("TRANSPILED code", code);
  return new Promise((resolve) => {
    try {
      runnable = eval(code);
      runnable
        .run(beacon, taquito, taquitoWallet, myLog)
        .then((result: string) => {
          if (result) {
            appendOutput("Returned:\n" + JSON.stringify(result, null, 2));
          }
          resolve(result);
        })
        .catch((err: any) => {
          console.warn(err);
          appendOutput(JSON.stringify(err, null, 2));
          resolve(err);
        });
    } catch (e) {
      appendOutput(e);
      console.error(e);
      resolve(e);
    }
  });
};

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
    await clear();
    setExecutionState(ExecutionState.STARTED);
    await run(code.props.children.props.children, setOutput);
    setExecutionState(ExecutionState.ENDED);
  };
  const reset = async () => {
    clear();
    const dAppClient = new beacon.DAppClient({ name: "Cleanup" });
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
        onClick={() => {
          toggleReadonly();
        }}
      >
        Toggle Readonly
      </button>

      {readonly ? (
        code
      ) : (
        <Editor
          {...editorLayout}
          language="typescript"
          value={input}
          onChange={setInput}
          options={{ minimap: { enabled: false }, wordWrap: "on" }}
        />
      )}
      <BrowserWindow minHeight="" url="https://example.com">
        <button
          onClick={() => {
            execute();
          }}
        >
          EXECUTE
        </button>
        <button
          onClick={() => {
            reset();
          }}
        >
          RESET
        </button>
        <button
          onClick={() => {
            clear();
          }}
        >
          CLEAR OUTPUT
        </button>
        {executionState !== ExecutionState.INIT ? (
          <>
            <p>Output:</p>
            <pre>
              {output || executionState === ExecutionState.ENDED
                ? output
                : "Waiting for output..."}
            </pre>
            {executionState === ExecutionState.STARTED
              ? "Executing... (should be animated loader)"
              : ""}
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
