import React from "react";

function DarkOverlay({ width, height, roundedValue, opacity }) {
  const opValue =
    (typeof Number(opacity) == typeof 2) & (Number(opacity) >= 5)
      ? opacity
      : 60;
  return (
    <div
      className={`absolute inset-0 bg-black/${opValue} ${width} ${height}  ${roundedValue}`}
    ></div>
  );
}

export default DarkOverlay;
