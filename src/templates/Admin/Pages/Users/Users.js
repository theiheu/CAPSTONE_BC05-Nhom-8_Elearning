import React, { Fragment } from "react";
import "./../../style/StyleAdmin.css";
import { SearchIcon } from "@heroicons/react/outline";
import { Button, Input, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AddNewUsers from "./addNewUser";
import {
  deleteUserAction,
  getUserListAction,
} from "../../../../redux/actions/userManagermentAction";

export default function User() {
  const { userList } = useSelector((state) => state.UserManagermentReducer);
  const [showForm, setShowForm] = useState(false);
  const [capNhat, setCapNhat] = useState({ capNhat: [] });
  const [typeAction, setTypeAction] = useState("update");
  const handleCloseForm = () => setShowForm(false);
  const dispatch = useDispatch();

  const { Search } = Input;

  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => {
        let emailA = a.email.toLowerCase().trim();
        let emailB = b.email.toLowerCase().trim();
        if (emailA > emailB) {
          return 1;
        }
        return -1;
      },

      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Điện thoại",
      dataIndex: "soDt",
      width: "15%",
    },
    {
      title: "Mã người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      // sorter: (a, b) => {
      //   let GV = a.maLoaiNguoiDung.toLowerCase().trim();
      //   let HV = b.maLoaiNguoiDung.toLowerCase().trim();
      //   if (GV > HV) {
      //     return 1;
      //   }
      //   return -1;
      // },
      width: "15%",
    },
    {
      title: "Lựa chọn",
      dataIndex: "taiKhoan",
      render: (text, user) => {
        return (
          <Fragment>
            <span
              className="mr-2 text-base"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setTypeAction("update");
                setCapNhat(user);
                setShowForm(true);
              }}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </span>

            <span
              key={2}
              className=" ml-3 cursor-pointer bg-white"
              onClick={() => {
                if (
                  window.confirm("Chắc chắn xóa user " + user.taiKhoan + " ?")
                ) {
                  dispatch(deleteUserAction(user.taiKhoan));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>
          </Fragment>
        );
      },
      width: "10%",
    },
  ];

  const data = userList;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value) => {
    dispatch(getUserListAction(value));
  };

  return (
    <Fragment>
      <div className="py-12">
        <div className="mx-auto flex max-w-7xl flex-row items-center justify-between px-4 sm:px-6 md:px-8 xl:px-0">
          <div>
            <h3 className="text-4xl">Quản lý người dùng</h3>
            <Button
              type="primary"
              style={{ width: 150 }}
              className="mb-4"
              onClick={() => {
                setTypeAction("insert");
                setShowForm(true);
              }}
            >
              Thêm người dùng
            </Button>
          </div>
          <div className="inline-flex  items-center">
            <Search
              placeholder="Nhập từ khoá ..."
              onSearch={onSearch}
              enterButton="Tìm kiếm"
              size="large"
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 xl:px-0">
          <div className="py-4">
            <Table
              columns={columns}
              dataSource={data}
              enterButton={<SearchIcon />}
              onChange={onChange}
              rowKey={"taiKhoan"}
            />
            <AddNewUsers
              show={showForm}
              close={handleCloseForm}
              capNhat={capNhat}
              type={typeAction}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
