import React from "react";

function DarkOverlay({ width, height, roundedValue }) {
  return (
    <div
      className={`absolute inset-0 bg-black/60 ${width} ${height}  ${roundedValue}`}
    ></div>
  );
}

export default DarkOverlay;
