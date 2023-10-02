import React, { useEffect, useState } from "react";
import { ExecuteExample } from "../ExecuteExample";

export type ConsoleProps = {
  snippetId: string;
};

const Console = ({ snippetId }: ConsoleProps) => {
  const ConsoleContent = () => {
    const [logs, setLogs] = useState([]);

    const setLogsHandler = (log: string) => {
      setLogs((prevLogs) => [...prevLogs, log]);
    };

    useEffect(() => {
      ExecuteExample.execute(snippetId, setLogsHandler);
    }, []);

    return <>{logs && logs.map((log, i) => <ul key={i}>{log}</ul>)}</>;
  };

  return (
    <ul id={`console ${snippetId}`}>
      <ConsoleContent />
    </ul>
  );
};

export default Console;
