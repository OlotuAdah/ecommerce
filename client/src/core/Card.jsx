import React from "react";
import ImageHelper from "./helper/ImageHelper";
import OverlayCartBtn from "./helper/OverlayCartBtn";
import { getRandomArbitrary } from "./helper/coreAPICall";
import { formatCurrency } from "./helper/currencyFormatter";

function Card(props) {
  const defaultProduct = {
    id: 0,
    name: "T-shirt Name",
    price: 5,
    desc: "Short description of the T-shirt",
    image: "/img/bitcoin.avif",
    reviews: 25,
    rate: 4.4,
  };
  const product = props.product ? props.product : defaultProduct;

  return (
    <div className="product-card ">
      {/* <!-- card image --> */}
      <div className="h-[320px]">
        <ImageHelper
          image={product.image}
          width="w-full"
          height="h-full"
          roundedValue="rounded-t-lg"
        >
          <OverlayCartBtn product={product} />
        </ImageHelper>
      </div>
      {/* <!-- card content--> */}
      <div className="px-6 mt-2 pb-1 relative cursor-pointer">
        {/* Rating */}
        <div className="flex text-sm">
          {[...Array(product.rate)].map((_, i) => (
            <span className="material-icons text-amber-400" key={i.toString()}>
              grade
            </span>
          ))}
          {Number(product.rate) % 1 > 0.3 ? (
            <span className="material-icons text-amber-400">star_half</span>
          ) : (
            <span></span>
          )}
          {/* Reviews */}
          <span className="ml-2 text-xs text-gray-600 flex-grow text-right place-self-center">
            {product.reviews} reviews
          </span>
        </div>
        {/* T-shirt name */}
        <p className="text-lg font-semibold font-comf text-gray-600">
          {product.name}
        </p>
        {/* T-shirt description */}

        <p className="text-xs text-gray-600 py-3">
          {product.description}{" "}
          {/* <span className={`bg-gray-100 text-gray-400 py-1 px-2 rounded-full`}>
            ..more
          </span> */}
        </p>
        <div className={`flex justify-between`}>
          {/* Contains Tags and Cart action buttons */}
          {/* <!-- 1: Tags --> */}
          <div className={`space-x-1`}>
            <span className="text-xs px-2 py-0.5 bg bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
              Price
            </span>
            <span className="text-xs px-2 py-0.5 bg bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
              {formatCurrency(product.price)}
            </span>
            {/* <span className="text-xs px-2 py-0.5 bg bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
              gym
            </span> */}
          </div>
          {/* <!-- 2: Discouted price  and % discount-->  */}
          <div className={`align-middle space-x-1`}>
            <span className="text-xs px-2 py-0.5 bg bg-amber-100 border border-amber-200 line-through text-gray-500 rounded-full">
              ${formatCurrency(Math.floor(getRandomArbitrary(58, 100)))}
            </span>
            <span className="text-xs px-2 py-0.5 bg bg-amber-100 border border-amber-200 text-red-500 rounded-full">
              -{Math.floor(getRandomArbitrary(28, 40))}%
            </span>
          </div>
        </div>
        {/* Trending T-shirts: Should only become visible if rate is >=4 and reviews is >=20 */}

        {product.rate >= 4 && product.reviews >= 20 ? (
          <div className="absolute right-0 bottom-0 ">
            <span className="material-icons text-md text-red-700">
              local_fire_department
            </span>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default Card;
