// Compose all the other reducers into a single app-wide reducer function
import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

export default combineReducers({ user: userReducer });
