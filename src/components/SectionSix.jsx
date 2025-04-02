import React, { useContext } from "react";
import CommonMargin from "./CommonMargin";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import { ApiContext } from "../context/ApiContext";

const SectionSix = () => {
  const { data } = useContext(ApiContext);
  const { education, experience } = data;
  return (
    <CommonMargin>
      <div className="border-b-3">
        <EducationSection className="" education={education} />
      </div>
      <div className="border-b-3">
        <ExperienceSection className="" experience={experience} />
      </div>
    </CommonMargin>
  );
};

export default SectionSix;
