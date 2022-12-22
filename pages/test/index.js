import React, { useLayoutEffect, useState } from "react";

const index = ({ data }) => {
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

  return (
    <div className="test-page bg-dark text-white">
      <div className="">Header</div>
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
