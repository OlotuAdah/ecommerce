// A reducer is just a function which gets two args:
// currState (or initSate) and an action

const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  // if this reducer is ever called without a state arg, use the INITIAL_STATE
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

// NB: Every single reducer functions (e.g userReducer, cartReducer, homeeducer et c) get every action fired,
// hence, you have to return the state (ie curState) if no case is matched (true)
// which is done in the default branch of the switch statement
