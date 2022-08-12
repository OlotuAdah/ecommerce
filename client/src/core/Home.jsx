import React, { useEffect, useState } from "react";
import { getProducts } from "./helper/coreAPICall";

import Card from "./Card";

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
    <div className={``}>
      <div className={`grid grid-cols-3 gap-6 mx-auto`}>
        {products && error !== true
          ? products.map((product, i) => (
              <Card product={product} key={i.toString()} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Home;
