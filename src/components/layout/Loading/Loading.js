import React, { Fragment } from "react";
import "./loading.css";

export const Loading = () => {
  return (
    <div className="loading">
      <div class="box">
        <div class="cat">
          <div class="cat__body"></div>
          <div class="cat__body"></div>
          <div class="cat__tail"></div>
          <div class="cat__head"></div>
        </div>
      </div>
    </div>
  );
};
