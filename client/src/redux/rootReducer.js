// Compose all the other reducers into a single app-wide reducer function
import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import productListReducer from "./product/productListReducer";
import { cartReducer } from "./cart/cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  productList: productListReducer,
  cart: cartReducer,
});
export default rootReducer;
