import * as beacon from "@airgap/beacon-sdk";
import * as ts from "typescript";

import * as taquito from "@taquito/taquito";
import * as taquitoWallet from "@taquito/beacon-wallet";

import React, { useState } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

function replaceAll(string: string, search: string, replace: string) {
  return string.split(search).join(replace);
}

const START_STR: string = "/// START";
const END_STR: string = "/// END";

const keepBetween = (text: string, start: string, end: string) => {
  let cleanText = "";

  const startPos = text.indexOf(start);
  const endPos = text.indexOf(end);
  if (startPos >= 0 && endPos >= 0) {
    cleanText += text.substring(startPos + start.length, endPos);
    cleanText += keepBetween(text.substring(endPos + end.length), start, end);
  }

  return cleanText;
};

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

const run = (rawCode: string, updateOutput: (str: string) => void) => {
  let res;

  let cleanText = keepBetween(rawCode, START_STR, END_STR);

  const myLog = (...args: any[]) => {
    console.log("MY LOG");
    res += "\n" + args.join(" ");
    updateOutput(res);
    console.log(...args);
  };

  cleanText = replaceAll(cleanText, "console.log(", "progress(");
  const cleanCode = removeImports(cleanText);
  console.log("cleanCode", cleanCode);
  let code = ts.transpile(`({
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
      return (async () => {${cleanCode};
      if (typeof variable !== 'undefined') {
        return result
      }
      })()
    })`);
  let runnable: any;
  // console.log("TRANSPILED code", code);
  try {
    runnable = eval(code);
    runnable
      .run(beacon, taquito, taquitoWallet, myLog)
      .then((result: string) => {
        console.log("RESULT", result);
        res += "\n" + JSON.stringify(result, null, 2);
        updateOutput(res);
      })
      .catch((err: any) => {
        console.warn(err);
        res = JSON.stringify(err, null, 2);
        updateOutput(res);
      });
  } catch (e) {
    res = e;
    updateOutput(e);
    console.error(e);
  }
  console.log("res", res);
  return res;
};

const Child = ({ code }) => {
  const [output, setOutput] = useState("Test");

  const updateOutput = (str: string) => {
    console.log("UPDATE CALLED");
    setOutput(output + "\n" + str);
  };

  const execute = () => {
    console.log("CODE");
    run(code.props.children.props.children, updateOutput);
  };
  const reset = async () => {
    console.log("RESETTING");
    const dAppClient = new beacon.DAppClient({ name: "a" });
    await dAppClient.destroy();
  };

  return (
    <>
      {code}
      <button
        onClick={() => {
          reset();
        }}
      >
        RESET
      </button>
      <button
        onClick={() => {
          execute();
        }}
      >
        EXECUTE
      </button>
      <pre>{output}</pre>
    </>
  );
};

export const RunnableCode = ({ children, color, beacon, taquito }) => {
  console.log("children", children);
  console.log("color", color);
  console.log("beacon", beacon);
  console.log("taquito", taquito);
  return (
    <Tabs
      defaultValue="1"
      values={[
        { label: "Beacon", value: "1" },
        { label: "Taquito", value: "2" },
      ]}
    >
      <TabItem value="1">
        <Child code={children[0]} />
      </TabItem>
      <TabItem value="2">
        <Child code={children[1]} />
      </TabItem>
    </Tabs>
  );
};
