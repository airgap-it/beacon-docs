import { useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import "../styles.module.css";

const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <>
      <button
        type="button"
        title="Copy code to clipboard"
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 3000);
          });
        }}
      >
        <span style={{ display: "inline-block" }} aria-hidden="true">
          {!isCopied ? (
            <>
              <svg style={{ maxWidth: "24px", maxHeight: "24px" }}>
                <path
                  fill={colorMode === "dark" ? "#000" : "#fff"}
                  d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
                ></path>
              </svg>
            </>
          ) : (
            <svg
              fill={colorMode === "dark" ? "#000" : "#fff"}
              width="24px"
              height="24px"
              style={{ maxWidth: "24px", maxHeight: "24px" }}
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
