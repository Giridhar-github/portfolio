import React from "react";
import CommonMargin from "./CommonMargin";

const SectionFive = () => {
  return (
    <CommonMargin>
      <div className="border-b-3 border-gray-800 pb-20">
        <div className="flex">
          <div className="flex-[0.4]">
            <h1 className="text-9xl font-extrabold">Snapshot</h1>
          </div>
          <div className="flex-[0.6] flex-wrap">
            <p className="text-xl font-medium text-justify">
              PHP Developer with 2 years of experience inweb development.
              Skilled in using PHP, CodeIgniter, and front-end technologies like
              HTML5, CSS3, JavaScript, and jQuery todevelop scalable, responsive
              web applications. Proficient inMySQL for database management, with
              expertise in dataquerying and optimization. Known for
              problem-solving, teamcollaboration, and adaptability to new
              technologies. Seekingto leverage technical skills in a
              growth-oriented organization.
            </p>
          </div>
        </div>
      </div>
    </CommonMargin>
  );
};

export default SectionFive;
