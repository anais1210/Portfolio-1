import Image from "next/image";
import React from "react";
import Project1 from "./1/page";

export default function Projects() {
  return (
    // <div className="min-h-screen flex flex-col items-center justify-center px-8 sm:px-20 bg-custom">
    <div className="w-full bg-custom">
      <div className="relative w-full">
        {/* Image */}
        <Image
          src="/imgs/mac.jpg"
          alt="Project"
          className="w-full h-120 object-cover blur-sm"
          width={1920}
          height={1080}
        />
        {/* Titre superposé sur l'image */}
        <h1 className="pl-15 absolute top-1/2 left-4 transform -translate-y-1/2 text-8xl font-safira-march text-black animate-fadeInLeft">
          Projects
        </h1>
      </div>
      {/* <div className="mt-8 w-full flex justify-center font-montserrat animate-fadeInUp">
        <nav className="flex space-x-8">
          <a
            href="/projects/1"
            className="text-lg font-medium text-black hover:text-[#D5BDAF] transition-colors duration-300"
          >
            Project 1
          </a>
          <a
            href="#project2"
            className="text-lg font-medium text-black hover:text-[#D5BDAF] transition-colors duration-300"
          >
            Project 2
          </a>
          <a
            href="#project3"
            className="text-lg font-medium text-black hover:text-[#D5BDAF] transition-colors duration-300"
          >
            Project 3
          </a>
          <a
            href="#project4"
            className="text-lg font-medium text-black hover:text-[#D5BDAF] transition-colors duration-300"
          >
            Project 4
          </a>
        </nav>
      </div> */}
      <Project1 />
    </div>
  );
}
