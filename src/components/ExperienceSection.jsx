import React from "react";
import CommonMargin from "./CommonMargin";

const ExperienceSection = ({ experience }) => {
  return (
    <CommonMargin>
      <div className="">
        <div className="flex lg:flex-row-reverse flex-col-reverse items-center lg:items-start">
          <div className="flex-[0.6] ">
            {experience.map((item, index) => (
              <div className="flex-wrap mb-0" key={index}>
                <p className="text-xl font-bold text-justify">{item.post}</p>
                <p className="text-xl font-medium text-justify ms-5">
                  {item.company}| {item.duration}
                  <br />
                </p>
                <ul
                  className={`list-disc leading-10  ms-10 ${
                    index != 0 && "mt-5"
                  } space-y-1 text-justify`}
                >
                  {item.duties.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex-[0.4] flex justify-start items-center mb-10 lg:mb-0">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-extrabold">
              Experience
            </h1>
          </div>
        </div>
      </div>
    </CommonMargin>
  );
};

export default ExperienceSection;
