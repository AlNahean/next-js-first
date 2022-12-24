import React, { useLayoutEffect, useRef, useState } from "react";
import { AvatarGenerator } from "random-avatar-generator";
import { useRegisterContext } from "./Context";

const AvatarWrapper = () => {
  const imgRef = useRef(null);
  const generator = new AvatarGenerator();
  const {
    registerData,
    setRegisterData,
    generateAvatar,
    imgLoading,
    setImgLoading,
  } = useRegisterContext();
  useLayoutEffect(() => {
    // imgRef.current?.onLoad(() => {
    //   console.log("load");
    // });

    setTimeout(() => {
      setImgLoading(false);
    }, 3000);
    return () => {};
  }, []);

  const onImgLoad = () => {
    console.log("load");
    setImgLoading(false);
  };

  return (
    <>
      <div className=" d-flex w-100 justify-content-center align-items-center flex-column mb-3 mb-md-4">
        <img
          src={registerData.img}
          ref={imgRef}
          //   src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="avatar"
          className="person-avatar-lg mb-2"
          onLoad={onImgLoad}
        />

        {imgLoading ? (
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </button>
        ) : (
          <div
            className=" btn btn-primary"
            onClick={() => {
              generateAvatar();
              setImgLoading(true);
            }}
          >
            Randomize
          </div>
        )}
      </div>
    </>
  );
};

export default AvatarWrapper;
