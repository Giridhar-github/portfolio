import React, { useContext, useEffect } from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import ContactSection from "./components/ContactSection";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import { ApiContext } from "./context/ApiContext";
import CommonResponse from "./components/CommonResponse";
import ProfessionalSkillSection from "./components/ProfessionalSkillSection";

const App = () => {
  const { loading, mistake, data } = useContext(ApiContext);

  return loading ? (
    <CommonResponse err={false}  msg={"Loading..."} />
  ) : mistake ? (
    <CommonResponse err={true} msg={mistake} />
  ) : (
    <div className="font-[Garamond] text-gray-800">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <ProfessionalSkillSection />
      <ContactSection />
    </div>
  );
};

export default App;
