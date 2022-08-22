// A reducer is just a function which gets two args:
// currState (or initSate) and an action

import { SET_CURRENT_USER } from "./userConstants.js";

const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  // if this reducer is ever called without a state arg, use the INITIAL_STATE
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }; // A new object has to be return for react re-render to occur!

    default:
      return state; //object is the same, hence, no re-render.
  }
};

export default userReducer;

// NB: Every single reducer functions (e.g userReducer, cartReducer, homeeducer et c) get every action fired,
// hence, you have to return the state (ie curState) if no case is matched (true)
// which is done in the default branch of the switch statement
