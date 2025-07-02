import React, { useContext } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import CommonMargin from "./CommonMargin";
import { ApiContext } from "../context/ApiContext";

const SectionThree = () => {
  const { data } = useContext(ApiContext);
  const { personal_details, contact_details } = data;
  const API_URL = import.meta.env.VITE_BACKEND_API_URL;

  return (
    <CommonMargin>
      <div className="">
        <div className="flex flex-row gap-10 pb-5 md:pb-2 border-b-3 border-b-gray-800 lg:p-20 animate-fade-right animate-delay-[1200ms] animate-ease-in-out animate-duration-[2000ms]">
          <div className="flex-[0.7] border-e-3 border-e-gray-800 p-5 flex-wrap">
            <h4 className="text-2xl md:text-5xl lg:text-8xl font-bold font-bold animate-fade-right animate-delay-[1200ms] animate-ease-in-out animate-duration-[2000ms]">
              {personal_details.job_description}
            </h4>
          </div>
          <div className="flex-[0.3] flex flex-col justify-between">
            <div className="animate-fade-right animate-delay-[1200ms] animate-ease-in-out animate-duration-[2000ms]">
              <h4 className="text-3xl md:text-4xl font-semibold">(About Me)</h4>
            </div>
            <div className="my-2 animate-fade-right animate-delay-[1200ms] animate-ease-in-out animate-duration-[2000ms]">
              <img
                className="lg:h-88"
                src={API_URL + personal_details.photo}
                alt=""
              />
            </div>
            <div className="flex gap-1 md:gap-3">
              <button
                className="bg-gray-800 p-5 rounded-full cursor-pointer hover:bg-linear-to-r hover:from-[#f70088] hover:to-[#7521f5] animate-fade-right animate-delay-[1200ms] animate-ease-in-out animate-duration-[2000ms]"
                onClick={() => {
                  window.open(contact_details.instagram, "_blank");
                }}
              >
                <FaInstagram color="white" />
              </button>
              <button
                className="bg-gray-800 p-5 rounded-full cursor-pointer hover:bg-[#0a66c2] animate-fade-right animate-delay-[1200ms] animate-ease-in-out animate-duration-[2000ms]"
                onClick={() => {
                  window.open(contact_details.linkedIn, "_blank");
                }}
              >
                <FaLinkedinIn color="white" />
              </button>
              <button
                className="bg-gray-800 p-5 rounded-full cursor-pointer hover:bg-[#eb493b] animate-fade-right animate-delay-[1200ms] animate-ease-in-out animate-duration-[2000ms]"
                onClick={() => {
                  window.open(contact_details.email, "_blank");
                }}
              >
                <BiLogoGmail color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </CommonMargin>
  );
};

export default SectionThree;
