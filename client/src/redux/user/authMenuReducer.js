import {
  OPEN_LOGIN_MENU,
  CLOSE_LOGIN_MENU,
  OPEN_SIGNUP_MENU,
  CLOSE_SIGNUP_MENU,
} from "./userConstants";

const initialSate = {
  loginMenuOpen: false,
  signupMenuOpen: false,
};

const authMenuReducer = (state = initialSate, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MENU:
      // Signup and login pop up menu must not be opened at same time
      if (state.signupMenuOpen) state.signupMenuOpen = false;
      return { ...state, loginMenuOpen: true };
    case OPEN_SIGNUP_MENU:
      if (state.loginMenuOpen) state.loginMenuOpen = false;
      return { ...state, signupMenuOpen: true };
    case CLOSE_LOGIN_MENU:
      return { ...state, loginMenuOpen: false };
    case CLOSE_SIGNUP_MENU:
      return { ...state, signupMenuOpen: false };
    default:
      return state;
  }
};

export default authMenuReducer;
