import React from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import ContactSection from "./components/ContactSection";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import { ApiProvider } from "./context/ApiContext";

const App = () => {
  return (
    <ApiProvider>
      <div className="font-[Century_Gothic] text-gray-800">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <ContactSection />
      </div>
    </ApiProvider>
  );
};

export default App;
