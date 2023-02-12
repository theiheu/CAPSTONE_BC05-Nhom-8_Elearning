import React from "react";

const SlideHome = () => {
  return (
    <div className="row sliderHome">
      <div className="col-lg-6 sloganBox">
        <div className="triangleTopRight" />
        <div className="smallBox smallboxLeftTop" />
        <div className="smallBox smallboxRightTop" />
        <div className="smallBox smallboxRightBottom" />
        <div className="smallBox smallboxRightBottom doubleBox" />
        <div className="sloganContainer">
          <div>
            <img
              className="sliderPlaneImg"
              src={require("../../../../src/assets/paper_plane.93dfdbf5.png")}
              alt=""
            />
          </div>
          <h1>Chào mừng</h1>
          <h1>đến với môi trường </h1>
          <h1>
            V<span>learning</span>
          </h1>
          <button className="btnGlobal btnSlider mt-4">Bắt đâu nào</button>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="sliderRight">
          <div />
          <div>
            <img
              className="sliderMainImg"
              src={require("../../../../src/assets/slider2.f170197b.png")}
              alt=""
            />
            <img
              className="sliderSubImg sliderCodeImg"
              src={require("../../../../src/assets/code_slider.8c12bbb4.png")}
              alt=""
            />
            <img
              className="sliderSubImg sliderMesImg "
              src={require("../../../../src/assets/message_slider.6835c478.png")}
              alt=""
            />
            <img
              className="sliderSubImg sliderCloudImg"
              src={require("../../../../src/assets/clouds.15eb556c.png")}
              alt=""
            />
            <img
              className="sliderSubImg sliderCloud2Img"
              src={require("../../../../src/assets/clouds.15eb556c.png")}
              alt=""
            />
            <img
              className="sliderSubImg sliderCloud3Img"
              src={require("../../../../src/assets/clouds.15eb556c.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideHome;
