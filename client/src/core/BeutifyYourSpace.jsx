import React from "react";
import DarkOverlay from "./helper/DarkOverlay";

function BeutifyYourSpace() {
  return (
    <div
      className={`w-full h-[33rem] flex justify-between  items-center text-gray-600  space-x-6 `}
    >
      <div className={` w-1/2 h-full flex justify-center items-center`}>
        {/* First section */}
        <div className={`pl-[80px] pr-6 space-y-3`}>
          <p className={`text-2xl font-semibold`}>Beutify Your Space</p>
          <p className={`text-justify`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. ad minim
            veniam, quis nostrud exercitation. aliquip ex ea commodo consequat.
          </p>
          <button className={`btn-primary`}>Learn More</button>
        </div>
      </div>
      {/* Second section */}

      <div
        className={`bg-slate-500 w-1/2 h-full  rounded-br-[70px]  rounded-tl-[70px]  relative z-10`}
      >
        <img
          src="/img/t-shirts/t5.png"
          alt="t5"
          className={`w-full h-full  object-cover  rounded-br-[70px] rounded-tl-[70px]`}
        />
        <img
          src="/img/Ellipse 5.png"
          alt="ellipse"
          className={`absolute bottom-[150px] -right-10 w-[200px] h-[200px] -z-10`}
        />
        <DarkOverlay
          roundedValue=" rounded-br-[70px]  rounded-tl-[70px]"
          opacity="55"
        />
      </div>
    </div>
  );
}

export default BeutifyYourSpace;
