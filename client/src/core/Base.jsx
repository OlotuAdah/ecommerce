import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Base = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {/* grid grid-cols-3 gap-6 mx-auto */}
      <div className="w-9/12 px-3 py-10 mx-auto ">
        {children}
        {/* <Footer /> */}
      </div>
    </Fragment>
  );
};

export default Base;
