import React, { Fragment } from "react";

const CoursesHome = () => {
  return (
    <Fragment>
      <div className="coursesHome">
        <h6>
          <a href>Khóa học phổ biến</a>
        </h6>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 col-xl-3 cardGlobalRes mt-4 cardEffect">
          <a className="cardGlobal" href="/chitiet/1234511">
            <img
              src="https://elearningnew.cybersoft.edu.vn/hinhanh/tailwind-css_gp01.jpg"
              alt=""
            />
            <span className="stikerCard">Tailwind CSS </span>
            <div className="cardBodyGlobal">
              <h6>tailwind là một thư viện hỗ trợ cực kỳ phổ biến và...</h6>
              <div className="titleMaker">
                <div className="imgCardFooter">
                  <img
                    src={require("../../../../src/assets/avatar2.bb9626e2.png")}
                    alt=""
                  />
                </div>
                <span className="ml-2 colorCardTitle">Elon Musk</span>
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
                <i className="fas fa-star mr-1 textStar" />
                <span className="textStar">4.9</span>
                <span className="colorCardTitle">(7840)</span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-xl-3 cardGlobalRes mt-4 cardEffect">
          <a className="cardGlobal" href="/chitiet/123456Coursess">
            <img
              src="https://elearningnew.cybersoft.edu.vn/hinhanh/nodejs.jpg"
              alt=""
            />
            <span className="stikerCard">NodeJS</span>
            <div className="cardBodyGlobal">
              <h6>Lập trình hiện đang là xu hướng trên toàn thế giới...</h6>
              <div className="titleMaker">
                <div className="imgCardFooter">
                  <img
                    src={require("../../../../src/assets/avatar2.bb9626e2.png")}
                    alt=""
                  />
                </div>
                <span className="ml-2 colorCardTitle">Elon Musk</span>
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
                <i className="fas fa-star mr-1 textStar" />
                <span className="textStar">4.9</span>
                <span className="colorCardTitle">(7840)</span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-xl-3 cardGlobalRes mt-4 cardEffect">
          <a className="cardGlobal" href="/chitiet/123859">
            <img
              src="https://elearningnew.cybersoft.edu.vn/hinhanh/hoc-lap-trinh-java-chuyen-nghiep_gp01.png"
              alt=""
            />
            <span className="stikerCard">Học Lập Trình JAVA Chuyên Nghiệp</span>
            <div className="cardBodyGlobal">
              <h6>Lập trình hiện đang là xu hướng trên toàn thế giới...</h6>
              <div className="titleMaker">
                <div className="imgCardFooter">
                  <img
                    src={require("../../../../src/assets/avatar2.bb9626e2.png")}
                    alt=""
                  />
                </div>
                <span className="ml-2 colorCardTitle">Elon Musk</span>
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
                <i className="fas fa-star mr-1 textStar" />
                <span className="textStar">4.9</span>
                <span className="colorCardTitle">(7840)</span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-xl-3 cardGlobalRes mt-4 cardEffect">
          <a className="cardGlobal" href="/chitiet/1270eb53ae663">
            <img
              src="https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-full-stack.jpg"
              alt=""
            />
            <span className="stikerCard">Lập Trình Full Stack</span>
            <div className="cardBodyGlobal">
              <h6>Duy nhất tại CyberSoft đào tạo trọn bộ ReactJS the...</h6>
              <div className="titleMaker">
                <div className="imgCardFooter">
                  <img
                    src={require("../../../../src/assets/avatar2.bb9626e2.png")}
                    alt=""
                  />
                </div>
                <span className="ml-2 colorCardTitle">Elon Musk</span>
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
                <i className="fas fa-star mr-1 textStar" />
                <span className="textStar">4.9</span>
                <span className="colorCardTitle">(7840)</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-5">
        <h6>
          <a href>Khóa học tham khảo</a>
        </h6>
        <div className="row">
          <div className="col-md-6 col-xl-3 cardGlobalRes mt-4">
            <a className="cardGlobal " href="/chitiet/1312">
              <img
                src="https://elearningnew.cybersoft.edu.vn/hinhanh/reactjs.jpg"
                alt=""
              />
              <span className="stikerCard">ReactJS</span>
              <div className="cardBodyGlobal">
                <h6>Lập trình hiện đang là xu hướng trên toàn thế giới...</h6>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>
              </div>
              <div className="cardFooter">
                <div className="titleMaker">
                  <div className="imgCardFooter">
                    <img
                      src={require("../../../../src/assets/avatar2.bb9626e2.png")}
                      alt=""
                    />
                  </div>
                  <span className="ml-2 colorCardTitle">Elon Musk</span>
                </div>
                <div>
                  <p>
                    800.000<sup>đ</sup>
                  </p>
                  <p>
                    400.000<sup>đ</sup>
                    <i className="fas fa-tag iconTag" />
                  </p>
                </div>
              </div>
              <div className="subCard">
                <div className="subCardHead">
                  <img
                    src={require("../../../../src/assets/emoji.6d1b7051.png")}
                    alt=""
                  />
                  <span className="ml-1 colorCardTitle">Elun Musk Ricard</span>
                </div>
                <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                <p className="colorCardTitle">
                  Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương
                  trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa
                  học 100% thực hành cường độ cao theo dự án thực tế và kết nối
                  doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
                </p>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>

                <button className="btnGlobal btnSubCard">
                  <a href="/chitiet/1312">Xem chi tiết</a>
                </button>
              </div>
              <div className="cardSale">
                <span>Yêu thích</span>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-xl-3 cardGlobalRes mt-4">
            <a
              className="cardGlobal moveSubCard "
              href="/chitiet/241120222210491"
            >
              <img
                src="https://elearningnew.cybersoft.edu.vn/hinhanh/ngon-ngu-may-tinh.jpg"
                alt=""
              />
              <span className="stikerCard">Lập trình web</span>
              <div className="cardBodyGlobal">
                <h6>Lập trình hiện đang là xu hướng trên toàn thế giới...</h6>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>
              </div>
              <div className="cardFooter">
                <div className="titleMaker">
                  <div className="imgCardFooter">
                    <img
                      src={require("../../../../src/assets/avatar2.bb9626e2.png")}
                      alt=""
                    />
                  </div>
                  <span className="ml-2 colorCardTitle">Elon Musk</span>
                </div>
                <div>
                  <p>
                    800.000<sup>đ</sup>
                  </p>
                  <p>
                    400.000<sup>đ</sup>
                    <i className="fas fa-tag iconTag" />
                  </p>
                </div>
              </div>
              <div className="subCard">
                <div className="subCardHead">
                  <img
                    src={require("../../../../src/assets/emoji.6d1b7051.png")}
                    alt=""
                  />
                  <span className="ml-1 colorCardTitle">Elun Musk Ricard</span>
                </div>
                <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                <p className="colorCardTitle">
                  Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương
                  trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa
                  học 100% thực hành cường độ cao theo dự án thực tế và kết nối
                  doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
                </p>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>

                <button className="btnGlobal btnSubCard">
                  <a href="/chitiet/1312">Xem chi tiết</a>
                </button>
              </div>
              <div className="cardSale">
                <span>Yêu thích</span>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-xl-3 cardGlobalRes mt-4">
            <a className="cardGlobal " href="/chitiet/241120222224156">
              <img
                src="https://elearningnew.cybersoft.edu.vn/hinhanh/full-stack.jpg"
                alt=""
              />
              <span className="stikerCard">Full Stack</span>
              <div className="cardBodyGlobal">
                <h6>CyberSoft đã giúp được hơn 3800 học viên bị lan ma...</h6>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>
              </div>
              <div className="cardFooter">
                <div className="titleMaker">
                  <div className="imgCardFooter">
                    <img
                      src={require("../../../../src/assets/avatar2.bb9626e2.png")}
                      alt=""
                    />
                  </div>
                  <span className="ml-2 colorCardTitle">Elon Musk</span>
                </div>
                <div>
                  <p>
                    800.000<sup>đ</sup>
                  </p>
                  <p>
                    400.000<sup>đ</sup>
                    <i className="fas fa-tag iconTag" />
                  </p>
                </div>
              </div>
              <div className="subCard">
                <div className="subCardHead">
                  <img
                    src={require("../../../../src/assets/emoji.6d1b7051.png")}
                    alt=""
                  />
                  <span className="ml-1 colorCardTitle">Elun Musk Ricard</span>
                </div>
                <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                <p className="colorCardTitle">
                  Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương
                  trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa
                  học 100% thực hành cường độ cao theo dự án thực tế và kết nối
                  doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
                </p>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>

                <button className="btnGlobal btnSubCard">
                  <a href="/chitiet/1312">Xem chi tiết</a>
                </button>
              </div>
              <div className="cardSale">
                <span>Yêu thích</span>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-xl-3 cardGlobalRes mt-4">
            <a className="cardGlobal moveSubCard " href="/chitiet/266656">
              <img
                src="https://elearningnew.cybersoft.edu.vn/hinhanh/bc32-fe.png"
                alt=""
              />
              <span className="stikerCard">BC32 FE</span>
              <div className="cardBodyGlobal">
                <h6>Lập trình hiện đang là xu hướng trên toàn thế giới...</h6>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>
              </div>
              <div className="cardFooter">
                <div className="titleMaker">
                  <div className="imgCardFooter">
                    <img
                      src={require("../../../../src/assets/avatar2.bb9626e2.png")}
                      alt=""
                    />
                  </div>
                  <span className="ml-2 colorCardTitle">Elon Musk</span>
                </div>
                <div>
                  <p>
                    800.000<sup>đ</sup>
                  </p>
                  <p>
                    400.000<sup>đ</sup>
                    <i className="fas fa-tag iconTag" />
                  </p>
                </div>
              </div>
              <div className="subCard">
                <div className="subCardHead">
                  <img
                    src={require("../../../../src/assets/emoji.6d1b7051.png")}
                    alt=""
                  />
                  <span className="ml-1 colorCardTitle">Elun Musk Ricard</span>
                </div>
                <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                <p className="colorCardTitle">
                  Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương
                  trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa
                  học 100% thực hành cường độ cao theo dự án thực tế và kết nối
                  doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
                </p>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>

                <button className="btnGlobal btnSubCard">
                  <a href="/chitiet/1312">Xem chi tiết</a>
                </button>
              </div>
              <div className="cardSale">
                <span>Yêu thích</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h6>
          <a href>Khóa học Front End React Js</a>
        </h6>
        <div className="row">
          <div className="col-md-6 col-xl-3 cardGlobalRes mt-4">
            <a className="cardGlobal" href="/chitiet/241120222224156">
              <img
                src="https://elearningnew.cybersoft.edu.vn/hinhanh/full-stack.jpg"
                alt=""
              />
              <span className="stikerCard">Full Stack</span>
              <div className="cardBodyGlobal">
                <h6>CyberSoft đã giúp được hơn 3800 học viên bị lan ma...</h6>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>
              </div>
              <div className="cardFooter">
                <div className="titleMaker">
                  <div className="imgCardFooter">
                    <img
                      src={require("../../../../src/assets/avatar2.bb9626e2.png")}
                      alt=""
                    />
                  </div>
                  <span className="ml-2 colorCardTitle">Elon Musk</span>
                </div>
                <div>
                  <p>
                    800.000<sup>đ</sup>
                  </p>
                  <p>
                    400.000<sup>đ</sup>
                    <i className="fas fa-tag iconTag" />
                  </p>
                </div>
              </div>
              <div className="subCard">
                <div className="subCardHead">
                  <img
                    src={require("../../../../src/assets/emoji.6d1b7051.png")}
                    alt=""
                  />
                  <span className="ml-1 colorCardTitle">Elun Musk Ricard</span>
                </div>
                <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                <p className="colorCardTitle">
                  Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương
                  trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa
                  học 100% thực hành cường độ cao theo dự án thực tế và kết nối
                  doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
                </p>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>

                <button className="btnGlobal btnSubCard">
                  <a href="/chitiet/1312">Xem chi tiết</a>
                </button>
              </div>
              <div className="cardSale">
                <span>Yêu thích</span>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-xl-3 cardGlobalRes mt-4">
            <a className="cardGlobal moveSubCard" href="/chitiet/266656">
              <img
                src="https://elearningnew.cybersoft.edu.vn/hinhanh/bc32-fe.png"
                alt=""
              />
              <span className="stikerCard">BC32 FE</span>
              <div className="cardBodyGlobal">
                <h6>Lập trình hiện đang là xu hướng trên toàn thế giới...</h6>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>
              </div>
              <div className="cardFooter">
                <div className="titleMaker">
                  <div className="imgCardFooter">
                    <img
                      src={require("../../../../src/assets/avatar2.bb9626e2.png")}
                      alt=""
                    />
                  </div>
                  <span className="ml-2 colorCardTitle">Elon Musk</span>
                </div>
                <div>
                  <p>
                    800.000<sup>đ</sup>
                  </p>
                  <p>
                    400.000<sup>đ</sup>
                    <i className="fas fa-tag iconTag" />
                  </p>
                </div>
              </div>
              <div className="subCard">
                <div className="subCardHead">
                  <img
                    src={require("../../../../src/assets/emoji.6d1b7051.png")}
                    alt=""
                  />
                  <span className="ml-1 colorCardTitle">Elun Musk Ricard</span>
                </div>
                <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                <p className="colorCardTitle">
                  Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương
                  trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa
                  học 100% thực hành cường độ cao theo dự án thực tế và kết nối
                  doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
                </p>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>

                <button className="btnGlobal btnSubCard">
                  <a href="/chitiet/1312">Xem chi tiết</a>
                </button>
              </div>
              <div className="cardSale">
                <span>Yêu thích</span>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-xl-3 cardGlobalRes mt-4">
            <a className="cardGlobal" href="/chitiet/281120222314310">
              <img
                src="https://elearningnew.cybersoft.edu.vn/hinhanh/back-end.jpg"
                alt=""
              />
              <span className="stikerCard">Back end</span>
              <div className="cardBodyGlobal">
                <h6>Lập trình hiện đang là xu hướng trên toàn thế giới...</h6>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>
              </div>
              <div className="cardFooter">
                <div className="titleMaker">
                  <div className="imgCardFooter">
                    <img
                      src={require("../../../../src/assets/avatar2.bb9626e2.png")}
                      alt=""
                    />
                  </div>
                  <span className="ml-2 colorCardTitle">Elon Musk</span>
                </div>
                <div>
                  <p>
                    800.000<sup>đ</sup>
                  </p>
                  <p>
                    400.000<sup>đ</sup>
                    <i className="fas fa-tag iconTag" />
                  </p>
                </div>
              </div>
              <div className="subCard">
                <div className="subCardHead">
                  <img
                    src={require("../../../../src/assets/emoji.6d1b7051.png")}
                    alt=""
                  />
                  <span className="ml-1 colorCardTitle">Elun Musk Ricard</span>
                </div>
                <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                <p className="colorCardTitle">
                  Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương
                  trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa
                  học 100% thực hành cường độ cao theo dự án thực tế và kết nối
                  doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
                </p>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>

                <button className="btnGlobal btnSubCard">
                  <a href="/chitiet/1312">Xem chi tiết</a>
                </button>
              </div>
              <div className="cardSale">
                <span>Yêu thích</span>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-xl-3 cardGlobalRes mt-4">
            <a className="cardGlobal moveSubCard" href="/chitiet/45678981">
              <img
                src="https://elearningnew.cybersoft.edu.vn/hinhanh/node-js-bakery-3-co-anh.png"
                alt=""
              />
              <span className="stikerCard">Lập trình web</span>
              <div className="cardBodyGlobal">
                <h6>Lập trình hiện đang là xu hướng trên toàn thế giới...</h6>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>
              </div>
              <div className="cardFooter">
                <div className="titleMaker">
                  <div className="imgCardFooter">
                    <img
                      src={require("../../../../src/assets/avatar2.bb9626e2.png")}
                      alt=""
                    />
                  </div>
                  <span className="ml-2 colorCardTitle">Elon Musk</span>
                </div>
                <div>
                  <p>
                    800.000<sup>đ</sup>
                  </p>
                  <p>
                    400.000<sup>đ</sup>
                    <i className="fas fa-tag iconTag" />
                  </p>
                </div>
              </div>
              <div className="subCard">
                <div className="subCardHead">
                  <img
                    src={require("../../../../src/assets/emoji.6d1b7051.png")}
                    alt=""
                  />
                  <span className="ml-1 colorCardTitle">Elun Musk Ricard</span>
                </div>
                <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                <p className="colorCardTitle">
                  Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương
                  trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa
                  học 100% thực hành cường độ cao theo dự án thực tế và kết nối
                  doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
                </p>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock" />8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar" />4 tuần
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel" />
                    Tất cả
                  </span>
                </div>

                <button className="btnGlobal btnSubCard">
                  <a href="/chitiet/1312">Xem chi tiết</a>
                </button>
              </div>
              <div className="cardSale">
                <span>Yêu thích</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CoursesHome;
