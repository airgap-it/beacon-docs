import * as beacon from "@airgap/beacon-sdk";
import * as ts from "typescript";

// import * as taquito from "@taquito/taquito";
// import * as taquitoWallet from "@taquito/beacon-wallet";

const taquito = {};
const taquitoWallet = {};

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

export const runBeaconCode = (
  rawCode: string,
  setOutput: (str: string) => void
) => {
  let code = rawCode;

  let output = "";
  const appendOutput = (str: string) => {
    output += "\n" + str;
    setOutput(output.trim());
  };

  const myLog = (...args: any[]) => {
    console.log("CODE_RUNNER:", ...args);
    appendOutput(
      args
        .map((arg) =>
          typeof arg === "object" ? JSON.stringify(arg, null, 2) : arg
        )
        .join(" ")
    );
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

export const copyShareUrl = (input: string) => {
  const url = `https://${window.location.host}/playground?code=${btoa(input)}`;

  navigator.clipboard
    .writeText(url)
    .catch((err) => console.error("Failed to copy to url!", err));
};
