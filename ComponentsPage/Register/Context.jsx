import React, { useState, useEffect, useReducer, useContext } from "react";
import { AvatarGenerator } from "random-avatar-generator";

export const AppContext = React.createContext();

export const RegisterProvider = ({ children, testProp }) => {
  const generator = new AvatarGenerator();
  const generateAvatar = () => {
    // Simply get a random avatar
    let avatar = generator.generateRandomAvatar();

    setRegisterData({ ...registerData, img: avatar });
  };
  const [test, setTest] = useState("Test");
  const [registerData, setRegisterData] = useState({
    img: generator.generateRandomAvatar(),
    name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const resetFormData = () => {
    setRegisterData({
      img: generator.generateRandomAvatar(),
      name: "",
      email: "",
      password: "",
      re_password: "",
    });
  };
  return (
    <AppContext.Provider
      value={{
        test,
        testProp,
        registerData,
        setRegisterData,
        generateAvatar,
        resetFormData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useRegisterContext = () => {
  return useContext(AppContext);
};
