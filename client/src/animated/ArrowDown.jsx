import React from "react";

function ArrowDown() {
  return (
    <div className={`absolute bottom-2 right-2`}>
      <svg
        className="w-6 h-6 text-amber-600"
        fill="currentColor"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 17l-4 4m0 0l-4-4m4 4V3"
        ></path>
      </svg>
    </div>
  );
}

export default ArrowDown;
