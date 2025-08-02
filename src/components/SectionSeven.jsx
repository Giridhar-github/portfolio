import React, { useContext } from "react";
import CommonMargin from "./CommonMargin";
import { PiLinkBold } from "react-icons/pi";
import { ApiContext } from "../context/ApiContext";
import { useEffect } from "react";

const SectionSeven = () => {
  const { data } = useContext(ApiContext);
  const { projects } = data;
  const API_URL = import.meta.env.VITE_BACKEND_API_URL;

  return (
    <CommonMargin>
      <div>
        <div className="mb-10 animate-fade-right animate-delay-[1600ms] animate-ease-in-out animate-duration-[1500ms]">
          <h6 className="text-5xl md:text-7xl lg:text-7xl font-extrabold ">
            Projects
          </h6>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fade animate-delay-[1600ms] animate-ease-in-out animate-duration-[1800ms]">
          {projects.map((item, index) => (
            <div
              key={item.id}
              className="rounded-md shadow-xs h-50 w-[370px] md:h-105 md:w-[100%] lg:h-80 lg:w-[550px] bg-no-repeat bg-cover bg-center bg-blend-multiply bg-zinc-500 hover:scale-110 duration-300 ease-out grayscale hover:grayscale-0"
              style={{ backgroundImage: `url(${API_URL + item.cover})` }}
            >
              <div className="flex flex-wrap justify-center items-center flex-col-reverse h-full">
                <div className="flex-1 w-full flex justify-center items-center">
                  <h1 className="font-extrabold text-2xl md:text-5xl text-white text-center">
                    {item.title}
                  </h1>
                </div>
                <div className="flex justify-end w-full">
                  <button className="bg-zinc-500 p-3 rounded-full cursor-pointer m-1" onClick={()=>{window.open(item.url,"_blank")}}>
                    <PiLinkBold color="white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CommonMargin>
  );
};

export default SectionSeven;
