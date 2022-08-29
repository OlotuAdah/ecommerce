import React from "react";
import { useSelector } from "react-redux";
import ArrowDown from "../animated/ArrowDown";
import Login from "./Login";
import Signup from "./Signup";

function HeroBanner() {
  const loginMenOpen = useSelector((state) => state.authMenu.loginMenuOpen);
  const signupMenuOpen = useSelector((state) => state.authMenu.signupMenuOpen);
  return (
    <div className={`relative h-screen w-full shadow-sm shadow-amber-500`}>
      <img
        src="/img/music-group.jpg"
        alt="hero-banner"
        className={`w-full h-full object-cover`}
      />
      {/* <!-- dark overlay on the featured image --> */}
      <div
        className={`absolute inset-0 bg-black/${
          loginMenOpen | signupMenuOpen ? 90 : 70
        }`}
      ></div>
      {/* Browse our newer collections */}
      <div
        className={`absolute w-[500px] h-[300px] bottom-[100px] right-20 bg-sky-50/50 rounded-lg transition-all hover:shadow-md hover:shadow-amber-200`}
      >
        <div className={`p-6 space-y-3 `}>
          <p className={`font-bold text-gray-800 `}>New Arrival</p>
          <p className={`font-bold text-amber-800 text-4xl`}>
            Discover our New Collections
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore consectetur adipiscing.
          </p>
          <button
            className={`btn-primary bg-amber-800 text-gray-300 transition-all hover:translate-x-1 duration-500`}
          >
            Buy Now
          </button>
        </div>
        {/* <ArrowDown /> */}
      </div>
      <div
        className={`absolute w-12 h-[46px] bottom-[100px] right-20 bg-sky-50/30 rounded-lg`}
      >
        <div
          className={`flex w-full h-full  justify-center items-center animate-bounce mt-3`}
        >
          <ArrowDown />
        </div>
      </div>
      {loginMenOpen && <Login open={loginMenOpen} />}
      {signupMenuOpen && <Signup open={signupMenuOpen} />}
    </div>
  );
}

export default HeroBanner;
