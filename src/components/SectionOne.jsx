import React from "react";
import { FaRegMoon } from "react-icons/fa";
import CommonMargin from "./CommonMargin";
const SectionOne = () => {
  return (
    <CommonMargin>
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-9xl font-bold ">Giridhar M</h2>
          <h2 className="text-9xl font-bold ">Web Developer</h2>
          <h5 className="text-4xl font-semibold">(Kerala, India)</h5>
        </div>
        <div className="flex flex-col justify-between">
          <div className="">
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
