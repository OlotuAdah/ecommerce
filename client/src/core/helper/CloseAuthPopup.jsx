import React from "react";
import { useDispatch } from "react-redux";

function CloseAuthPopup({ CLOSE_MENU }) {
  // CLOSE_MENU could either dispatch CLOSE_LOGIN_MENU OR CLOSE_SIGNUP_MENU depending on who involked it
  const dispatch = useDispatch();
  return (
    <div className="absolute w-6 h-6 top-2 right-2">
      <button onClick={() => dispatch({ type: CLOSE_MENU })}>
        <span className="material-icons text-md text-red-700/90"> cancel</span>
      </button>
    </div>
  );
}

export default CloseAuthPopup;
