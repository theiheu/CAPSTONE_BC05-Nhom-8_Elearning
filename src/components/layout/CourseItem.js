import React from "react";

const CourseItem = (item) => {
  let { tenKhoaHoc, maKhoaHoc, moTa, hinhAnh, danhMucKhoaHoc, soLuongHocVien } =
    item.data;

  //   // {
  //     "maKhoaHoc": "DotNET",
  //     "biDanh": "-net",
  //     "tenKhoaHoc": ".NET",
  //     "moTa": "DotNET23",
  //     "luotXem": 100,
  //     "hinhAnh": "https://elearningnew.cybersoft.edu.vn/hinhanh/-net_gp03.jpeg",
  //     "maNhom": "gp03",
  //     "ngayTao": "09/11/2022",
  //     "soLuongHocVien": 0,
  //     "nguoiTao": {
  //         "taiKhoan": "admin",
  //         "hoTen": "NguyenDucHuy123",
  //         "maLoaiNguoiDung": "GV",
  //         "tenLoaiNguoiDung": "Giáo vụ"
  //     },
  //     "danhMucKhoaHoc": {
  //         "maDanhMucKhoahoc": "FullStack",
  //         "tenDanhMucKhoaHoc": "Lập trình Full Stack"
  //     }
  // }

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 cardGlobalRes cardEffect mt-4 ">
      <a
        className="cardGloba shadow-gray-500/10l flex flex-col rounded-2xl shadow-lg"
        href={`/chitiet/${maKhoaHoc}`}
      >
        <img src={hinhAnh} alt="" />
        <span className="stikerCard">{danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
        <div className="cardBodyGlobal">
          <h6 className>{tenKhoaHoc}</h6>
          <div className="titleMaker">
            <div className="imgCardFooter">
              <img
                className
                src={require("../../assets/avatar2.bb9626e2.png").default}
                alt=""
              />
            </div>
            <span className="colorCardTitle ml-2">Elon Musk</span>
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
            <i className="fas fa-star textStar mr-1" />
            <span className="textStar">4.9</span>
            <span className="colorCardTitle">({soLuongHocVien})</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CourseItem;
