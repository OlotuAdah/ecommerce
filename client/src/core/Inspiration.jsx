import React from "react";
import DarkOverlay from "./helper/DarkOverlay";

function Inspiration() {
  return (
    <div className={`my-20 bg-white w-full h-[40rem] pt-10`}>
      <div className={`flex justify-center items-center w-full`}>
        <div className={`text-center`}>
          <div className={`text-3xl font-semibold`}>Inspiration Collection</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        </div>
      </div>
      <div
        className={`flex justify-around items-center w-full h-full space-x-8 px-8`}
      >
        <div className={` w-1/3 h-[400px] rounded-tl-[60px] relative`}>
          <img
            src="/img/t-shirts/t6.png"
            alt="t5"
            className={`w-full h-full  object-cover rounded-tl-[60px]`}
          />
          {/* <DarkOverlay roundedValue="rounded-tl-[60px]" opacity="60" /> */}
        </div>
        <div
          className={`w-1/3 h-[400px] mb-20 rounded-bl-[60px] rounded-tr-[60px] relative`}
        >
          <img
            src="/img/t-shirts/t3.png"
            alt="t5"
            className={`w-full h-full  object-cover rounded-bl-[60px] rounded-tr-[60px]`}
          />
          <DarkOverlay
            roundedValue="rounded-bl-[60px] rounded-tr-[60px]"
            opacity="60"
          />
        </div>
        <div className={` w-1/3 h-[400px] rounded-br-[60px] relative`}>
          <img
            src="/img/t-shirts/t9.png"
            alt="t5"
            className={`w-full h-full  object-cover rounded-br-[60px]`}
          />
          {/* <DarkOverlay roundedValue="rounded-br-[60px]" opacity="70" /> */}
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
