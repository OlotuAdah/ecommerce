import React from "react";
import CircularBadge from "./helper/CircularBadge";
import DarkOverlay from "./helper/DarkOverlay";

function HowItWorks() {
  return (
    <div className={`w-full h-[35rem] px-2 py-2 bg-white my-12`}>
      <div className={` text-amber-600 pt-6`}>
        <div className={`text-center`}>
          <div className={`text-2xl font-semibold`}>How It Works</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        </div>
      </div>
      <div className={`w-full h-full  flex justify-between pt-8 space-x-4`}>
        {/* Fist */}
        <div className={`w-1/3 h-[400px] text-amber-600`}>
          <div className={`flex w-full h-full justify-center items-center`}>
            <div>
              <div className={`relative`}>
                <img
                  src="/img/t-shirts/1.png"
                  alt=""
                  className={`w-full h-full object-cover rounded-2xl shadow-md shadow-sky-200`}
                />
                {/* <DarkOverlay opacity="60" /> */}
                <CircularBadge number={1} />
              </div>
              <div className={`text-center`}>
                <p className={`text-2xl font-semibold mt-3`}>
                  Purchase Securely
                </p>
                <p className={`text-xs`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Second */}

        <div className={`w-1/3 h-[400px] text-amber-600 `}>
          <div className={`flex w-full h-full justify-center items-center`}>
            <div>
              <div className={`relative`}>
                <img
                  src="/img/t-shirts/2.png"
                  alt=""
                  className={`w-full h-full object-cover rounded-2xl shadow-md shadow-sky-200`}
                />
                <DarkOverlay opacity="70" roundedValue="rounded-2xl" />
                <CircularBadge number={2} />
              </div>
              <div className={`text-center`}>
                <p className={`text-2xl font-semibold mt-3`}>
                  Ships From Wharehouse
                </p>
                <p className={`text-xs`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Third */}

        <div className={`w-1/3 h-[400px] text-amber-600`}>
          <div className={`flex w-full h-full justify-center items-center`}>
            <div>
              <div className={`relative`}>
                <img
                  src="/img/t-shirts/programmers.PNG"
                  alt="look-great"
                  className={`w-full h-[298px] object-fill rounded-2xl shadow-md shadow-sky-200`}
                />
                {/* <DarkOverlay opacity="60" /> */}
                <CircularBadge number={3} />
              </div>
              <div className={`text-center`}>
                <p className={`text-2xl font-semibold mt-3`}>Look Great!</p>
                <p className={`text-xs`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
