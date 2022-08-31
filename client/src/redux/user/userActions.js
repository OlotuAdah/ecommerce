import axios from "axios";
import {
  CLOSE_LOGIN_MENU,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./userConstants";
//  Action creator, creates the action in the valid format expected by a reducer function
// export const setCurrentUser = (user) => ({
//   type: "SET_CURRENT_USER",
//   payload: user,
// });

export const login = (email, password) => async (dispatch) => {
  const userData = new FormData();
  userData.append("email", email);
  userData.append("password", password);
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios({
      method: "post",
      url: "/api/user/login/",
      data: userData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (Boolean(data.error)) {
      return dispatch({ type: LOGIN_FAILED, payload: data.error });
    }
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    dispatch({ type: CLOSE_LOGIN_MENU });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, payload: error.message });
  } finally {
  }
};

// const response = await axios({
//   method: "post",
//   url: "/api/login",
//   data: loginFormData,
//   headers: { "Content-Type": "multipart/form-data" },
// });
