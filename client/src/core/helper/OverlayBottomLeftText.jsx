import React from "react";

function OverlayBottomLeftText({ width, height, roundedValue }) {
  return (
    <div
      className={`${width} ${height} absolute bottom-4 left-2 ${roundedValue} text-white align-baseline`}
    >
      <div
        className={`bg-white/30 p-3 text-gray-100 w-64 h-48 flex-col rounded-lg `}
      >
        <div>hi there one</div>
        <div>hi there two</div>
      </div>
    </div>
  );
}

export default OverlayBottomLeftText;
