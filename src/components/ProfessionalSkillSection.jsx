import { useContext, useEffect } from "react";
import { ApiContext } from "../context/ApiContext";
import * as SiIcons from "react-icons/si";
import CommonMargin from "./CommonMargin";

const ProfessionalSkillSection = () => {
  const { data } = useContext(ApiContext);
  const core_competencies = data?.core_competencies || [];

  return (
    <CommonMargin>
      <div className="flex gap-3 my-10 justify-center items-center flex-wrap animate-pulse animate-once animate-ease-linear animate-normal animate-fill-forwards">
        {core_competencies.length > 0 ? (
          core_competencies.map((skill, index) => {
            const IconComponent = SiIcons[skill.icon];
            return (
              <div
                key={skill.id}
                className="shadow-sm rounded-md h-36 w-28 flex justify-center items-center"
              >
                {skill.icon != "" ? (
                  IconComponent && <IconComponent size={40} />
                ) : (
                  <p className="font-bold text-2xl">{skill.skill}</p>
                )}
                {/* <div>{skill.skill}</div> */}
              </div>
            );
          })
        ) : (
          <p>No skills available</p>
        )}
      </div>
    </CommonMargin>
  );
};

export default ProfessionalSkillSection;
