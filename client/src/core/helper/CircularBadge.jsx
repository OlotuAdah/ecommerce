import React from "react";

function CircularBadge({ number }) {
  return (
    <div
      className={` absolute -bottom-4 left-[130px] w-[40px] h-[40px] rounded-full bg-amber-600 text-gray-200`}
    >
      <div className={`flex w-full h-full justify-center items-center`}>
        {number}
      </div>
    </div>
  );
}

export default CircularBadge;
