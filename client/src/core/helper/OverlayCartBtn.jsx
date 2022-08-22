import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../redux/cart/cartActions";
import { useSelector } from "react-redux";

function OverlayCartBtn({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <div
      className={` w-[98%] h-[10px] mr-2 absolute bg-transparent bottom-4 left-1 rounded-md text-white`}
    >
      <div className={`flex justify-end`}>
        {cartItems && cartItems.includes(product.id) ? (
          <button
            className="small-btn-cart"
            onClick={() => dispatch(removeItemFromCart(product.id))}
          >
            <span className="material-icons cart-icon">remove</span>
            <span className=" material-icons cart-icon ">shopping_cart</span>
          </button>
        ) : (
          <button
            className="small-btn-cart"
            onClick={() => dispatch(addItemToCart(product.id))}
          >
            <span className="">add</span>
            <span className=" material-icons cart-icon ">shopping_cart</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default OverlayCartBtn;
