import React from "react";
import CommonMargin from "./CommonMargin";
import CommonCard from "./CommonCard";
import { FiArrowDownRight } from "react-icons/fi";

const SectionFour = () => {
  return (
    <CommonMargin>
      <div className="flex justify-between gap-10 border-b-3 border-gray-800 pb-10">
        <div className="flex-[0.3] border-r-2 flex justify-between">
          <h4 className="text-4xl font-semibold">(What I Do)</h4>
          <FiArrowDownRight size={50} className="me-10" />
        </div>
        <div className="flex-[0.7]">
          <div className="grid grid-cols-2">
            <CommonCard title="Backend Development" description="Build dynamic and interactive web applications using PHP. Develop and maintain server-side logic, databases, and APIs." />
            <CommonCard title="Frontend Integration" description="Work with HTML, CSS, JavaScript, and frameworks like Bootstrap & Tailwind CSS. Ensure seamless integration between backend and frontend components." />
            <CommonCard title="Database Management" description="Design and optimize relational databases (MySQL). Write efficient queries and handle data operations securely." />
            <CommonCard title="API Development & Integration" description="Develop RESTful APIs for seamless communication between systems. Integrate third-party APIs (payment gateways, authentication, etc.)." />
            <CommonCard title="Code Debugging & Troubleshooting" description="Identify and fix bugs, errors, and performance issues. Use debugging tools and logs to ensure smooth application performance." />
            <CommonCard title="Version Control & Deployment" description="Manage code using Git/GitHub for version control. Deploy applications on servers, including CWP (CentOS Web Panel) & cloud hosting." />
            <CommonCard title="Responsive & Mobile-Friendly Development" description="Ensure websites work seamlessly on all devices and screen sizes. Use modern CSS frameworks for responsive design." />
          </div>
        </div>
      </div>
    </CommonMargin>
  );
};

export default SectionFour;
