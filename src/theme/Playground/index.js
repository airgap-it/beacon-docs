import React, { useState } from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { LiveProvider, LiveEditor } from "react-live";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { usePrismTheme } from "@docusaurus/theme-common";

import styles from "./styles.module.css";
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";
import { reset } from "@site/src/Utils";

function getCodeBody(code) {
  const lines = code.split("\n");
  lines.splice(0, 1);
  return lines.join("\n");
}

function getSnippetId(code) {
  return (code.split("\n")[0].split("//")[1] ?? "").trim();
}

function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}
function LivePreviewLoader() {
  // Is it worth improving/translating?
  // eslint-disable-next-line @docusaurus/no-untranslated-text
  return <div>Loading...</div>;
}
function ResultWithHeader({ snippetId }) {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.result"
          description="The result label of the live codeblocks"
        >
          Result
        </Translate>
      </Header>
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      <div className={styles.playgroundPreview}>
        <BrowserOnly fallback={<LivePreviewLoader />}>
          {() => {
            const Console = require("../../components/Console").default;
            return (
              <>
                <Console snippetId={snippetId} />
              </>
            );
          }}
        </BrowserOnly>
      </div>
    </>
  );
}
function ThemedLiveEditor() {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      className={styles.playgroundEditor}
    />
  );
}
function EditorWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.liveEditor"
          description="The live editor label of the live codeblocks"
        >
          Live Editor
        </Translate>
      </Header>
      <ThemedLiveEditor />
    </>
  );
}
export default function Playground({ children, transformCode, ...props }) {
  const [isEditorEnabled, setIsEditorEnabled] = useState(false);
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();
  const {
    liveCodeBlock: { playgroundPosition },
  } = themeConfig;
  const prismTheme = usePrismTheme();
  const noInline = props.metastring?.includes("noInline") ?? false;

  const setIsEditorEnabledHandler = () => {
    setIsEditorEnabled(false);
    setTimeout(() => setIsEditorEnabled(true), 100);
  };

  const hideHandler = async (snippetId) => {
    if (snippetId === "reset editor") {
      await reset();
    }
    setIsEditorEnabled(false);
  };

  return (
    <>
      <div className={styles.playgroundContainer}>
        {/* @ts-expect-error: type incompatibility with refs */}
        <LiveProvider
          code={getCodeBody(children.replace(/\n$/, ""))}
          noInline={noInline}
          transformCode={transformCode ?? ((code) => `${code};`)}
          theme={prismTheme}
          {...props}
        >
          {playgroundPosition === "top" ? (
            <>
              {isEditorEnabled && (
                <ResultWithHeader snippetId={getSnippetId(children)} />
              )}
              <EditorWithHeader />
            </>
          ) : (
            <>
              <EditorWithHeader />
              {isEditorEnabled && (
                <ResultWithHeader snippetId={getSnippetId(children)} />
              )}
            </>
          )}
        </LiveProvider>
      </div>
      <BrowserWindow url="https://example.beacon.docs.com">
        <button
          className="button button--primary margin-right--xs"
          onClick={() => setIsEditorEnabledHandler()}
        >
          Run Code
        </button>
        <button
          className="button button--secondary margin-right--xs"
          onClick={async () => await hideHandler("reset editor")}
        >
          Reset
        </button>
        <button
          className="button button--secondary"
          onClick={async () => await hideHandler("clear console output")}
        >
          Clear Output
        </button>
      </BrowserWindow>
    </>
  );
}
