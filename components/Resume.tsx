import React from "react";
// import Experiences from "./ResumeSection/Experiences";
// import Education from "./ResumeSection/Education";
import Skills from "./ResumeSection/Skills";

const Resume = () => {
  return (
    <div className="w-full p-2 font-montserrat">
      <div className="flex justify-between items-center mb-6 w-full">
        <h1 className="font-safira-march text-7xl m-8 mb-10">Resume</h1>
        <a
          href="/files/CV_AnaisZhang.pdf"
          download="CV_AnaisZhang.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#D5BDAF] text-white px-4 py-2 rounded-md hover:bg-[#E3D5CA]">
            Download in PDF
          </button>
        </a>
      </div>
      {/* Section Experience */}
      {/* <Experiences /> */}
      {/* Espacement entre Experience et Education */}
      <div className="my-20" /> {/* Marge entre les sections */}
      {/* Section Education */}
      {/* <Education /> */}
      <div className="my-20" /> {/* Marge entre les sections */}
      {/* Section Skills */}
      <Skills />
    </div>
  );
};

export default Resume;
