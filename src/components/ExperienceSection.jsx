import React from "react";
import CommonMargin from "./CommonMargin";

const ExperienceSection = () => {
  return (
    <CommonMargin>
      <div className="">
        <div className="flex lg:flex-row flex-col-reverse items-center lg:items-start">
          <div className="flex-[0.6] flex-wrap">
            <p className="text-xl font-bold text-justify">PHP Developer</p>
            <p className="text-xl font-medium text-justify">
              Virtual Sys Technologies, Infopark, Cherthala | 2022 - present
              <br />
            </p>
            <ul className="list-disc leading-10 mt-5 space-y-1 text-justify">
              <li>
                Designed and maintained dynamic web applications tosupport
                organizational goals.
              </li>
              <li>
                Collaborated closely with the development team toimplement new
                features per project specifications.
              </li>
              <li>
                Built and optimized user interfaces using HTML5,
                CSS3,JavaScript, and jQuery, ensuring cross-browsercompatibility
                and responsiveness.
              </li>
              <li>
                Leveraged CodeIgniter and PHP to develop backend logic,enhancing
                performance and scalability.
              </li>
            </ul>
          </div>
          <div className="flex-[0.4] flex justify-end mb-10 lg:mb-0">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold">Experience</h1>
          </div>
        </div>
      </div>
    </CommonMargin>
  );
};

export default ExperienceSection;
