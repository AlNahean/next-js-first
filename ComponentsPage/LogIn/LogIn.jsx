import React, { useState } from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const FormStracture = [
  {
    fieldName: "Email",
    placeholder: "Enter your email",
    keyword: "email",
    type: "email",
  },
  {
    fieldName: "Password",
    placeholder: "Enter your password",
    keyword: "password",
    type: "password",
  },
];
const LogIn = () => {
  const [logInData, setLogInData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleInputChange = (e, keyword) => {
    // console.log(e, keyword);

    if (keyword === "email") {
      setLogInData({ ...logInData, email: e.target.value });
    }
    if (keyword === "password") {
      setLogInData({ ...logInData, password: e.target.value });
    }
  };

  const getInputState = (keyword) => {
    if (keyword === "email") {
      return logInData.email;
    }
    if (keyword === "password") {
      return logInData.password;
    }
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(logInData);
      const status = await signIn("credentials", {
        redirect: false,
        email: logInData.email,
        password: logInData.password,
        callbackUrl: "/test",
      });

      if (status.ok) router.push(status.url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" login-page">
      <div className=" container ">
        <div className="w-100 d-flex justify-content-center">
          <div className=" form-wrapper w-100">
            <form
              className=" login-form mt-4"
              onSubmit={(e) => {
                handleFormSubmit(e);
              }}
            >
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

              <div className=" d-flex justify-content-end">
                <button type="submit" className=" btn btn-success btn-lg">
                  Log In
                </button>
              </div>
            </form>

            <div className=" d-flex justify-content-center mt-4 mb-4">
              <div
                className=" btn btn-primary me-2"
                onClick={() => {
                  signIn("google");
                }}
              >
                Google
              </div>
              <div className=" btn btn-primary ms-2 me-2">facebook</div>
              <div className=" btn btn-primary ms-2">Github</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
