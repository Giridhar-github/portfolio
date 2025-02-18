import React from "react";
import CommonMargin from "./CommonMargin";
import CommonCard from "./CommonCard";
import { FiArrowDownLeft } from "react-icons/fi";

const EducationSection = () => {
  return (
    <CommonMargin>
      <div className="flex flex-row-reverse justify-between gap-10 ">
        <div className="flex-[0.3] border-l-2 flex items-start justify-between">
          <FiArrowDownLeft size={50} className="ms-10" />
          <h4 className="text-4xl font-semibold">(Education)</h4>
        </div>
        <div className="flex-[0.7]">
          <div className="grid grid-cols-2">
            <CommonCard title="Master of Computer Applications (MCA)" description="APJ AbdulKalam Technological University, (2020-2022)" />
            <CommonCard title="Bachelor of Computer Applications (BCA)" description="Universityof Kerala, (2017-2020)" />
            <CommonCard title="12th Grade" description="Board of HSE, Kerala, India, (2015-2017)" />
            <CommonCard title="10th Grade" description="Central Board of SecondaryEducation, (2014-2015)" />
          </div>
        </div>
      </div>
    </CommonMargin>
  );
};

export default EducationSection;
