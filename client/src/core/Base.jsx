import React, { Fragment } from "react";
// import Footer from "./Footer";
import Header from "./Header";

const Base = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className={`w-full h-full bg-[#e5e5e5]`}>
        {/* <div className="w-9/12 px-3 py-10 mx-auto  ">{children}</div> */}
        {children}
      </div>
    </Fragment>
  );
};

export default Base;
