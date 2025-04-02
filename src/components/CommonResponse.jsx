import React from "react";
import ErrorImg from "../assets/error.gif";
import LoaderImg from "../assets/loading.gif";

const CommonResponse = ({ err,msg }) => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      {err ? (
        <>
          <img src={ErrorImg} alt="" />
          <p>{msg}...</p>
        </>
      ) : (
        <>
          <img src={LoaderImg} alt="" />
          <p>{msg}</p>
        </>
      )}
    </div>
  );
};

export default CommonResponse;
