import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./../Style/StylePages.css";
import { history } from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../../../../redux/actions/userManagermentAction";
import _ from "lodash";

export default function SignIn({ setShowModal }) {
  const dispatch = useDispatch();

  const { userSignIn } = useSelector((state) => state.UserManagermentReducer);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .min(6, "Minimum 6 charaters")
        .max(20, "Maximum 20 characters")
        .required("Không được để trống"),
      matKhau: Yup.string().required("Không được để trống!"),
    }),
    onSubmit: (values) => {
      dispatch(signInAction(values, setShowModal));
    },
  });

  const SignIn = () => {
    if (_.isEmpty(userSignIn)) {
      return (
        <div
          className="grid-flow-row gap-x-8 px-1 pt-5 lg:grid lg:px-5 "
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <div className="text-sm font-bold tracking-wide text-gray-700">
                  Tài khoản
                </div>
                <input
                  name="taiKhoan"
                  value={formik.values.taiKhoan}
                  onChange={formik.handleChange}
                  className="focus:outline-none w-full border-b border-gray-300 py-2 text-base focus:border-red-500 lg:text-lg"
                />

                {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                  <p className="text-red-600">{formik.errors.taiKhoan}</p>
                )}
              </div>
              <div className="passwordSignIn mt-4 lg:mt-8">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold tracking-wide text-gray-700">
                    Mật khẩu
                  </div>
                </div>
                <input
                  type="password"
                  name="matKhau"
                  value={formik.values.matKhau}
                  onChange={formik.handleChange}
                  className=" focus:outline-none w-full border-b border-gray-300 py-2 text-base focus:border-red-500 lg:text-lg"
                />
                {formik.errors.matKhau && formik.touched.matKhau && (
                  <p className="text-red-600">{formik.errors.matKhau}</p>
                )}
              </div>
              <div className="mt-5 lg:mt-10">
                <button
                  type="submit"
                  onClick={formik.handleSubmit}
                  className="font-display focus:outline-none focus:shadow-outline w-full rounded-full
                                    p-4 font-semibold tracking-wide text-gray-100
                                    shadow-lg"
                  style={{ backgroundColor: "#E96036" }}
                >
                  Đăng nhập
                </button>
              </div>
            </form>
            <div className="font-display mt-8 text-center text-sm text-gray-700">
              <div className="mb-2 lg:mb-5">
                <a
                  href="#!"
                  className="text-md cursor-pointer font-semibold"
                  style={{ color: "#E96036" }}
                >
                  Quên mật khẩu
                </a>
              </div>
              <div>
                Chưa có tài khoản ?{" "}
                <button
                  onClick={() => {
                    history.push("/signup");
                  }}
                  className="cursor-pointer font-semibold "
                  style={{ color: "#E96036" }}
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
          <p className="mt-4 mb-8 text-center text-sm text-gray-500 lg:my-8 lg:text-base "></p>
        </div>
      );
    } else {
      return history.replace("/");
    }
  };

  return <Fragment>{SignIn()}</Fragment>;
}
