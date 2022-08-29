import axios from "axios";
//  Action creator, creates the action in the valid format expected by a reducer function
export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({});
      await axios.post("/api/user/login/", { email, password });
    } catch (error) {}
  };
