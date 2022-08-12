import React from "react";

function OverLayRating({ width, height, roundedValue }) {
  return (
    <div
      className={`${width} ${height} absolute bottom-1 right-0 ${roundedValue} text-white align-baseline`}
    >
      <div
        className={`bg-white/70 px-3 text-gray-100 w-full h-full flex-col rounded-lg `}
      >
        <div class="flex text-xs">
          <span class="material-icons text-amber-400">grade</span>
          <span class="material-icons text-amber-400">grade</span>
          <span class="material-icons text-amber-400">grade</span>
          <span class="material-icons text-amber-400">grade</span>
          <span class="material-icons text-amber-400">star_half</span>
          <span class="ml-2 text-sm font-semibold text-amber-500 flex-grow text-right place-self-center">
            1.5m reviews
          </span>
        </div>
      </div>
    </div>
  );
}

export default OverLayRating;
