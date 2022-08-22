import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILED,
} from "./productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const result = await axios.get("/api/product");
    const products = result.data.map((obj) => setSomeMissingKeys(obj));
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: products });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

function setSomeMissingKeys(object) {
  const rate = Math.floor(getRandomArbitrary(3, 5));
  const reviews = Math.floor(getRandomArbitrary(25, 45));
  object.rate = rate; //for testing UI
  object.reviews = reviews; //for testing UI
  return object;
}

export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
