import React from "react";
import { useRegisterContext } from "./Context";
import { useGlobalContext } from "../../Context/GlobalContext";

const RegisterTest = () => {
  const { test, testProp } = useRegisterContext();
  const { globalTest } = useGlobalContext();
  return (
    <div>
      {testProp} <h1>{globalTest}</h1>
    </div>
  );
};

export default RegisterTest;
