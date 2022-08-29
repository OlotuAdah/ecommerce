import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CloseAuthPopup from "./helper/CloseAuthPopup";
import {
  CLOSE_LOGIN_MENU,
  OPEN_SIGNUP_MENU,
} from "../redux/user/userConstants";

function Login({ open }) {
  const [passVisibility, setpassVisibility] = useState(false);
  const togglePasswordVisibility = () => setpassVisibility((prev) => !prev);

  const dispatch = useDispatch();
  const moveToSignUp = () => {
    dispatch({ type: CLOSE_LOGIN_MENU });
    dispatch({ type: OPEN_SIGNUP_MENU });
  };
  const handlelogin = () => {};
  useEffect(() => {
    // if user opens the Login form, scroll to top
    if (open) window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //this -> window object
    //NB: If this componet is open, and user scrolls down, close it.
    //If open and user scrolls up, do nothing, that is leave it open!
    window.onscroll = function () {
      this.scrollY > this.oldScroll && dispatch({ type: CLOSE_LOGIN_MENU });
      this.oldScroll = this.scrollY;
    };
  }, [open, dispatch]);
  return (
    <div
      className={`absolute w-[500px] h-[400px] py-4  top-[100px] left-1/3 rounded-lg `}
    >
      <div
        className={`w-full h-full bg-white/80 flex justify-center py-4 rounded-lg hover:shadow-md hover:shadow-amber-200 relative`}
      >
        {/* Login form container */}
        <div className={`flex w-10/12 flex-col`}>
          <div className={` w-full p-2  flex justify-center items-center`}>
            <span className="material-icons text-[40px] text-amber-600">
              account_circle
            </span>
          </div>
          <div className={` w-full p-2  flex justify-center items-center`}>
            <span className={`font-semibold text-amber-600`}>Login Form</span>
          </div>
          <div className={` w-full p-2`}>
            <input
              type="text"
              className={`w-full py-3 px-4 bg-white/70 rounded-lg text-amber-600 font-semibold focus:outline-none focus:text-amber-500 placeholder-amber-500/50`}
              placeholder="somebody@hostname.com"
            />
          </div>
          <div className={` w-full p-2 relative`}>
            <input
              type={passVisibility ? "text" : "password"}
              className={`w-full py-3 px-4 bg-white/70 rounded-lg text-amber-600 font-semibold focus:outline-none focus:text-amber-500 placeholder-amber-500/50`}
              placeholder="Password"
            />
            <div className={`absolute top-[22px] right-4`}>
              <button
                onClick={togglePasswordVisibility}
                class="material-icons text-amber-600/70 text-md cursor-pointer transition-all duration-700"
              >
                {passVisibility ? "visibility" : "visibility_off"}
              </button>
            </div>
          </div>
          <div className={` w-full p-2`}>
            <button
              onClick={handlelogin}
              type="submit"
              className={`w-full bg-amber-600/70 text-gray-200 rounded-lg transition-all duration-500 py-3 font-semibold hover:bg-amber-600 hover:shadow-md hover:shadow-gray-500`}
            >
              Login
            </button>
          </div>
          <div className={` w-full p-2  flex justify-start items-center mb-4`}>
            <span className={`text-sm text-gray-600`}>
              Don't have account?
              <button
                className={`text-amber-600 cursor-pointer btn-auth-tag `}
                onClick={moveToSignUp}
              >
                sign up
              </button>
            </span>
          </div>
        </div>
        <CloseAuthPopup CLOSE_MENU={CLOSE_LOGIN_MENU} />
      </div>
    </div>
  );
}

export default Login;
