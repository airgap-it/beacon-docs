import React, { useState } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useWindowSize from "@site/src/hooks/useWindowSize";
import Editor from "@site/src/components/Editor";
import styles from "./styles.module.css";

function Playground() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const initialCode = code && code.length > 0 ? atob(code) : "template";
  const [input, setInput] = useState(initialCode);
  const [output, setOutput] = useState("const a = 1; \nprint(a);");

  const windowSize = useWindowSize();

  const inputChanged = (str) => {
    setInput(str);
    console.log(btoa(str));
    setOutput(str);
  };

  const headerLayout = {
    height: 100,
  };

  const editorWidthRatio = 2 / 3;
  const editorLayout = {
    xs: {
      width: windowSize.width,
      height: 200,
    },
    lg: {
      width: editorWidthRatio * windowSize.width,
      height: windowSize.height - headerLayout.height,
    },
  };

  const outputLayout = {
    xs: {
      width: windowSize.width,
      height: windowSize.height - headerLayout.height - editorLayout.xs.height,
    },
    lg: {
      width: (1 - editorWidthRatio - 0.05) * windowSize.width,
      height: windowSize.height,
    },
  };

  const run = () => {
    console.log("EXECUTING", input);
  };

  function toShareUrl(str: string) {
    return `${window.location.host}/beacon-docs/playground?code=${btoa(str)}`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    run();
  }

  function handleClickRun() {
    run();
  }

  function handleClickShare() {
    const url = toShareUrl(input);
    console.log("URL", url);
    navigator.clipboard
      .writeText(url)
      .catch((err) => console.error("Failed to copy to url!", err));
  }

  return (
    <Layout title="Beacon" description="Beacon Playground" noFooter={true}>
      <div className={classnames(styles.headerContainer)}>
        <form
          onSubmit={handleSubmit}
          className={classnames(styles.argsInputContainer)}
        >
          <button
            onClick={handleClickRun}
            className={classnames(styles.argsIconContainer)}
          ></button>
        </form>
        <button onClick={handleClickShare}>
          Share Code (Copy to Clipboard)
        </button>
      </div>

      <div className={classnames(styles.row)}>
        <Editor
          {...(windowSize.width > 600 ? editorLayout.lg : editorLayout.xs)}
          language="typescript"
          value={input}
          onChange={inputChanged}
          options={{ minimap: { enabled: false }, wordWrap: "on" }}
        />
        <Editor
          {...(windowSize.width > 600 ? outputLayout.lg : outputLayout.xs)}
          language="bash"
          value={output}
          options={{
            readOnly: true,
            minimap: { enabled: false },
            wordWrap: "on",
          }}
        />
      </div>
    </Layout>
  );
}

export default Playground;
