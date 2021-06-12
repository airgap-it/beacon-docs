import { SDK_VERSION } from "@airgap/beacon-sdk";
import React from "react";

import dApps from "../data/dapps.json";

const getDate = (date: number) => {
  const d = new Date(date);
  return (
    ("0" + d.getDate()).slice(-2) +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    d.getFullYear()
  );
};
const isGreater = (a: any, b: any) => {
  return (a.sdkVersion ?? "0.0.0").localeCompare(
    b.sdkVersion ?? "0.0.0",
    undefined,
    {
      numeric: true,
    }
  ) === 1
    ? -1
    : 1;
};

const DAppTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>SDK Version</th>
          <th>Last Checked</th>
        </tr>
      </thead>
      <tbody>
        {dApps.sort(isGreater).map((dApp, i) => (
          <tr key={i}>
            <td>
              <a href={dApp.url}>{dApp.url}</a>
            </td>
            <td>
              {dApp.sdkVersion} {dApp.sdkVersion === SDK_VERSION ? "✅" : ""}
            </td>
            <td>{getDate(dApp.lastCheck)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default DAppTable;
