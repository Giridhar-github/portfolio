import React, { useContext } from "react";
import CommonMargin from "./CommonMargin";
import CommonCard from "./CommonCard";
import { FiArrowDownRight } from "react-icons/fi";
import { ApiContext } from "../context/ApiContext";

const SectionFour = () => {
  const { data } = useContext(ApiContext);
  const { technical_skills } = data;
  return (
    <CommonMargin>
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 border-b-3 border-gray-800 pb-10 animate-fade-right animate-delay-[1400ms] animate-ease-in-out animate-duration-[2000ms]">
        <div className="flex-[0.3] md:border-r-2 flex justify-between animate-fade-right animate-delay-[1400ms] animate-ease-in-out animate-duration-[2000ms]">
          <h4 className="text-4xl font-semibold">(What I Do)</h4>
          <FiArrowDownRight size={50} className="me-10" />
        </div>
        <div className="flex-[0.7]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {technical_skills.map((item, index) => (
              <CommonCard
                key={index}
                title={item.title}
                description={item.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </CommonMargin>
  );
};

export default SectionFour;
