import React from "react";
import "./profilePersonal.css";
import "../Course/course.css";

export const ProfilePersonal = () => {
  return (
    <section className="infoPage">
      <div className="titleCourse">
        <h3>Thông tin cá nhân</h3>
        <p>Thông tin học viên</p>
      </div>
      <div className="infoPageContent">
        <div className="row ">
          <div className="col-lg-3 col-md-4">
            <div className="infoLeft">
              <img
                src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600"
                alt=""
              />
              <h6>Robert Nguyễn</h6>
              <p>Lập trình viên Front-end</p>
              <button className="btnInfo">Hồ sơ cá nhân</button>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="infoRight">
              <div className="tab nav nav-tabs">
                <button
                  className="tabLink nav-link active"
                  data-toggle="tab"
                  href="#infoPersonal"
                >
                  Thông tin cá nhân
                </button>
                <button
                  className="tabLink nav-link"
                  data-toggle="tab"
                  href="#infoCourse"
                >
                  Khóa học
                </button>
              </div>
              <div id="infoPersonal" className="tabContent active">
                <section className="userInfo">
                  <div className="userInfoTop">
                    <div className="row">
                      <div className="col-md-7">
                        <div>
                          <p>
                            Email:
                            <span className="ml-2">4Hoangvuaokok@cc.comnn</span>
                          </p>
                          <p>
                            Họ và tên:{" "}
                            <span className="ml-2">Id soluta ipsum sed </span>
                          </p>
                          <p>
                            Số điện thoại:{" "}
                            <span className="ml-2">0345992323</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <p>
                          Tài khoản: <span className="ml-2">admin005</span>
                        </p>
                        <p>
                          Nhóm: <span className="ml-2">GP03</span>
                        </p>
                        <p>
                          Đối tượng: <span className="ml-2"> Học viên</span>
                        </p>
                        <button
                          data-toggle="modal"
                          data-target="#myModal"
                          className="btnGlobal"
                        >
                          Cập nhật
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="userInfoBot">
                    <h4>Kĩ năng của tôi</h4>
                    <div className="row">
                      <div className="skillAll col-xl-8 col-lg-6">
                        <div className="mySkill skillBtnHtml">
                          <button className="skillBtnCustom">html</button>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <div className="mySkill skillBtnCss ">
                          <button className="skillBtnCustom skillBtnHtml">
                            css
                          </button>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "75%" }}
                            />
                          </div>
                        </div>
                        <div className="mySkill skillBtnJs">
                          <button className="skillBtnCustom ">js</button>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "50%" }}
                            />
                          </div>
                        </div>
                        <div className="mySkill skillBtnReact">
                          <button className="skillBtnCustom skillBtnHtml">
                            react
                          </button>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6">
                        <div className="timeStudy">
                          <div className="timeStudyItem">
                            <i className="fas fa-user-clock mr-2" />
                            <div>
                              <h6>Giờ học</h6>
                              <p>80</p>
                            </div>
                          </div>
                          <div className="timeStudyItem">
                            <i className="fas fa-layer-group mr-2" />
                            <div>
                              <h6>Điểm tổng</h6>
                              <p>80</p>
                            </div>
                          </div>
                          <div className="timeStudyItem">
                            <i className="fas fa-swatchbook mr-2" />
                            <div>
                              <h6>Buổi học</h6>
                              <p>40</p>
                            </div>
                          </div>
                          <div className="timeStudyItem">
                            <i className="fas fa-signal mr-2" />
                            <div>
                              <h6>Cấp độ</h6>
                              <p>Trung cấp</p>
                            </div>
                          </div>
                          <div className="timeStudyItem">
                            <i className="fas fa-graduation-cap mr-2" />
                            <div>
                              <h6>Học lực</h6>
                              <p>Khá</p>
                            </div>
                          </div>
                          <div className="timeStudyItem">
                            <i className="fas fa-book mr-2" />
                            <div>
                              <h6>Bài tập</h6>
                              <p>100</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div id="infoCourse" className="tabContent">
                <section className="myCourseInfo">
                  <div className="findCourseNet">
                    <h6>Khóa học của tôi</h6>
                    <form action>
                      <input
                        type="text"
                        className="searchForm"
                        placeholder="Tìm kiếm..."
                      />
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="myModal" style={{ paddingLeft: 0 }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header modalUpdateHeader">
              <h5 className="modal-title">Chỉnh sửa thông tin cá nhân</h5>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body modalUpdate">
              <form action="#">
                <h6>Họ và tên</h6>
                <input
                  type="text"
                  placeholder="Họ tên"
                  name="hoTen"
                  defaultValue
                />
                <div className="message" />
                <h6>Mật khẩu</h6>
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  name="matKhau"
                  defaultValue
                />
                <div className="message" />
                <h6>Email</h6>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  defaultValue
                />
                <div className="message" />
                <h6>Số điện thoại</h6>
                <input
                  type="phone"
                  placeholder="Số điện thoại"
                  name="soDT"
                  defaultValue
                />
                <div className="message" />
                <div className="modal-footer">
                  <button type="submit" className="btnSubmit">
                    Hoàn thành
                  </button>
                  <button
                    type="button"
                    className="btnSubmit btnClose"
                    data-dismiss="modal"
                  >
                    Đóng
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
