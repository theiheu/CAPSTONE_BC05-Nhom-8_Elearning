import React, { useEffect, useState, Fragment } from "react";
import { Route } from "react-router";
import Footer from "../Home/Layouts/Footer";
import SubMenuDropdown from "../Home/Components/Home/subMenuDropdown";
import "./../Home/Pages/Style/StylePages.css";
import Header from "../Home/Layouts/Header";

export default function UserTemplate(props) {
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
            <Header toggle={toggle} {...propsRoute} />
            <SubMenuDropdown isOpen={isOpen} toggle={toggle} />

            <Fragment>
              <div className="user-page mb-8">
                <div className="relative py-5">
                  <Component {...propsRoute} />
                </div>
              </div>
            </Fragment>
            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
}
