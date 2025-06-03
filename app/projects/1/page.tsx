import React from "react";
import Link from "next/link";
import Image from "next/image";
const projects = [
  {
    title: "Restaurant Menu",
    description:
      "Une interface moderne de menu dynamique avec navigation par onglets.",
    image: "/imgs/logo-sichuan.png",
    link: "https://restaurant-menu.vercel.app",
  },
  {
    title: "NFT Marketplace",
    description:
      "Une place de marché décentralisée pour collectionner et échanger des NFTs.",
    image: "/imgs/nft-marketplace.jpg",
    link: "https://nft-marketplace.vercel.app",
  },
];

function Project1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 bg-white">
      {projects.map((project, index) => (
        <Link
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative w-full h-60 md:h-72">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5 bg-white">
            <h2 className="text-2xl font-bold text-[#990001] group-hover:underline">
              {project.title}
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              {project.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Project1;
