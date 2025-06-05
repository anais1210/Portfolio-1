import Image from "next/image";
import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "Restaurant Sichuan - Paris",
    description:
      "A showcase website for a Chinese restaurant, presenting the menu and contact information.",
    image: "/imgs/projects/1/logo-fish.png",
    date: "May 2020",
    link: "/projects/1",
  },
  {
    title: "NFT Marketplace",
    description: "A decentralized marketplace for collecting and trading NFTs.",
    image: "/imgs/nft-marketplace.jpg",
    date: "June 2024",
    link: "/projects/2",
  },
];

export default function Projects() {
  return (
    <div className="w-full bg-custom">
      <div className="relative w-full">
        <Image
          src="/imgs/mac.jpg"
          alt="Project"
          className="w-full h-120 object-cover blur-sm"
          width={1920}
          height={1080}
        />
        <h1 className="pl-15 absolute top-1/2 left-4 transform -translate-y-1/2 text-8xl font-safira-march text-black animate-fadeInLeft">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 bg-white font-anonymous-regular">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 bg-white flex flex-col justify-between h-[160px]">
              <div>
                <h2 className="text-2xl font-bold group-hover:underline">
                  {project.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-end">
                <p className="text-xs text-gray-500">{project.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
