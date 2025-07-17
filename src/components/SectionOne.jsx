import React, { useContext, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { TbArrowDownToArc } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";

import CommonMargin from "./CommonMargin";
import { ApiContext } from "../context/ApiContext";
const SectionOne = () => {
  const { data } = useContext(ApiContext);
  const { personal_details } = data;
  const API_URL = import.meta.env.VITE_BACKEND_API_URL;

  return (
    <CommonMargin>
      <div className="flex justify-between w-full border-b-4 pb-8 md:pb-20 animate-fade-right animate-ease-in-out animate-delay-[500ms] animate-duration-[2000ms]">
        <div className="flex-[0.7]">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold animate-fade-right animate-ease-in-out animate-duration-[2000ms]">
            {personal_details.name}
          </h2>
          <h2 className="text-3xl md:text-6xl lg:text-9xl font-bold animate-fade-right animate-delay-[500ms] animate-ease-in-out animate-duration-[2000ms]">
            {personal_details.job_role}
          </h2>
          <div className="flex gap-5 flex-col md:flex-row justify-start">
            <h5 className="text-2xl lg:text-4xl font-semibold animate-fade-right animate-delay-[1000ms] animate-ease-in-out">
              {personal_details.place}
            </h5>
            <div className="flex justify-start">
              <a
                href={API_URL + personal_details.resume}
                target="_blank"
                className="bg-gray-800 text-white px-3 py-1 rounded-full flex justify-between items-center text-xl md:hidden"
              >
                <MdOutlineFileDownload />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between flex-[0.3] items-end">
          <div className="text-end lg:text-center animate-fade animate-ease-in-out animate-duration-[2000ms]">
            {/* <button className="bg-gray-800 p-5 rounded-full">
              <FaRegMoon color="white" size={20} />
            </button> */}
            <a
              href={API_URL + personal_details.resume}
              target="_blank"
              className="bg-gray-800 text-white px-6 py-2 rounded-full md:flex md:justify-between items-center text-2xl hidden"
            >
              <MdOutlineFileDownload />
              <span>Resume</span>
            </a>
          </div>
          <button
            className=" text-sm md:text-xl font-semibold cursor-pointer animate-fade animate-delay-[1500ms] animate-thrice animate-ease-linear flex items-center justify-end gap-2"
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            <span className="flex-1 text-xs md:text-xl ">Scroll Down</span>
            <TbArrowDownToArc />
          </button>
        </div>
      </div>
    </CommonMargin>
  );
};

export default SectionOne;
