import React, { Fragment, useEffect } from "react";
import "./../Components/Home/styles/tabCoursesHome.css";
import LazyLoad from "react-lazyload";
import { history } from "../../../App";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RatingsDetailsCourse from "../Components/Home/Ratings/ratingsDetailsCourse";
import {
  getCoursesAction,
  getDetailsCoursesAction,
  getCateCoursesAction,
} from "../../../redux/actions/coursesActions";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

export default function DetailsCourse(props) {
  const { courseDetail } = useSelector((state) => state.CoursesReducer);

  const { arrCourses } = useSelector((state) => state.CoursesReducer);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    let { id } = props.match.params;
    //get detail url
    dispatch(getDetailsCoursesAction(id));
    dispatch(getCateCoursesAction);
    dispatch(getCoursesAction);
  }, [location.key]);

  const renderSimilarCourse = () => {
    let similarCourses = arrCourses.filter(
      (course) =>
        course.danhMucKhoaHoc?.maDanhMucKhoahoc ===
        courseDetail.danhMucKhoaHoc?.maDanhMucKhoahoc
    );

    return similarCourses
      ?.filter((course) => course.tenKhoaHoc !== courseDetail.tenKhoaHoc)
      .slice(0, 8)
      .map((course, index) => {
        return (
          <div
            key={index}
            className="courses_tab_home relative mx-5 rounded-3xl bg-white px-3 py-6 shadow-xl lg:mb-12 lg:px-6 lg:py-12"
          >
            <div className="absolute top-0 left-0"></div>
            <p className="mb-8 w-fit rounded-lg bg-indigo-100 py-2 px-3 text-center text-xs text-purple-700">
              {course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
            </p>
            <div className="text-center">
              <LazyLoad height={200}>
                <img
                  alt={course?.tenKhoaHoc}
                  className="mb-8 inline-block w-full rounded-lg object-cover object-center "
                  style={{
                    maxHeight: "150px",
                    minHeight: "150px",
                    border: "1px solid #eee",
                  }}
                  src={course?.hinhAnh}
                />
              </LazyLoad>
              <h2 className="courses_tab_home_heading text-xl font-bold lg:text-3xl">
                {course?.tenKhoaHoc}
              </h2>
              <p className="course_tab_home_description text-md leading-relaxed text-gray-500 lg:text-lg">
                {course?.moTa?.length > 100 ? (
                  <span>{course?.moTa?.slice(0, 90)}...</span>
                ) : (
                  <span>{course.luotXem}</span>
                )}
              </p>
              <button
                onClick={() => {
                  history.push(`/courses/detail/${course.maKhoaHoc}`);
                }}
                className="text-md mx-auto mt-4 w-fit cursor-pointer rounded-lg bg-white px-5
                  py-3 text-purple-700 ring-1 ring-purple-700 transition-colors hover:bg-purple-700 lg:text-base lg:font-semibold"
              >
                Chi tiết lớp học
              </button>
            </div>
          </div>
        );
      });
  };

  return (
    <Fragment>
      <div className="container mt-4 overflow-hidden lg:mt-40">
        <div className="flex flex-col items-center text-center">
          <p className="mb-12">
            <Breadcrumbs />
          </p>
          <p
            className=" w-fit rounded-md bg-indigo-100 py-2 px-3 text-sm lg:text-lg"
            style={{ color: "#7C3AED" }}
          >
            {courseDetail?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
          </p>
          <h1 className="mt-0 text-2xl font-bold lg:mt-6 lg:text-5xl">
            {courseDetail.tenKhoaHoc}
          </h1>
          <img src={courseDetail?.hinhAnh} />
        </div>
        {/* <VideoCoursesDetail /> */}

        <div className=" mx-3 mt-8 grid gap-4 lg:mt-24 lg:grid-flow-col lg:grid-cols-12">
          <div className="img_collegeLevel_home col-span-12 lg:col-span-9">
            <h2 className="font-body mb-3 text-2xl font-bold leading-tight lg:mb-10 lg:text-5xl">
              Chi tiết khoá học
            </h2>
            <p className="text-md text-justify lg:pr-12 lg:text-xl">
              {courseDetail.moTa}
            </p>
          </div>
          <div className="sticky top-10 col-span-12 row-span-2 grid grid-flow-row rounded-lg bg-white p-5 shadow-xl lg:col-span-3">
            <div className="grid-rows-9 grid grid-flow-col grid-cols-6">
              <div className="text-md col-span-3 flex flex-col items-start justify-between text-gray-500 lg:gap-4 lg:text-lg lg:font-semibold">
                <p>Giá</p>
                <p>Giảng viên</p>
                <p>Đánh giá</p>
                <p>Lượt xem</p>
                <p>Chứng chỉ</p>
                <p>Số lượng học viên</p>
              </div>
              <div className="text-md col-span-3 flex  flex-col items-end justify-between text-right text-black lg:gap-4 lg:text-lg lg:font-semibold">
                <p className=" text-red-500">Miễn phí</p>
                <p className="text-black underline">
                  {courseDetail?.nguoiTao?.hoTen}
                </p>
                <div
                  className="block"
                  //  style={{padding: "5px 0 15px 0"}}
                >
                  <RatingsDetailsCourse />
                </div>
                <p>{courseDetail.luotXem}</p>
                <p>Có</p>
                <p>{courseDetail.soLuongHocVien}</p>
              </div>
            </div>
            <NavLink
              to={`/checkout/${courseDetail.maKhoaHoc}`}
              className="text-base  font-semibold text-white"
            >
              <div className="text-md w-full rounded-lg bg-purple-600 p-3 text-center transition-colors hover:bg-purple-700 lg:mt-5 lg:p-5 lg:text-base">
                Ghi danh
              </div>
            </NavLink>
          </div>
        </div>
        <div className="related-course mx-3">
          <h2 className="mt-14 mb-10 text-2xl font-bold leading-tight lg:text-5xl">
            Các khoá học liên quan
          </h2>
          <div className="-m-4 grid grid-cols-2 lg:grid-cols-4">
            {renderSimilarCourse()}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
