import "./header.css";

const Header = () => {
  window.onscroll = function () {
    const header = document.querySelector(".header");
    if (window.pageYOffset > 0) {
      header.classList.add("headerFixed");
    } else {
      header.classList.remove("headerFixed");
    }
  };

  return (
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
      <div className="headerRight">
        <ul className="menuHeader">
          <li className="courseCate">
            <i className="fas fa-bars mr-1" />
            <a href="/trangchu" aria-current="page" className="active">
              Danh mục
            </a>
            <ul className="courseCateList">
              <li>
                <a href="/danhmuckhoahoc/BackEnd">Lập trình Backend</a>
              </li>
              <li>
                <a href="/danhmuckhoahoc/Design">Thiết kế Web</a>
              </li>
              <li>
                <a href="/danhmuckhoahoc/DiDong">Lập trình di động</a>
              </li>
              <li>
                <a href="/danhmuckhoahoc/FrontEnd">Lập trình Front end</a>
              </li>
              <li>
                <a href="/danhmuckhoahoc/FullStack">Lập trình Full Stack</a>
              </li>
              <li>
                <a href="/danhmuckhoahoc/TuDuy">Tư duy lập trình</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/khoahoc">Khóa học</a>
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
        <button className="btnGlobal">
          <a href="/login">Đăng nhập</a>
        </button>
        <div className="menuMobie">
          <i className="fas fa-sort-down iconMenuMobie" />
          <ul className="menuHeaderMobie">
            <li>
              <form>
                <input
                  action=""
                  className="searchFormMobile"
                  type="text"
                  placeholder="Tìm kiếm"
                />
              </form>
            </li>
            <li className="courseCateMobie">
              <a href="/trangchu" aria-current="page" className="active">
                Danh mục
              </a>
              <ul className="courseCateListMobie">
                <li>
                  <a href="/danhmuckhoahoc/BackEnd">Lập trình Backend</a>
                </li>
                <li>
                  <a href="/danhmuckhoahoc/Design">Thiết kế Web</a>
                </li>
                <li>
                  <a href="/danhmuckhoahoc/DiDong">Lập trình di động</a>
                </li>
                <li>
                  <a href="/danhmuckhoahoc/FrontEnd">Lập trình Front end</a>
                </li>
                <li>
                  <a href="/danhmuckhoahoc/FullStack">Lập trình Full Stack</a>
                </li>
                <li>
                  <a href="/danhmuckhoahoc/TuDuy">Tư duy lập trình</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/khoahoc">Khóa học</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li className="eventHeaderMobie courseCateMobie">
              <a href="/sukien">Sự kiện</a>
              <ul className="courseCateListMobie">
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
            <li>
              <a href="/trangchu" aria-current="page" className="active">
                Đăng xuất
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
