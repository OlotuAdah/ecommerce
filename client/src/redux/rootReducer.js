// Compose all the other reducers into a single app-wide reducer function
import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import productListReducer from "./product/productListReducer";
import { cartReducer } from "./cart/cartReducer";
import authMenuReducer from "./user/authMenuReducer";

const rootReducer = combineReducers({
  user: userReducer,
  authMenu: authMenuReducer,
  productList: productListReducer,
  cart: cartReducer,
});
export default rootReducer;
