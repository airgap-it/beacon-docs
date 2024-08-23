import { useState } from "react";

const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <>
      <button
        type="button"
        aria-label="Copy code to clipboard"
        title="Copy"
        className="clean-btn"
        onClick={() => {
          navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 3000);
          });
        }}
      >
        <span
          className="copyButtonIcons_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module"
          style={{ display: "inline-block" }}
          aria-hidden="true"
        >
          {!isCopied ? (
            <>
              <svg
                viewBox="0 0 24 24"
                className="copyButtonIcon_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module"
              >
                <path
                  fill="currentColor"
                  d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="copyButtonSuccessIcon_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module"
              >
                <path
                  fill="currentColor"
                  d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                ></path>
              </svg>
            </>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="copyButtonIcon_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          )}
        </span>
      </button>
    </>
  );
};
export default CopyButton;
