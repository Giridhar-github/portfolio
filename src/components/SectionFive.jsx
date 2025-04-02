import React, { useContext } from "react";
import CommonMargin from "./CommonMargin";
import { ApiContext } from "../context/ApiContext";

const SectionFive = () => {
  const { data } = useContext(ApiContext);
  const { personal_details } = data;
  return (
    <CommonMargin>
      <div className="border-b-3 border-gray-800 pb-20">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-[0.4] mb-8 lg:mb-0">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold">
              Snapshot
            </h1>
          </div>
          <div className="flex-[0.6] flex-wrap">
            <p className="text-xl font-medium text-justify">
              {personal_details.snapshot}
            </p>
          </div>
        </div>
      </div>
    </CommonMargin>
  );
};

export default SectionFive;
