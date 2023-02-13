import React, { Fragment } from "react";

const CoursesHome = () => {
  return (
    <Fragment>
      <div className="coursesHome">
        <h1>
          <a href>Khóa học phổ biến</a>
          <hr />
        </h1>
      </div>
      <div className="body-font flex flex-col items-center text-gray-600">
        <div className="container mx-auto mb-8 py-8 px-3 sm:mb-0 sm:py-16 lg:mb-12">
          <div className="grid sm:grid-cols-2 lg:-m-4 lg:grid-cols-4">
            <div
              key={""}
              className="courses-each-cate relative mx-2 mt-4 rounded-md border-2 bg-white px-6 py-12 shadow-xl lg:mx-5 lg:mb-12 lg:rounded-3xl"
            >
              <div className="text-center">
                <p className="mb-4 w-fit rounded-md bg-indigo-100 py-2 px-3 text-center text-xs text-purple-700 lg:rounded-lg">
                  {"TailwindCss"}
                </p>
                <img
                  src="https://elearningnew.cybersoft.edu.vn/hinhanh/tailwind-css_gp01.jpg"
                  alt={""}
                  className="mb-8 inline-block w-full rounded-lg object-cover object-center"
                  style={{
                    maxHeight: "150px",
                    minHeight: "150px",
                    border: "1px solid #eee",
                  }}
                />
                <h2 className="courses-each-cate-heading text-lg font-bold sm:text-3xl">
                  TailwindCss
                </h2>

                <div className="cardBodyGlobal">
                  <h6>tailwind là một thư viện hỗ trợ cực kỳ phổ biến và...</h6>
                  <div className="titleMaker">
                    <div className="imgCardFooter">
                      <img
                        src={
                          require("../../../../src/assets/avatar2.bb9626e2.png")
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <span className="colorCardTitle ml-2">Elon Musk</span>
                  </div>
                </div>
                <div className="cardFooter">
                  <div>
                    <p>
                      800.000<sup>đ</sup>
                    </p>
                    <p>
                      400.000<sup>đ</sup>
                    </p>
                  </div>
                  <div>
                    <i className="fas fa-star textStar mr-1" />
                    <span className="textStar">4.9</span>
                    <span className="colorCardTitle">(7840)</span>
                  </div>
                </div>
                <p className="courses-each-cate-description text-sm leading-relaxed text-gray-500 sm:text-lg"></p>
                <div
                  className="mx-auto mt-4 w-fit cursor-pointer rounded-lg bg-white px-5 py-3 text-sm text-purple-700 
                        ring-1 ring-purple-700 transition-colors hover:bg-purple-700  sm:text-base lg:font-semibold"
                >
                  Chi tiết khoá học
                </div>
              </div>
            </div>
            <div
              key={""}
              className="courses-each-cate relative mx-2 mt-4 rounded-md border-2 bg-white px-6 py-12 shadow-xl lg:mx-5 lg:mb-12 lg:rounded-3xl"
            >
              <div className="text-center">
                <p className="mb-4 w-fit rounded-md bg-indigo-100 py-2 px-3 text-center text-xs text-purple-700 lg:rounded-lg">
                  {"NodeJS"}
                </p>
                <img
                  src="https://elearningnew.cybersoft.edu.vn/hinhanh/nodejs.jpg"
                  alt={""}
                  className="mb-8 inline-block w-full rounded-lg object-cover object-center"
                  style={{
                    maxHeight: "150px",
                    minHeight: "150px",
                    border: "1px solid #eee",
                  }}
                />
                <h2 className="courses-each-cate-heading text-lg font-bold sm:text-3xl">
                  NodeJS
                </h2>

                <div className="cardBodyGlobal">
                  <h6>Lập trình hiện đang là xu hướng trên toàn thế giới...</h6>
                  <div className="titleMaker">
                    <div className="imgCardFooter">
                      <img
                        src={
                          require("../../../../src/assets/avatar2.bb9626e2.png")
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <span className="colorCardTitle ml-2">Elon Musk</span>
                  </div>
                </div>
                <div className="cardFooter">
                  <div>
                    <p>
                      800.000<sup>đ</sup>
                    </p>
                    <p>
                      400.000<sup>đ</sup>
                    </p>
                  </div>
                  <div>
                    <i className="fas fa-star textStar mr-1" />
                    <span className="textStar">4.9</span>
                    <span className="colorCardTitle">(7840)</span>
                  </div>
                </div>
                <p className="courses-each-cate-description text-sm leading-relaxed text-gray-500 sm:text-lg"></p>
                <div
                  className="mx-auto mt-4 w-fit cursor-pointer rounded-lg bg-white px-5 py-3 text-sm text-purple-700 
                        ring-1 ring-purple-700 transition-colors hover:bg-purple-700  sm:text-base lg:font-semibold"
                >
                  Chi tiết khoá học
                </div>
              </div>
            </div>
            <div
              key={""}
              className="courses-each-cate relative mx-2 mt-4 rounded-md border-2 bg-white px-6 py-12 shadow-xl lg:mx-5 lg:mb-12 lg:rounded-3xl"
            >
              <div className="text-center">
                <p className="mb-4 w-fit rounded-md bg-indigo-100 py-2 px-3 text-center text-xs text-purple-700 lg:rounded-lg">
                  {"Lập Trình Full Stack"}
                </p>
                <img
                  src="https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-full-stack.jpg"
                  alt={""}
                  className="mb-8 inline-block w-full rounded-lg object-cover object-center"
                  style={{
                    maxHeight: "150px",
                    minHeight: "150px",
                    border: "1px solid #eee",
                  }}
                />
                <h2 className="courses-each-cate-heading text-lg font-bold sm:text-3xl">
                  React JS
                </h2>

                <div className="cardBodyGlobal">
                  <h6>Duy nhất tại CyberSoft đào tạo trọn bộ ReactJS the...</h6>
                  <div className="titleMaker">
                    <div className="imgCardFooter">
                      <img
                        src={
                          require("../../../../src/assets/avatar2.bb9626e2.png")
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <span className="colorCardTitle ml-2">Elon Musk</span>
                  </div>
                </div>
                <div className="cardFooter">
                  <div>
                    <p>
                      800.000<sup>đ</sup>
                    </p>
                    <p>
                      400.000<sup>đ</sup>
                    </p>
                  </div>
                  <div>
                    <i className="fas fa-star textStar mr-1" />
                    <span className="textStar">4.9</span>
                    <span className="colorCardTitle">(7840)</span>
                  </div>
                </div>
                <p className="courses-each-cate-description text-sm leading-relaxed text-gray-500 sm:text-lg"></p>
                <div
                  className="mx-auto mt-4 w-fit cursor-pointer rounded-lg bg-white px-5 py-3 text-sm text-purple-700 
                        ring-1 ring-purple-700 transition-colors hover:bg-purple-700  sm:text-base lg:font-semibold"
                >
                  Chi tiết khoá học
                </div>
              </div>
            </div>
            <div
              key={""}
              className="courses-each-cate relative mx-2 mt-4 rounded-md border-2 bg-white px-6 py-12 shadow-xl lg:mx-5 lg:mb-12 lg:rounded-3xl"
            >
              <div className="text-center">
                <p className="mb-4 w-fit rounded-md bg-indigo-100 py-2 px-3 text-center text-xs text-purple-700 lg:rounded-lg">
                  {"Học Lập Trình JAVA Chuyên Nghiệp"}
                </p>
                <img
                  src="https://elearningnew.cybersoft.edu.vn/hinhanh/hoc-lap-trinh-java-chuyen-nghiep_gp01.png"
                  alt={""}
                  className="mb-8 inline-block w-full rounded-lg object-cover object-center"
                  style={{
                    maxHeight: "150px",
                    minHeight: "150px",
                    border: "1px solid #eee",
                  }}
                />
                <h2 className="courses-each-cate-heading text-lg font-bold sm:text-3xl">
                  Học Lập Trình JAVA
                </h2>

                <div className="cardBodyGlobal">
                  <h6>Lập trình hiện đang là xu hướng trên toàn thế giới...</h6>
                  <div className="titleMaker">
                    <div className="imgCardFooter">
                      <img
                        src={
                          require("../../../../src/assets/avatar2.bb9626e2.png")
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <span className="colorCardTitle ml-2">Elon Musk</span>
                  </div>
                </div>
                <div className="cardFooter">
                  <div>
                    <p>
                      800.000<sup>đ</sup>
                    </p>
                    <p>
                      400.000<sup>đ</sup>
                    </p>
                  </div>
                  <div>
                    <i className="fas fa-star textStar mr-1" />
                    <span className="textStar">4.9</span>
                    <span className="colorCardTitle">(7840)</span>
                  </div>
                </div>
                <p className="courses-each-cate-description text-sm leading-relaxed text-gray-500 sm:text-lg"></p>
                <div
                  className="mx-auto mt-4 w-fit cursor-pointer rounded-lg bg-white px-5 py-3 text-sm text-purple-700 
                        ring-1 ring-purple-700 transition-colors hover:bg-purple-700  sm:text-base lg:font-semibold"
                >
                  Chi tiết khoá học
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CoursesHome;
