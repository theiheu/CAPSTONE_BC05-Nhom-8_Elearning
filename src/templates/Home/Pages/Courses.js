import React, { Fragment, useEffect } from "react";
import BreadCrumb from "../../../components/Breadcrumbs/Breadcrumbs";
import Lazyload from "react-lazyload";
import { history } from "./../../../App";
import { useSelector, useDispatch } from "react-redux";
import { Tabs } from "antd";
import {
  getCateCoursesAction,
  getCoursesAction,
} from "../../../redux/actions/coursesActions";
import "./Style/StyleCourses.css";
import "./../Components/Home/styles/tabCoursesHome.css";

export default function Courses() {
  const { arrCateCourse } = useSelector(
    (state) => state.CategoryCoursesReducer
  );

  const { arrCourses } = useSelector((state) => state.CoursesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCateCoursesAction);
    dispatch(getCoursesAction);
  }, []);

  const { TabPane } = Tabs;

  const renderCourses = () => {
    return arrCateCourse?.map((cateCourses, index) => {
      let courseByCate = arrCourses.filter(
        (course) =>
          course.danhMucKhoaHoc?.maDanhMucKhoahoc === cateCourses.maDanhMuc
      );
      return (
        <TabPane tab={cateCourses.tenDanhMuc} key={index}>
          <div className="body-font mx-5 text-gray-600 ">
            <div className="container mx-auto mb-8 py-8 px-3 sm:mb-0 sm:py-16 lg:mb-12">
              <div className="-m-4 grid grid-cols-2 lg:grid-cols-4">
                {courseByCate.slice(0, 8).map((course, index) => {
                  return (
                    <div
                      key={index}
                      className="courses_tab_home relative mx-2 mb-3 rounded-xl bg-white px-3 py-5 shadow-xl sm:mx-5 sm:px-6 sm:py-12 lg:mb-12 lg:rounded-3xl"
                    >
                      <div className="absolute top-0 left-0"></div>
                      <p className="mb-4 w-fit rounded-md bg-indigo-100 py-2 px-3 text-center text-xs text-purple-700 lg:rounded-lg">
                        {course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                      </p>
                      <div className="text-center ">
                        <Lazyload height={200}>
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
                        </Lazyload>
                        <h2 className="courses_tab_home_heading  text-lg font-bold sm:text-3xl">
                          {course?.tenKhoaHoc}
                        </h2>
                        <p className="course_tab_home_description text-sm leading-relaxed text-gray-500 sm:text-lg">
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
                          Chi tiết lớp học
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  history.push(`/courses/${cateCourses.maDanhMuc}`);
                }}
                className="mb-12 rounded-lg bg-purple-600 p-3 text-xs font-semibold text-white transition-colors hover:bg-purple-700 sm:mb-32 sm:p-5 sm:text-base"
              >
                Xem thêm lớp học
              </button>
            </div>
          </div>
        </TabPane>
      );
    });
  };

  return (
    <Fragment>
      <div className="courses--header w-full">
        <div className="container px-5 py-8 lg:py-32">
          <p className="mb-5 hidden lg:block">
            <BreadCrumb />
          </p>
          <h1 className="text-2xl uppercase lg:text-4xl">Khoá học</h1>
        </div>
      </div>
      <div className="courses--body mt-14 lg:mt-24">
        <div className="container">
          <Tabs
            centered
            size={"large"}
            type="card"
            tabBarGutter={30}
            animated={false}
          >
            {renderCourses()}
          </Tabs>
        </div>
      </div>
    </Fragment>
  );
}
