import React from "react";
import Register from "../ComponentsPage/Register/Register";
import { RegisterProvider } from "../ComponentsPage/Register/Context";
import { AvatarGenerator } from "random-avatar-generator";

const register = ({ generatedAvatar }) => {
  return (
    <>
      <RegisterProvider testProp="testProp" generatedAvatar={generatedAvatar}>
        <Register />
      </RegisterProvider>
    </>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const generator = new AvatarGenerator();
  return {
    props: {
      generatedAvatar: await generator.generateRandomAvatar(),
    },
  };
};

export default register;
