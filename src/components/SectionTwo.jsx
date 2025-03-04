import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const SectionTwo = () => {
  const { data } = useContext(ApiContext);
  const { personal_details } = data;

  return (
    <div className="bg-red-600">
      <img
        className="w-full h-[500px] md:h-[920px] object-cover"
        src={personal_details.photo}
        alt=""
      />
    </div>
  );
};

export default SectionTwo;
