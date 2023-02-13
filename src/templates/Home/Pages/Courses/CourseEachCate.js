import React, { Fragment, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { history } from "../../../../App";
import BreadCrumb from "../../../../components/Breadcrumbs/Breadcrumbs";
import { getCoursesEachCateActions } from "../../../../redux/actions/coursesActions";
import "./../Style/StyleCourses.css";

export default function CourseEachCate(props) {
  const { arrCourseEachCate } = useSelector((state) => state.CoursesReducer);

  const dispatch = useDispatch();
  const location = useLocation();

  const [loadMore, setLoadMore] = useState(8);

  const handleLoadMore = () => {
    setLoadMore(loadMore + 8);
  };

  useEffect(() => {
    let { cate } = props.match.params;
    dispatch(getCoursesEachCateActions(cate));
  }, [location.key]);

  const renderCourses = () => {
    return (
      <div className="body-font flex flex-col items-center text-gray-600">
        <div className="container mx-auto mb-8 py-8 px-3 sm:mb-0 sm:py-16 lg:mb-12">
          <div className="grid grid-cols-2 lg:-m-4 lg:grid-cols-4">
            {arrCourseEachCate?.slice(0, loadMore).map((course, index) => {
              return (
                <div
                  key={index}
                  className="courses-each-cate relative mx-2 rounded-md bg-white px-6 py-12 shadow-xl lg:mx-5 lg:mb-12 lg:rounded-3xl"
                >
                  <div className="absolute top-0 left-0"></div>
                  <p className="mb-4 w-fit rounded-md bg-indigo-100 py-2 px-3 text-center text-xs text-purple-700 lg:rounded-lg">
                    {course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                  </p>
                  <div className="text-center">
                    <LazyLoad height={200}>
                      <img
                        alt={course?.tenKhoaHoc}
                        className="mb-8 inline-block w-full rounded-lg object-cover object-center"
                        style={{
                          maxHeight: "150px",
                          minHeight: "150px",
                          border: "1px solid #eee",
                        }}
                        src={course?.hinhAnh}
                      />
                    </LazyLoad>
                    <h2 className="courses-each-cate-heading text-lg font-bold sm:text-3xl">
                      {course?.tenKhoaHoc}
                    </h2>
                    <p className="courses-each-cate-description text-sm leading-relaxed text-gray-500 sm:text-lg">
                      {course?.moTa?.length > 100 ? (
                        <span>{course?.moTa?.slice(0, 90)}...</span>
                      ) : (
                        <span>{course.moTa}</span>
                      )}
                    </p>
                    <div
                      onClick={() => {
                        history.push(`/courses/detail/${course.maKhoaHoc}`);
                      }}
                      className="mx-auto mt-4 w-fit cursor-pointer rounded-lg bg-white px-5 py-3  text-sm 
                        text-purple-700 ring-1 ring-purple-700 transition-colors hover:bg-purple-700 sm:text-base lg:font-semibold"
                    >
                      Chi tiết khoá học
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              handleLoadMore();
            }}
            className="mb-14 w-fit rounded-lg bg-purple-600 p-5 text-sm font-semibold text-white transition-colors hover:bg-purple-700 sm:text-base lg:mb-32"
          >
            Xem thêm
          </button>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="courses--header w-full">
        <div className="container px-5 py-8 lg:py-32">
          <p className="mb-5 hidden  lg:block">
            <BreadCrumb />
          </p>
          <h1 className="w-36 text-2xl uppercase lg:w-full lg:text-4xl">
            {arrCourseEachCate[0]?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
          </h1>
        </div>
      </div>

      <div>{renderCourses()}</div>
    </Fragment>
  );
}
