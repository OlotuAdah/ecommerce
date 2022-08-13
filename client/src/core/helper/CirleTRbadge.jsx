import React from "react";

function cirleTRbadge({ text }) {
  return (
    <div
      className={`absolute -top-1 right-2  w-[17px] h-[17px] bg-red-500 text-white rounded-full animate-pulse `}
    >
      <div
        className={`flex  w-full h-full justify-center items-center text-xs`}
      >
        {text}
      </div>
    </div>
  );
}

export default cirleTRbadge;
