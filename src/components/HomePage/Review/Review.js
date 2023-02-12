import React from "react";

const Review = () => {
  return (
    <div className="review mt-5">
      <div className="reviewStudent">
        <div className="triangleTopRight" />
        <div className="smallBox smallboxLeftTop" />
        <div className="smallBox smallboxRightBottom" />
        <div className="smallBox smallboxRightTop" />
        <div className="smallBox smallboxLeftBottom" />
        <div className="row">
          <div className="col-md-6">
            <div className="reviewImg">
              <div className="bgStudentReview" />
              <img
                src={require("../../../../src/assets/avatarReview.2f5a1f3c.png")}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 quoteRight">
            <blockquote className="textQoute">
              <q>
                Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
                trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
                được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên
                sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp
                dẫn
              </q>
            </blockquote>
            <p>Nhi Dev</p>
            <span>Học viên xuất sắc</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
