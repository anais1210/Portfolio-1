"use client";
import Image from "next/image";

export default function ProjectShowcase() {
  return (
    <main className="min-h-screen font-anonymous-regular">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] w-full flex items-center justify-between px-12">
        {/* Partie gauche - Transparente avec contenu centré */}
        <div className="flex-1 h-full flex items-center">
          <div className="z-10 max-w-xl">
            <h1 className="text-5xl font-extrabold">Restaurant Sichuan </h1>
            <span className="text-gray-500">May 2020</span>
            <p className="text-sm mt-7 mb-6 leading-relaxed">
              A showcase website for a Chinese restaurant in Paris, highlighting
              the menu and contact information. Designed to be responsive and
              easy to navigate.
            </p>
            <p className="text-sm mt-7 mb-6 leading-relaxed">
              The goal of the project is to ensure very simple navigation. The
              simpler the site is, the easier it is for customers to find the
              information they're looking for, without overcomplicating things.
              The design is clean and minimalist, emphasizing the dishes offered
              by the restaurant.
            </p>

            <p className="text-gray-700 mb-5">
              Stack Used : React, Tailwind CSS, UI responsive.
            </p>
            <div className="flex gap-4">
              <a
                href="https://restaurant-sichuan.vercel.app/"
                className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 font-semibold transition"
              >
                ▶ Discover
              </a>
            </div>
          </div>
        </div>

        {/* Image à droite - réduite et centrée */}
        <div className="flex-1 flex items-center justify-center relative h-full">
          <div className="flex-1 flex items-center justify-center h-[500px] relative">
            <div className="relative w-[90%] h-full">
              <Image
                src="/imgs/projects/1/logo-fish.png"
                alt="Projet logo Fish"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span className="text-gray-600 text-sm">Scroll</span>
          <svg
            className="w-6 h-6 text-gray-600 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Description détaillée du projet */}
      {/* <section className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-6">À propos du projet</h2>
        <p className=" text-lg leading-relaxed mb-4">
          Ce projet met en valeur mes compétences en developpement web front
          notamment dans la création de sites vitrines. Le site est conçu pour
          être responsive, offrant une expérience utilisateur optimale sur tous
          les appareils. Il présente le menu du restaurant, les horaires
          d'ouverture, et les informations de contact, le tout dans un design
          moderne et épuré.
        </p>
        <p className=" text-lg leading-relaxed mb-4">
          Le projet a pour but d'être très facile à naviguer. Au plus simple le
          site est, au plus simple les client peuvent trouver les informations
          qu'ils recherchent, sans en faire trop. Le design est épuré et
          minimaliste, mettant en avant les plats proposés par le restaurant.
        </p>
        <p className="text-gray-700">
          Technologies utilisées : React, Tailwind CSS, Smart Contracts
          Ethereum, intégration IPFS, UI responsive.
        </p>
      </section> */}
      <section className="px-10">
        <h2 className="text-2xl font-bold">Project Preview</h2>
        <section className="px-10 py-8 flex items-center justify-center">
          <div className="w-full max-w-5xl h-auto rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/imgs/projects/1/homepage.png" // Mets ici ton image principale
              alt="Aperçu grand format"
              width={1500}
              height={900}
              className="w-auto h-auto object-cover rounded-xl"
              priority
            />
          </div>
        </section>
      </section>
      {/* Carrousel Section (inspiré Netflix) */}
      <section className="px-6 py-12 bg-gray-950">
        <h2 className="text-2xl font-bold mb-6">Autres projets</h2>
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="min-w-[220px] bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <Image
                src={`/imgs/thumb${num}.png`}
                alt={`Miniature projet ${num}`}
                width={220}
                height={124}
                className="w-full object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Projet {num}</h3>
                <p className="text-sm text-gray-400">React · Tailwind · Web3</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
