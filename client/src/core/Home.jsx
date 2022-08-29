import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/product/productActions";

import Card from "./Card";
import HeroBanner from "./HeroBanner";

import WhyUs from "./WhyUs";
import ProductsHeader from "./helper/ProductsHeader";
import Inspiration from "./Inspiration";
import BeutifyYourSpace from "./BeutifyYourSpace";
import HowItWorks from "./HowItWorks";
import LoadingProduct from "./helper/LoadingProduct";
// import CircularBadge from "./helper/CircularBadge";

function Home() {
  // const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList; //destructure these three values
  // console.log(loading, error);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <HeroBanner />
      <WhyUs />
      <div className={`w-9/12 px-3 py-10 mx-auto relative`}>
        <ProductsHeader />
        {loading ? (
          <div className={`grid grid-cols-3 gap-6 mx-auto`}>
            {/*When loading: Render the LoadingProduct component nine times */}
            {[...Array(9).fill(1)].map((_, i) => (
              <LoadingProduct key={i.toString()} />
            ))}
          </div>
        ) : error ? (
          <div
            className={`mx-auto text-3xl text-bold text-center py-4 bg-orange-200 text-red-600 rounded-lg animate-pulse`}
          >
            Oops... {error}
          </div> // if error occured, dsiplay an error message
        ) : (
          <>
            <div className={`grid grid-cols-3 gap-6 mx-auto`}>
              {products && error !== true
                ? products.map((product, i) => (
                    <Card product={product} key={i.toString()} />
                  ))
                : ""}
            </div>
          </>
        )}
        <Inspiration />
        <BeutifyYourSpace />
        <HowItWorks />

        {/* <DarkOverlay width="w-full" height="h-full" /> */}

        {/* <CircularBadge number={2} /> */}
      </div>
    </Fragment>
  );
}

export default Home;
