import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const SectionTwo = () => {
  const { data } = useContext(ApiContext);
  const { personal_details } = data;

  return (
    <div className="">
      <img
        className="w-full h-[500px] md:h-[920px] object-cover animate-fade animate-once animate-duration-[1000ms] animate-delay-[1000ms] animate-ease-in"
        src={personal_details.photo}
        alt=""
      />
      
    </div>
  );
};

export default SectionTwo;
