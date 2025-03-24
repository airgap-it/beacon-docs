import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";

import data from "../data/dapps.json";

const getDate = (date: number) => {
  const d = new Date(date);
  return (
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2)
  );
};
const isGreater = (a: any, b: any) => {
  return (a.sdkVersion ?? "0.0.0").localeCompare(
    b.sdkVersion ?? "0.0.0",
    undefined,
    {
      numeric: true,
    },
  ) === 1
    ? -1
    : 1;
};

const DAppTable = () => {
  const sdkVersions = {
    recommended: ["4.4.0"],
    outdated: [
      "2.3.13",
      "2.3.12",
      "2.3.11",
      "2.3.10",
      "2.3.9",
      "2.3.5",
      "2.3.2",
      "2.3.1",
      "2.2.10",
      "2.2.9",
      "2.2.8",
      "2.2.7",
      "2.2.6",
      "2.2.5",
      "2.2.4",
      "2.2.3",
      "2.2.2",
      "2.2.1",
    ],
  };

  return (
    <>
      <BrowserOnly fallback={<></>}>
        {() => {
          const {
            SDK_VERSION,
          } = require("../node_modules/beacon-sdk/dist/cjs");
          return (
            <>
              <p>
                The most recent version of the beacon-sdk is{" "}
                <b>{SDK_VERSION}</b>.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>dApp</th>
                    <th>SDK Version</th>
                    <th>Last Updated</th>
                    <th>Source Code</th>
                  </tr>
                </thead>
                <tbody>
                  {data.dapps.sort(isGreater).map((dApp, i) => (
                    <tr key={i}>
                      <td>
                        <a href={dApp.url}>{dApp.name}</a>
                      </td>
                      <td>
                        {dApp.sdkVersion}{" "}
                        {dApp.sdkVersion === SDK_VERSION ||
                        sdkVersions.recommended.includes(dApp.sdkVersion)
                          ? "✅"
                          : sdkVersions.outdated.includes(dApp.sdkVersion)
                            ? "❌"
                            : ""}
                      </td>
                      <td>{getDate(dApp.lastUpdate)}</td>
                      <td>
                        {dApp.sourceCode ? (
                          <a href={dApp.sourceCode}>Source Code</a>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          );
        }}
      </BrowserOnly>
      <p>Last check: {getDate(data.lastCheck)}</p>
    </>
  );
};
export default DAppTable;
