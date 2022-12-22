import React from "react";
import Register from "../ComponentsPage/Register/Register";
import { RegisterProvider } from "../ComponentsPage/Register/Context";

const register = () => {
  return (
    <>
      <RegisterProvider testProp="testProp">
        <Register />
      </RegisterProvider>
    </>
  );
};

export default register;
