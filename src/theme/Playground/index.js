import React, { useState } from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { usePrismTheme } from "@docusaurus/theme-common";

import styles from "./styles.module.css";

function getCodeBody(code) {
  const lines = code.split("\n");
  lines.splice(0, 1);
  return lines.join("\n");
}

function getSnippetCode(code) {
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
function ResultWithHeader({ snippetCode }) {
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
                <Console snippetCode={snippetCode} />
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
  const [isEditorEnabled, setisEditorEnabled] = useState(false);
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();
  const {
    liveCodeBlock: { playgroundPosition },
  } = themeConfig;
  const prismTheme = usePrismTheme();
  const noInline = props.metastring?.includes("noInline") ?? false;
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
                <ResultWithHeader snippetCode={getSnippetCode(children)} />
              )}
              <EditorWithHeader />
            </>
          ) : (
            <>
              <EditorWithHeader />
              {isEditorEnabled && (
                <ResultWithHeader snippetCode={getSnippetCode(children)} />
              )}
            </>
          )}
        </LiveProvider>
      </div>
      <button onClick={() => setisEditorEnabled(true)}>Run Code</button>
    </>
  );
}
