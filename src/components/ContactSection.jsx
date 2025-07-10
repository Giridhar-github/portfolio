import React, { useContext, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { ApiContext } from "../context/ApiContext";

const ContactSection = () => {
  const { data } = useContext(ApiContext);
  const { contact_details } = data;
  useEffect(() => {}, []);

  return (
    <div className="bg-gray-800 h-screen text-white">
      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col items-center">
          <p className="font-bold text-3xl">(Connect)</p>
          <p className="font-bold text-9xl text-center">Let's Talk</p>
          <div className="mt-5">
            <button
              className="bg-white text-gray-800 rounded-4xl px-5 py-2 font-bold flex justify-center items-center"
              onClick={() => {
                window.open(contact_details.instagram, "_blank");
              }}
            >
              Contact <GoArrowUpRight size={20} className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
