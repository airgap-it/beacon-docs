import React, { useEffect, useState } from "react";
import { ExecuteExample } from "../ExecuteExample";

export type ConsoleProps = {
  snippetCode: string;
};

const Console = ({ snippetCode }: ConsoleProps) => {
  const ConsoleContent = () => {
    const [logs, setLogs] = useState([]);

    const setLogsHandler = (log: string) => {
      setLogs((prevLogs) => [...prevLogs, log]);
    };
    useEffect(() => {
      ExecuteExample.execute(snippetCode, setLogsHandler);
    }, []);

    return <>{logs && logs.map((log, i) => <ul key={i}>{log}</ul>)}</>;
  };

  return (
    <ul id={`console ${snippetCode}`}>
      <ConsoleContent />
    </ul>
  );
};

export default Console;
