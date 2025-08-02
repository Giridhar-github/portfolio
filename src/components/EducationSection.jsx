import CommonMargin from "./CommonMargin";
import EducationCard from "./EducationCard";

import { FiArrowDownLeft } from "react-icons/fi";

const EducationSection = ({ education }) => {
  return (
    <CommonMargin>
      <div className="flex flex-col lg:flex-row-reverse justify-between gap-5 md:gap-10 animate-fade-left animate-delay-[1000ms] animate-ease-in-out animate-duration-[1000ms]">
        <div className="flex-[0.3] lg:border-l-2 flex flex-row-reverse md:flex-row md:items-start justify-start lg:justify-between">
          <FiArrowDownLeft
            size={50}
            className="ms-5 md:ms-0 md:hidden lg:block lg:ms-10 "
          />
          <h4 className="text-4xl md:text-7xl lg:text-7xl font-semibold lg:ms-10">
            Education
          </h4>
        </div>
        <div className="flex-[0.7]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {education.map((item, index) => (
              <EducationCard
              key={index}
                title={item.qualification}
                description={`${item.university}, ${item.year}`}
              />
            ))}
          </div>
        </div>
      </div>
    </CommonMargin>
  );
};

export default EducationSection;
