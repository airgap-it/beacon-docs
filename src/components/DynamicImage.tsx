import React from "react";
import useWindowSize from "@site/src/hooks/useWindowSize";

function DynamicImage({ src, alt }) {
  const windowSize = useWindowSize();

  let width = "50%";
  if (windowSize.width < 650) {
    width = "100%";
  }

  return (
    <div style={{ textAlign: "center" }}>
      <img src={src} alt={alt} width={width} />
    </div>
  );
}

export default DynamicImage;
