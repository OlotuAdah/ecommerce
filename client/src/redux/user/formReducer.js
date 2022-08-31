//
const initialSate = { email: "", password: "" };

const formReducer = (state = initialSate, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return { ...state, [action.payload.name]: action.payload.value };

    default:
      return state;
  }
};

export default formReducer;
