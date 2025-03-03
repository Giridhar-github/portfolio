import React from "react";
import { FaRegMoon } from "react-icons/fa";
import CommonMargin from "./CommonMargin";
const SectionOne = () => {
  return (
    <CommonMargin>
      <div className="flex justify-between w-full">
        <div className="flex-[0.7]">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold ">Giridhar M</h2>
          <h2 className="text-3xl md:text-6xl lg:text-9xl font-bold ">Web Developer</h2>
          <h5 className="text-2xl lg:text-4xl font-semibold">(Kerala, India)</h5>
        </div>
        <div className="flex flex-col justify-between flex-[0.2]">
          <div className="text-end lg:text-center">
            <button className="bg-gray-800 p-5 rounded-full">
              <FaRegMoon color="white" size={20} />
            </button>
          </div>
          <button className="text-2xl font-semibold">Scroll Down</button>
        </div>
      </div>
    </CommonMargin>
  );
};

export default SectionOne;
