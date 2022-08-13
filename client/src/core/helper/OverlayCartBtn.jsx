import React from "react";

function OverlayCartBtn(props) {
  return (
    <div
      className={` w-[98%] h-[10px] mr-2 absolute bg-transparent bottom-4 left-1 rounded-md text-white`}
    >
      <div className={`flex justify-between`}>
        <button className="small-btn-cart">
          <span className="material-icons cart-icon">remove</span>
          <span className=" material-icons cart-icon ">shopping_cart</span>
        </button>
        <button className="small-btn-cart">
          <span className="">add </span>
          <span className=" material-icons cart-icon ">shopping_cart</span>
        </button>
      </div>
    </div>
  );
}

export default OverlayCartBtn;
