"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations";

const projects = [
  {
    title: "Restaurant Sichuan",
    description:
      "A showcase website for a Chinese restaurant, presenting the menu and contact information with a modern, elegant design.",
    image: "/imgs/projects/1/preview4.png",
    date: "May 2020",
    link: "/projects/1",
    tags: ["Next.js", "React", "Tailwind CSS"],
    size: "large" as const,
  },
  {
    title: "NFT Marketplace",
    description:
      "A decentralized marketplace for collecting and trading NFTs with wallet integration.",
    image: "/imgs/nft-marketplace.jpg",
    date: "June 2024",
    link: "/projects/2",
    tags: ["Solidity", "Web3", "React"],
    size: "medium" as const,
  },
  {
    title: "Portfolio v2",
    description:
      "Personal portfolio showcasing projects and skills with modern animations.",
    image: "/imgs/mac.jpg",
    date: "2024",
    link: "#",
    tags: ["Next.js", "Framer Motion"],
    size: "small" as const,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Outline + Filled Text Hero */}
          <div className="relative mb-16">
            <motion.h1
              className="text-6xl sm:text-8xl lg:text-9xl font-safira-march"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-outline block">SELECTED</span>
              <span className="gradient-text block -mt-4 sm:-mt-6">WORKS</span>
            </motion.h1>

            {/* Decorative line */}
            <motion.div
              className="absolute -right-4 top-1/2 w-32 h-1 bg-gradient-to-r from-[#7C3AED] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>

          <motion.p
            className="text-[#9CA3AF] font-anonymous-regular text-lg max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A collection of projects I&apos;ve worked on, from web applications
            to blockchain solutions. Each project represents a unique challenge
            and learning experience.
          </motion.p>
        </div>
      </section>

      {/* Bento Grid Projects */}
      <section className="px-6 sm:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {projects.map((project, index) => {
              const sizeClasses = {
                small: "",
                medium: "md:row-span-2",
                large: "md:col-span-2 lg:row-span-2",
              };

              return (
                <ScrollReveal
                  key={index}
                  delay={index * 0.1}
                  className={sizeClasses[project.size]}
                >
                  <Link href={project.link} className="block h-full">
                    <motion.article
                      className="group relative h-full overflow-hidden rounded-2xl glass-card cursor-pointer"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {/* Image */}
                      <div className="absolute inset-0 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F23] via-[#0F0F23]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#7C3AED]/20 via-transparent to-[#06B6D4]/20" />
                      </div>

                      {/* Content overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        {/* Date */}
                        <span className="text-[#7C3AED] text-sm font-montserrat mb-2">
                          {project.date}
                        </span>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 text-xs font-montserrat rounded-full bg-[#7C3AED]/30 text-[#F8F8FF] border border-[#7C3AED]/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl font-safira-march text-[#F8F8FF] mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[#9CA3AF] font-anonymous-regular text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                          {project.description}
                        </p>

                        {/* View project indicator */}
                        <div className="flex items-center gap-2 mt-4 text-[#7C3AED] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                          <span className="text-sm font-montserrat">
                            View Project
                          </span>
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Border glow on hover */}
                      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#7C3AED]/50 transition-colors duration-300 pointer-events-none" />
                    </motion.article>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-safira-march gradient-text mb-6">
              Want to work together?
            </h2>
            <p className="text-[#9CA3AF] font-anonymous-regular text-lg mb-8">
              I&apos;m always open to discussing new projects and creative
              ideas.
            </p>
            <Link href="/contact">
              <motion.button
                className="px-8 py-4 rounded-lg btn-gradient text-white font-montserrat font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
