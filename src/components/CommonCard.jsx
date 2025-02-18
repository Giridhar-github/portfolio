import React from "react";

const CommonCard = ({title,description}) => {
  return (
    <div className="mb-20 mr-20 w-[550px] flex flex-col flex-wrap gap-8 shadow-lg p-5">
      <h4 className="text-4xl font-semibold">{title}</h4>
      <p className="text-xl text-justify text-gray-500">
       {description}
      </p>
    </div>
  );
};

export default CommonCard;
