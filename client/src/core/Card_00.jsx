import React from "react";
import ImageHelper from "./helper/ImageHelper";
import OverLayRating from "./helper/OverLayRating";

function Card({ image }) {
  return (
    <div
      className={`w-full bg-white text-amber-600 rounded-lg pb-2 mb-20 shadow-xl shadow-amber-200 border-t border-t-amber-500 `}
    >
      <div className={`border-b border-amber-100 font-bold px-1 py-2`}>
        Name of this awesome T-shirt
      </div>
      <div className={`px-1 py-2`}>
        <ImageHelper
          image={image}
          width="w-full"
          height="h-auto"
          roundedValue="rounded-md"
        >
          <OverLayRating height="h-[30px]" width="w-full" />
        </ImageHelper>
      </div>
      <div
        className={` text-amber-500 font-semibold px-1 py-2 flex text-justify`}
      >
        This is the description of this great photo. You can add multiple lines
        if necessary.
      </div>
      <div className={`mx-1`}>
        <button className="btn-cart mb-2 w-full">Add to Cart</button>
        <button className="btn-cart mb-2 w-full ">Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
