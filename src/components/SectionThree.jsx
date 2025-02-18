import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import CommonMargin from "./CommonMargin";

const SectionThree = () => {
  return (
    <CommonMargin>
      <div className="">
        <div className="flex gap-10 border-b-3 border-b-gray-800 p-20">
          <div className="flex-[0.7] border-e-3 border-e-gray-800 p-5 flex-wrap">
            <h4 className="text-8xl font-bold">
            As a web developer, I specialize in creating high-quality and engaging web experiences.
            </h4>
          </div>
          <div className="flex-[0.3] flex flex-col justify-between">
            <div className="">
              <h4 className="text-4xl font-semibold">(About Me)</h4>
            </div>
            <div className="flex gap-3">
              <button className="bg-gray-800 p-5 rounded-full">
                <FaInstagram color="white" />
              </button>
              <button className="bg-gray-800 p-5 rounded-full">
                <FaLinkedinIn color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </CommonMargin>
  );
};

export default SectionThree;
