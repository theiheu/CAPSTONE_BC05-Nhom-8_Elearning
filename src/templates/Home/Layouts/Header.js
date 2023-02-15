import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./Style/navbar.css";
import { getCateCoursesAction } from "../../../redux/actions/coursesActions";
import SignInModal from "../Pages/SignInModal/SignInModal";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { history } from "../../../App";
import { TOKEN, USER_SIGNIN } from "../../../utilities/Settings/config";

export default function Header({ toggle }) {
  const HeaderFixed = () => {
    window.onscroll = function () {
      const header = document.querySelector(".header");
      if (window.pageYOffset > 0) {
        header.classList.add("headerFixed");
      } else {
        header.classList.remove("headerFixed");
      }
    };
  };
  HeaderFixed();

  const { arrCateCourse } = useSelector(
    (state) => state.CategoryCoursesReducer
  );

  const { userSignIn } = useSelector((state) => state.UserManagermentReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCateCoursesAction);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation();

  const renderSignIn = () => {
    if (_.isEmpty(userSignIn)) {
      return (
        <div className="ml-auto flex">
          <button
            className="lg:text-md mr-2 w-max rounded-md p-3 text-xs text-main-500 ring-1 
            ring-main-500 transition-colors duration-150 hover:bg-main-500  sm:px-4 sm:py-2 xl:text-lg"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            {t("Đăng nhập")}
          </button>
          {showModal && (
            <SignInModal setShowModal={setShowModal} showModal={showModal} />
          )}
          <Link
            activeClassName="active"
            className="lg:text-md w-max rounded-md bg-main-500 p-3 text-center text-xs font-normal text-white  hover:shadow-xl sm:px-4 sm:py-2 xl:text-lg"
            to="/signup"
          >
            {t("Đăng ký")}
          </Link>
        </div>
      );
    } else {
      return (
        <div
          tabindex="0"
          className="group relative ml-auto inline-flex sm:mx-2"
        >
          <button
            id="user-menu"
            className=" lg:text-md relative w-max place-self-stretch rounded-md px-4 py-2 
            text-main-500 ring-1 ring-main-500 transition-colors duration-150 hover:bg-main-500  xl:text-lg"
          >
            {userSignIn?.taiKhoan}
          </button>

          <ul
            id="user-menu-dropdown"
            className=" lg:text-md absolute z-10 min-w-[250px] origin-top-right scale-0 transform rounded-lg border bg-white transition 
            duration-150 ease-in-out focus:scale-100 sm:group-hover:scale-100 xl:text-lg"
            style={{ right: 0, top: 55, padding: 10 }}
          >
            <li>
              <button
                className="block w-full rounded-md py-2 px-4 text-left text-black transition duration-200 hover:bg-main-500 "
                onClick={() => {
                  history.push("/profile");
                }}
              >
                Thông tin cá nhân
              </button>
            </li>
            <li>
              <button
                className="block w-full rounded-md py-2 px-4 text-left text-black transition duration-200 hover:bg-main-500 "
                onClick={() => {
                  localStorage.removeItem(USER_SIGNIN);
                  localStorage.removeItem(TOKEN);
                  window.location.replace("/");
                }}
              >
                Đăng xuất
              </button>
            </li>
            {userSignIn.maLoaiNguoiDung !== "GV" ? (
              ""
            ) : (
              <li>
                <button
                  className="block w-full rounded-md py-2 px-4 text-left text-black transition duration-200 hover:bg-main-500 "
                  onClick={() => {
                    history.push("/admin");
                  }}
                >
                  Admin
                </button>
              </li>
            )}
          </ul>
        </div>
      );
    }
  };

  const renderTabCateCourses = () => {
    return arrCateCourse?.map((cateCourses, index) => {
      return (
        <li key={index}>
          <NavLink
            activeClassName="active"
            className="sub-link-menu lg:text-md w-full; my-1 block rounded-md py-2 px-4 text-black transition duration-200 xl:text-lg"
            to={`/courses/${cateCourses.maDanhMuc}`}
          >
            {cateCourses.tenDanhMuc}
          </NavLink>
        </li>
      );
    });
  };

  return (
    // <div
    //   className="z-10 flex justify-between items-center w-full h-24
    // lg:fixed top-0 shadow-lg bg-white"
    // >
    //   <nav className="ml-3 sm:ml-5 flex justify-between items-center w-full bg-white text-black font-medium">
    //     <div className="lg:flex-none">
    //       <NavLink to="/">
    //         <h1 style={{ fontSize: 30 }}>CYBERSOFT LEARNING</h1>
    //       </NavLink>
    //     </div>

    //     <div className="lg:inline-flex hidden lg:flex-grow justify-end ml-auto">
    //       <NavLink
    //         activeClassName="active"
    //         exact={true}
    //         className="nav-links mx-1 xl:mx-2 my-4 px-4 p-4 lg:text-md xl:text-lg rounded-md font-medium text-black
    // hover:shadow-lg transition-colors duration-200"
    //         to="/"
    //       >
    //         {t("Trang chủ")}
    //       </NavLink>
    //       <div className="group inline-flex">
    //         <NavLink
    //           activeClassName="active"
    //           className="nav-links lg:mx-1 xl:mx-2 my-4 px-4 p-4 lg:text-md xl:text-lg rounded-md font-medium text-black
    // hover:shadow-lg transition-colors duration-200 group relative flex"
    //           to="/courses"
    //         >
    //           {t("Khoá học")}
    //           <svg
    //             className="w-6 h-6 inline"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M19 9l-7 7-7-7"
    //             />
    //           </svg>
    //         </NavLink>
    //         <ul
    //           className="dropdown-nav bg-white border rounded-md transform scale-0 group-hover:scale-100 absolute
    //         transition duration-150 ease-in-out origin-top min-w-32"
    //         >
    //           {renderTabCateCourses()}
    //         </ul>
    //       </div>
    //       <NavLink
    //         activeClassName="active"
    //         className="nav-links lg:mx-1 xl:mx-2 my-4 px-4 p-4 lg:text-md xl:text-lg rounded-md font-medium text-black
    // hover:shadow-lg transition-colors duration-200"
    //         to="/contact"
    //       >
    //         {t("Liên hệ")}
    //       </NavLink>
    //     </div>
    //     {renderSignIn()}
    //     <div className="px-4 cursor-pointer lg:hidden ml-4">
    //       <i
    //         className="fa fa-bars text-2xl text-main-500"
    //         aria-hidden="true"
    //         onClick={toggle}
    //       />
    //     </div>
    //   </nav>
    // </div>

    <section className="header">
      <div className="headerLeft">
        <a aria-current="page" className="textLogo active" href="/">
          <div className="logo">BC05-NHOM8</div>
        </a>
        <form>
          <input
            action="#"
            className="searchForm"
            type="text"
            placeholder="Tìm kiếm"
          />
        </form>
      </div>
      <div className="headerRight lg:hidden">
        <ul className="menuHeader">
          <li className="courseCate">
            <i className="fas fa-bars mr-1" />
            <span aria-current="page" className="active text-black">
              Danh mục
            </span>
            <ul className="courseCateList">
              <li>
                <a href="/courses/BackEnd">Lập trình Backend</a>
              </li>
              <li>
                <a href="/courses/Design">Thiết kế Web</a>
              </li>
              <li>
                <a href="/courses/DiDong">Lập trình di động</a>
              </li>
              <li>
                <a href="/courses/FrontEnd">Lập trình Front end</a>
              </li>
              <li>
                <a href="/courses/FullStack">Lập trình Full Stack</a>
              </li>
              <li>
                <a href="/courses/TuDuy">Tư duy lập trình</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/courses">Khóa học</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li className="eventHeader courseCate">
            <a href="/sukien">Sự kiện</a>
            <ul className="courseCateList">
              <li>
                <a href="/sukien/lastYear">Sự kiện Sale Cuối Năm</a>
              </li>
              <li>
                <a href="/sukien/Noel">Sự kiện Giáng sinh</a>
              </li>
              <li>
                <a href="/sukien/Noel">Sự kiện Noel</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/thongtin">Thông tin</a>
          </li>
        </ul>
      </div>
      <div className="showIconHeader">
        <button className="btnGlobal hidden lg:block">{renderSignIn()}</button>

        <div className="flex cursor-pointer items-center justify-center px-4 lg:hidden">
          <i
            className="fa fa-bars text-2xl text-main-500"
            aria-hidden="true"
            onClick={toggle}
          />
        </div>
      </div>
    </section>
  );
}
