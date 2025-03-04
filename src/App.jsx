import React, { useContext, useEffect } from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import ContactSection from "./components/ContactSection";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import { ApiContext } from "./context/ApiContext";

const App = () => {
  const { loading } = useContext(ApiContext);

  return loading ? (
    <h1>loading...</h1>
  ) : (
    <div className="font-[Century_Gothic] text-gray-800">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <ContactSection />
    </div>
  );
};

export default App;
