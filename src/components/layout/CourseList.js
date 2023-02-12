import React from "react";
import CourseItem from "./CourseItem";

const CourseList = (data) => {
  return (
    <div className="row">
      {data.coursesArr.map((item) => (
        <CourseItem data={item} />
      ))}
    </div>
  );
};

export default CourseList;
