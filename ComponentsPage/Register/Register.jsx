import React, { useState } from "react";
import { RegisterProvider, useRegisterContext } from "./Context";
import RegisterTest from "./RegisterTest";
import { API } from "../../lib/axios/axios";
import AvatarWrapper from "./AvatarWrapper";
const FormStracture = [
  {
    fieldName: "Name",
    placeholder: "Enter your name",
    keyword: "name",
    type: "name",
  },
  {
    fieldName: "Email",
    placeholder: "Enter your e-mail",
    keyword: "email",
    type: "email",
  },
  {
    fieldName: "Password",
    placeholder: "Enter Password",
    keyword: "password",
    type: "password",
  },
  {
    fieldName: "Re-enter Password",
    placeholder: "Re-enter password",
    keyword: "re-password",
    type: "password",
  },
];

const Register = () => {
  const {
    registerData,
    setRegisterData,
    resetFormData,
    imgLoading,
    setImgLoading,
  } = useRegisterContext();

  const handleInputChange = (e, keyword) => {
    // console.log(e, keyword);
    if (keyword === "name") {
      setRegisterData({ ...registerData, name: e.target.value });
    }
    if (keyword === "email") {
      setRegisterData({ ...registerData, email: e.target.value });
    }
    if (keyword === "password") {
      setRegisterData({ ...registerData, password: e.target.value });
    }
    if (keyword === "re-password") {
      setRegisterData({ ...registerData, re_password: e.target.value });
    }
  };

  const getInputState = (keyword) => {
    if (keyword === "name") {
      return registerData.name;
    }
    if (keyword === "email") {
      return registerData.email;
    }
    if (keyword === "password") {
      return registerData.password;
    }
    if (keyword === "re-password") {
      return registerData.re_password;
    }
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(registerData);
      console.log(API);
      let data = await API.post("/api/auth/signup", registerData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" register-page">
        <div className=" container">
          <div className=" form-wrapper">
            <form
              className=" register-form"
              onSubmit={(e) => {
                handleFormSubmit(e);
              }}
            >
              <AvatarWrapper />

              {FormStracture.map((item, index) => {
                return (
                  <div className=" form-group row mb-4" key={index}>
                    <div className=" col-sm-3">
                      <label className=" form-label h4 mb-sm-0" htmlFor=" ">
                        {item.fieldName}
                      </label>
                    </div>
                    <div className=" col-sm-9 ">
                      <input
                        value={getInputState(item.keyword)}
                        type={item.type}
                        className=" form-control col-9"
                        placeholder={item.placeholder}
                        onChange={(e) => {
                          handleInputChange(e, item.keyword);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
              {/* <div className=" form-group row mb-4 justify-content-center align-items-center">
                <div className=" col-sm-3">
                  <label className=" form-label h3 mb-sm-0" htmlFor=" ">
                    Email
                  </label>
                </div>
                <div className=" col-sm-9">
                  <input
                    type="email"
                    className=" form-control col-9"
                    placeholder="Enter your e-mail"
                  />
                </div>
              </div>
              <div className=" form-group row mb-4 justify-content-center align-items-center">
                <div className=" col-sm-3">
                  <label className=" form-label h3 mb-sm-0" htmlFor=" ">
                    Password
                  </label>
                </div>
                <div className=" col-sm-9">
                  <input
                    type="password"
                    className=" form-control col-9"
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <div className=" form-group row mb-4 justify-content-center align-items-center">
                <div className=" col-sm-3">
                  <label className=" form-label h3 mb-sm-0" htmlFor=" ">
                    Re-enter Password
                  </label>
                </div>
                <div className=" col-sm-9">
                  <input
                    type="password"
                    className=" form-control col-9"
                    placeholder="Re-enter password"
                  />
                </div>
              </div> */}

              <div className=" w-100 d-flex justify-content-end align-items-end">
                <button
                  type="button"
                  className=" btn btn-danger me-3"
                  onClick={() => {
                    resetFormData();
                    setImgLoading(true);
                  }}
                >
                  Reset
                </button>
                <button type="submit" className=" btn btn-success btn-lg">
                  Register
                </button>
              </div>
            </form>
            <div className=" w-100 d-flex justify-content-center align-items-end flex-wrap gap-4">
              <button className=" btn btn-primary">Google</button>
              <button className=" btn btn-primary">Facebook</button>
              <button className=" btn btn-primary">Github</button>
            </div>
          </div>
          {/* <RegisterTest /> */}
        </div>
      </div>
    </>
  );
};

export default Register;
