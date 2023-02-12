import React from "react";
import { Link } from "react-router-dom";
import "./notFoundPage.css";

var animateButton = function (e) {
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}

export const NotFoundPage = () => {
  return (
    <div className="notFoundPage">
      <div className="notFound">404</div>
      <p>Page Not Found</p>
      <button className="bubbly-button">
        <Link to={"/"}>Back To Home</Link>
      </button>
    </div>
  );
};
