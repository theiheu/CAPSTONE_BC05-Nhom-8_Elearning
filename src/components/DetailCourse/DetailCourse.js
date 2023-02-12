import React, { useEffect, useState } from "react";
import { a, useParams } from "react-router-dom";
import { courseServices } from "../../services/courseServices";
import "../HomePage/homePage.css";
import "./detailCourse.css";

export const DetailCourse = () => {
  const { idCourse } = useParams();
  const [courseDetailArr, setCoursesDetailArr] = useState([]);

  useEffect(() => {
    courseServices
      .chiTietKhoaHoc(idCourse)
      .then((res) => {
        setCoursesDetailArr(res.data || []);
      })
      .catch((err) => {});
  }, [idCourse]);

  let { tenKhoaHoc, hinhAnh } = courseDetailArr;

  return (
    <section className="detailCoures">
      <div className="titleCourse">
        <h3>Thông tin khóa học</h3>
        <p>Tiến lên và không chần chừ !!!</p>
      </div>
      <div className="detailCouresContent">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <h4 className="titleDetailCourse">{tenKhoaHoc}</h4>
            <div className=" row headDetailCourse">
              <div className="col-lg-4">
                <div className="detailCourseIntro">
                  <div>
                    <img
                      src={require("../../assets/instrutor5.2e4bd1e6.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="instrutorTitle">
                    <p>Giảng viên</p>
                    <p>Robert Ngô Ngọc</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="detailCourseIntro">
                  <div className>
                    <i className="fas fa-graduation-cap" />
                  </div>
                  <div className="instrutorTitle">
                    <p>Lĩnh vực</p>
                    <p>Lập trình FullStack</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="detailCourseIntro">
                  <div className="reviewDetail">
                    <span>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                      3.5
                    </span>
                    <p>100 đánh giá</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="textDiscripts">
              React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử
              dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện
              đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ
              cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt
              lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái
              niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và
              bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan
              trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do
              tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí
              không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một
              số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công
              nghệ quan trọng với tư cách là một nhà phát triển web và trong
              khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan
              trọng!
            </p>
            <div className="boxCourseLearn">
              <h6>Những gì bạn sẽ học</h6>
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      <a href="true">
                        Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân
                        thiện với người dùng và phản ứng nhanh
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      <a href="true">
                        Đăng ký công việc được trả lương cao hoặc làm freelancer
                        trong một trong những lĩnh vực được yêu cầu nhiều nhất
                        mà bạn có thể tìm thấy trong web dev ngay bây giờ
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      <a href="true">
                        Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận
                        dụng sức mạnh của JavaScript một cách dễ dàng
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      <a href="true">
                        Tìm hiểu tất cả về React Hooks và React Components
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      <a href="true">
                        Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp
                        Javascript NPM, Webpack, Babel và ES6 / ES2015
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      <a href="true">
                        Nhận ra sức mạnh của việc xây dựng các thành phần có thể
                        kết hợp
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      <a href="true">
                        Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi
                        người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      <a href="true">
                        Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các
                        ứng dụng Redux
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="courseContent">
              <h6>Nội dung khóa học</h6>
              <div className="courseDetailItem">
                <div className="courseDetailContent">
                  <div className="sectionCourse">
                    <span>Mục 1: Giới thiệu</span>
                    <button className="btnGlobal btnPreview">Xem trước</button>
                  </div>
                  <p>Bài học</p>
                  <div className="lessonContainer">
                    <div className="lessonContent mt-1">
                      <span>
                        <i className="fas fa-play-circle" />
                        Các khái niệm về React Component
                      </span>
                      <span>
                        <i className="fas fa-clock" />
                        14:35
                      </span>
                    </div>
                    <div className="lessonContent mt-1">
                      <span>
                        <i className="fas fa-play-circle" />
                        Thiết lập môi trường cho Windows
                      </span>
                      <span>
                        <i className="fas fa-clock" />
                        14:35
                      </span>
                    </div>
                    <div className="lessonContent mt-1">
                      <span>
                        <i className="fas fa-play-circle" />
                        Tạo ứng dụng React - React-Scripts
                      </span>
                      <span>
                        <i className="fas fa-clock" />
                        14:35
                      </span>
                    </div>
                    <div className="lessonContent mt-1">
                      <span>
                        <i className="fas fa-play-circle" />
                        Ghi chú nhanh về dấu ngoặc kép cho string interpolation
                      </span>
                      <span>
                        <i className="fas fa-clock" />
                        14:35
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="courseDetailItem">
                <div className="courseDetailContent">
                  <div className="sectionCourse">
                    <span>Mục 2: Kiến thức căn bản</span>
                    <button className="btnGlobal btnPreview">Xem trước</button>
                  </div>
                  <p>Bài học</p>
                  <div className="lessonContainer">
                    <div className="lessonContent mt-1">
                      <span>
                        <i className="fas fa-play-circle" />
                        Trang chủ và thành phần thư mục
                      </span>
                      <span>
                        <i className="fas fa-clock" />
                        14:35
                      </span>
                    </div>
                    <div className="lessonContent mt-1">
                      <span>
                        <i className="fas fa-play-circle" />
                        Hướng dẫn khóa học + Liên kết Github
                      </span>
                      <span>
                        <i className="fas fa-clock" />
                        14:35
                      </span>
                    </div>
                    <div className="lessonContent mt-1">
                      <span>
                        <i className="fas fa-play-circle" />
                        Trang chủ thương mại điện tử + thiết lập SASS
                      </span>
                      <span>
                        <i className="fas fa-clock" />
                        14:35
                      </span>
                    </div>
                    <div className="lessonContent mt-1">
                      <span>
                        <i className="fas fa-play-circle" />
                        Tệp CSS và SCSS
                      </span>
                      <span>
                        <i className="fas fa-clock" />
                        14:35
                      </span>
                    </div>
                    <div className="lessonContent mt-1">
                      <span>
                        <i className="fas fa-play-circle" />
                        React 17: Cập nhật các gói + Phiên bản React mới nhất
                      </span>
                      <span>
                        <i className="fas fa-clock" />
                        14:35
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="courseDetailItem">
                <div className="courseDetailContent">
                  <div className="sectionCourse">
                    <span>Mục 3: Kiến thức chuyên sâu</span>
                    <button className="btnGlobal btnPreview">Xem trước</button>
                  </div>
                  <p>Bài học</p>
                  <div className="lessonContainer">
                    <div className="lessonContent mt-1">
                      <span>
                        <i className="fas fa-play-circle" />
                        connect() and mapStateToProps
                      </span>
                      <span>
                        <i className="fas fa-clock" />
                        14:35
                      </span>
                    </div>
                    <div className="lessonContent mt-1">
                      <span>
                        <i className="fas fa-play-circle" />
                        Trạng thái thư mục vào Redux
                      </span>
                      <span>
                        <i className="fas fa-clock" />
                        14:35
                      </span>
                    </div>
                    <div className="lessonContent mt-1">
                      <span>
                        <i className="fas fa-play-circle" />
                        Thành phần Tổng quan về Bộ sưu tập
                      </span>
                      <span>
                        <i className="fas fa-clock" />
                        14:35
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="sideBarCourseDetail">
              <img src={hinhAnh} alt="" />
              <div className="coursePrice">
                <p>
                  <i className="fas fa-bolt" />
                  500.000<sup>đ</sup>
                </p>
              </div>
              <button className="btnGlobal btnPreview">Đăng ký</button>
              <div className="sideBarDetailContent">
                <ul>
                  <li>
                    <p>
                      Ghi danh:<span> 10 học viên</span>
                    </p>
                    <i className="fas fa-user-graduate " />
                  </li>
                  <li>
                    <p>
                      Thời gian: <span> 18 giờ</span>
                    </p>
                    <i className="far fa-clock far fa-calendar-alt" />
                  </li>
                  <li>
                    <p>
                      Bài học:<span> 10</span>
                    </p>
                    <i className="fas fa-book" />
                  </li>
                  <li>
                    <p>
                      Video:<span> 14</span>
                    </p>
                    <i className="fas fa-photo-video" />
                  </li>
                  <li>
                    <p>
                      Trình độ:<span> Người mới bắt đầu</span>
                    </p>
                    <i className="fas fa-database" />
                  </li>
                </ul>
                <form action className="formCoupon">
                  <input type="text" placeholder="Nhập mã" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="coursesRelated">
        <h6>
          <p>Khóa học tham khảo</p>
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
                      src={require("../../assets/emoji.6d1b7051.png")}
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
                    //   src={require("../../assets/emoji.6d1b7051.png")}
                    src={require("../../assets/emoji.6d1b7051.png")}
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
                      //   src={require("../../../src/assets/avatar2.bb9626e2.png")}
                      src={require("../../assets/emoji.6d1b7051.png")}
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
                    //   src={require("../../assets/emoji.6d1b7051.png")}
                    src={require("../../assets/emoji.6d1b7051.png")}
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
                      //   src={require("../../../src/assets/avatar2.bb9626e2.png")}
                      src={require("../../assets/emoji.6d1b7051.png")}
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
                    //   src={require("../../assets/emoji.6d1b7051.png")}
                    src={require("../../assets/emoji.6d1b7051.png")}
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
                      src={require("../../assets/emoji.6d1b7051.png")}
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
                    src={require("../../assets/emoji.6d1b7051.png")}
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
    </section>
  );
};
