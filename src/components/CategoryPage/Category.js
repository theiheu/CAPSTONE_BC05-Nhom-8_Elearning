import React, { useEffect, useState } from "react";
import "../Course/course.css";
import "./category.css";
import "../HomePage/homePage.css";
import { courseServices } from "../../services/courseServices";
import { useParams } from "react-router-dom";
import CourseList from "../layout/CourseList";

export const Category = () => {
  const { maDanhMuc } = useParams();

  const [coursesArr, setCoursesArr] = useState([]);
  useEffect(() => {
    courseServices
      .layKhoaHocTheoDanhMuc("GP01", maDanhMuc)
      .then((res) => {
        setCoursesArr(res.data || []);
      })
      .catch((err) => {});
  }, [maDanhMuc]);

  return (
    <section className={"category"}>
      <div className="titleCourse">
        <h3>Khóa học theo danh mục</h3>
        <p>Hãy chọn khóa học mong muốn !!!</p>
      </div>
      <div className="listCourseCategory">
        <div className="courseCateName">
          <btn className="courseCategoryBtn">
            <i className="fas fa-desktop" />
            <span className="ml-2 listCourseTitle">
              {coursesArr[0]?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
            </span>
          </btn>
        </div>
        <div className="mt-3">
          <CourseList coursesArr={coursesArr} />
        </div>
      </div>
    </section>
  );
};
