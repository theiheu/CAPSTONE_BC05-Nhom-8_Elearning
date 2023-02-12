import React, { useEffect, useState } from "react";
import { courseServices } from "../../services/courseServices";
import CourseList from "../layout/CourseList";
import "./course.css";
import "./pagination.css";

export const Course = () => {
  const [coursesArr, setCoursesArr] = useState([]);
  useEffect(() => {
    courseServices
      .layDanhSachKhoaHoc("GP03")
      .then((res) => {
        setCoursesArr(res.data || []);
      })
      .catch((err) => {});
  }, []);

  return (
    <section>
      <div className="titleCourse">
        <h3>Khóa học</h3>
        <p>Bắt đầu hành trình nào!!!</p>
      </div>
      <div className="coursesContainer">
        <div className="row">
          <div className="col-md-2 col-sm-4 coursesBoxItem">
            <div className="coursesBox bgStyle1">
              <h6>Chương trình học</h6>
              <i className="fas fa-laptop" />
              <p>300</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 coursesBoxItem">
            <div className="coursesBox bgStyle2">
              <h6>Nhà sáng tạo</h6>
              <i className="fas fa-camera" />
              <p>10000</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 coursesBoxItem">
            <div className="coursesBox bgStyle3">
              <h6>Nhà thiết kế</h6>
              <i className="fas fa-briefcase" />
              <p>400</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 coursesBoxItem">
            <div className="coursesBox bgStyle4">
              <h6>Bài giảng</h6>
              <i className="fas fa-book" />
              <p>3000</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 coursesBoxItem">
            <div className="coursesBox bgStyle5">
              <h6>Video</h6>
              <i className="fas fa-play-circle" />
              <p>40000</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 coursesBoxItem">
            <div className="coursesBox bgStyle6">
              <h6>Lĩnh vực</h6>
              <i className="fas fa-dice-d20" />
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="courseListPage">
        <h6>
          <i className="fas fa-bookmark" />
          Danh sách khóa học
        </h6>
        <CourseList coursesArr={coursesArr} />
      </div>
      <ul className="paginationPages">
        <li className="page-item disabled">
          <a
            href={true}
            className="pageLinkPages"
            tabIndex={-1}
            role="button"
            aria-disabled="true"
            aria-label="Previous page"
            rel="prev"
          >
            &lt; Trước
          </a>
        </li>
        <li className="page-item active">
          <a
            href={true}
            rel="canonical"
            role="button"
            className="pageLinkPages"
            tabIndex={-1}
            aria-label="Page 1 is your current page"
            aria-current="page"
          >
            1
          </a>
        </li>
        <li className="page-item">
          <a
            href={true}
            rel="next"
            role="button"
            className="pageLinkPages"
            tabIndex={0}
            aria-label="Page 2"
          >
            2
          </a>
        </li>
        <li className="page-item">
          <a
            href={true}
            role="button"
            className="pageLinkPages"
            tabIndex={0}
            aria-label="Page 3"
          >
            3
          </a>
        </li>
        <li className="page-item">
          <a
            href={true}
            role="button"
            className="pageLinkPages"
            tabIndex={0}
            aria-label="Page 4"
          >
            4
          </a>
        </li>
        <li className="page-item">
          <a
            href={true}
            className="pageLinkPages"
            tabIndex={0}
            role="button"
            aria-disabled="false"
            aria-label="Next page"
            rel="next"
          >
            Sau &gt;
          </a>
        </li>
      </ul>
    </section>
  );
};
