import React from "react";
import ErrorImg from "../assets/error.gif";
import LoaderImg from "../assets/loading.gif";

const CommonResponse = ({ err,msg }) => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      {err ? (
        <>
          <img src={ErrorImg} alt="" className="h-52 w-52 object-cover rounded-full" />
          <p>{msg}...</p>
        </>
      ) : (
        <>
          <img src={LoaderImg} alt="" className="h-52 rounded-full" />
          <p>{msg}</p>
        </>
      )}
    </div>
  );
};

export default CommonResponse;
