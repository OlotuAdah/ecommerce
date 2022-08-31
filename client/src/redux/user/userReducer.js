// A reducer is just a function which gets two args:
// currState (or initSate) and an action

import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./userConstants.js";

const INITIAL_STATE = {
  loading: false,
  error: null,
  currentUser: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  // if this reducer is ever called without a state arg, use the INITIAL_STATE
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: false };

    case LOGIN_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        currentUser: action.payload,
      };

    case LOGIN_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state; //object is the same, hence, no re-render.
  }
};

export default userReducer;

// NB: Every single reducer functions (e.g userReducer, cartReducer, homeeducer et c) get every action fired,
// hence, you have to return the state (ie curState) if no case is matched (true)
// which is done in the default branch of the switch statement
