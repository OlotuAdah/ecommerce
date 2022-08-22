import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartConstants";

export const addItemToCart = (itemId) => ({
  type: ADD_TO_CART,
  payload: itemId,
});
export const removeItemFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});
