import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import BackTop from "./BackTop/BackTop";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <BackTop />
      <Footer />
    </Fragment>
  );
};
