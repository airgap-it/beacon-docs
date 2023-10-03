import React, { useEffect, useState } from "react";
import { ExecuteExample } from "../ExecuteExample";

export type ConsoleProps = {
  snippetId: string;
};

const Console = ({ snippetId }: ConsoleProps) => {
  const [logs, setLogs] = useState([]);

  const setLogsHandler = (log: string) => {
    setLogs((prevLogs) => [...prevLogs, log]);
  };

  useEffect(() => {
    ExecuteExample.execute(snippetId, setLogsHandler);
  }, []);

  return (
    <ul id={`console ${snippetId}`}>
      {logs && logs.map((log, i) => <ul key={i}>{log}</ul>)}
    </ul>
  );
};

export default Console;
