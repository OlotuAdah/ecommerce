import React, { useEffect, useState } from "react";
import { getProducts } from "./helper/coreAPICall";

import Card from "./Card";
import HeroBanner from "./HeroBanner";
import { Fragment } from "react";

import WhyUs from "./WhyUs";
import ProductsHeader from "./helper/ProductsHeader";
import Inspiration from "./Inspiration";
import BeutifyYourSpace from "./BeutifyYourSpace";
import HowItWorks from "./HowItWorks";
// import CircularBadge from "./helper/CircularBadge";

//for testing
// const isAuthenticated = true;

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let res = await getProducts();
      res = Array.from(res);

      if ((res.length > 0) & (res[0].error !== true)) return setProducts(res);
      return setError(true);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <HeroBanner />
      <WhyUs />
      <div className={`w-9/12 px-3 py-10 mx-auto`}>
        <ProductsHeader />
        <div className={`grid grid-cols-3 gap-6 mx-auto`}>
          {products && error !== true
            ? products.map((product, i) => (
                <Card product={product} key={i.toString()} />
              ))
            : ""}
        </div>
        <Inspiration />
        <BeutifyYourSpace />
        <HowItWorks />
        {/* <CircularBadge number={2} /> */}
      </div>
    </Fragment>
  );
}

export default Home;
