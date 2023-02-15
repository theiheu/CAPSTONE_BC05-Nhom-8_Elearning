import { Fragment, useEffect, useState } from "react";
import { Route } from "react-router";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Header";
import SubMenuDropdown from "./Components/Home/subMenuDropdown";

export default function HomeTemplate(props) {
  const { Component, ...restProps } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location, props.history, props.match
        return (
          <Fragment>
            <Navbar toggle={toggle} {...propsRoute} />
            <SubMenuDropdown isOpen={isOpen} toggle={toggle} />
            <Component {...propsRoute} />
            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
}
