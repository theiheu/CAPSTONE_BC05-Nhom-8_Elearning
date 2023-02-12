import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const BoxNumberContainer = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="boxNumberContainer mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 flex justify-center p-4">
            <div className="boxNumber">
              <div>
                <img
                  src={
                    require("../../../../src/assets/003-students.e1a7c67b.png")
                      .default
                  }
                  className="imgIcon"
                  alt=""
                />
              </div>
              <div className="textNumber">
                <span>
                  {counterOn && (
                    <CountUp start={0} end={9000} duration={2} delay={0} />
                  )}
                </span>
              </div>
              <p className="textNumberTitle">Học viên</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 flex justify-center p-4">
            <div className="boxNumber">
              <div>
                <img
                  src={
                    require("../../../../src/assets/001-timetable.0e009173.png")
                      .default
                  }
                  className="imgIcon"
                  alt=""
                />
              </div>
              <div className="textNumber">
                <span>
                  {counterOn && (
                    <CountUp start={0} end={1000} duration={2} delay={0} />
                  )}
                </span>
              </div>
              <p className="textNumberTitle">Khóa học</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 flex justify-center p-4">
            <div className="boxNumber">
              <div>
                <img
                  src={
                    require("../../../../src/assets/002-hourglass.548810be.png")
                      .default
                  }
                  className="imgIcon"
                  alt=""
                />
              </div>
              <div className="textNumber">
                <span>
                  {counterOn && (
                    <CountUp start={0} end={33200} duration={2} delay={0} />
                  )}
                </span>
              </div>
              <p className="textNumberTitle">Giờ học</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 flex justify-center p-4">
            <div className="boxNumber">
              <div>
                <img
                  src={
                    require("../../../../src/assets/004-teacher.5bbd6eec.png")
                      .default
                  }
                  className="imgIcon"
                  alt=""
                />
              </div>
              <div className="textNumber">
                <span>
                  {counterOn && (
                    <CountUp start={0} end={400} duration={2} delay={0} />
                  )}
                </span>
              </div>
              <p className="textNumberTitle">Giảng viên</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default BoxNumberContainer;
