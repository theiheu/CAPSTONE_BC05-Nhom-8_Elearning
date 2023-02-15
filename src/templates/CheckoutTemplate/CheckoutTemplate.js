import { Fragment, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Navbar from "../Home/Layouts/Header";
import Footer from "../Home/Layouts/Footer";
import SubMenuDropdown from "../Home/Components/Home/subMenuDropdown";
import { Redirect } from "react-router";
import { USER_SIGNIN } from "../../utilities/Settings/config";

export default function CheckoutTemplate(props) {
  const { Component, ...restProps } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (!localStorage.getItem(USER_SIGNIN)) {
    return <Redirect to="/signin" />;
  }

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
