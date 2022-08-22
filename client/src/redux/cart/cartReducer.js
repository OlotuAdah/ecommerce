import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // if product is alreay added, do nothing to state
      if (state.cartItems.includes(action.payload)) return state;

      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item !== action.payload),
        ],
      };

    default:
      return state;
  }
};
