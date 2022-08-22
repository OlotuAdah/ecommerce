import React from "react";
import { useSelector } from "react-redux/es/exports";

const CirleTRbadge = () => {
  const cartItems = useSelector((store) => store.cart.cartItems.length);

  return (
    <div
      className={`absolute -top-1 right-2  w-[17px] h-[17px] bg-red-500 text-white rounded-full animate-pulse `}
    >
      <div
        className={`flex  w-full h-full justify-center items-center text-xs`}
      >
        {cartItems && cartItems > 0 ? cartItems : 0}
      </div>
    </div>
  );
};

export default CirleTRbadge;
