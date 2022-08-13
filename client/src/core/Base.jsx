import React, { Fragment } from "react";
// import Footer from "./Footer";
import Header from "./Header";

const Base = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className={`w-full h-full bg-sky-100`}>{children}</div>
    </Fragment>
  );
};

export default Base;
