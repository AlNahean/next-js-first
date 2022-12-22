import React, { useLayoutEffect, useState } from "react";

import { useSession, signIn, signOut } from "next-auth/react";

const index = ({ data }) => {
  const { data: session, status } = useSession();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // useLayoutEffect(() => {
  //   console.log(data);

  //   return () => {

  //   };
  // }, [])
  console.log(session, "session", status);
  if (!session) {
    return <div>Not Authenticated</div>;
  }

  return (
    <div className="test-page bg-dark text-white ">
      <div className="">Header</div>
      <div
        className=" btn btn-primary"
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </div>

      <div className=" container ">
        <div className=" card text-dark">
          <div className=" card-body">
            <img src={session.user.image} alt="" />
            <h1>{session.user.name}</h1>
            <h1>{session.user.email}</h1>
          </div>
        </div>
      </div>
      <div className=" container">
        {data.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </div>
    </div>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  // const { data } = await  // your fetch function here

  return {
    props: {
      data: [1, 2, 3, 4, 5, 6],
    },
  };
};

export default index;
