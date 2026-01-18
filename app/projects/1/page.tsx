"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ScrollReveal } from "@/components/animations";

const techStack = [
  { name: "React", icon: "devicon-react-original", level: 90 },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original", level: 85 },
  { name: "Next.js", icon: "devicon-nextjs-plain", level: 80 },
  { name: "TypeScript", icon: "devicon-typescript-plain", level: 75 },
];

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="min-h-screen font-anonymous-regular">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F23] via-transparent to-[#0F0F23] z-10" />

        {/* Parallax background image */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroImageY, opacity: heroOpacity }}
        >
          <Image
            src="/imgs/projects/1/logo-fish.png"
            alt="Restaurant Sichuan"
            fill
            className="object-contain opacity-20"
            priority
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <motion.span
                className="text-[#7C3AED] font-montserrat text-sm tracking-wider uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                May 2020
              </motion.span>

              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-safira-march gradient-text mt-4 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Restaurant Sichuan
              </motion.h1>

              <motion.p
                className="text-[#9CA3AF] text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                A showcase website for a Chinese restaurant in Paris, highlighting
                the menu and contact information. Designed to be responsive and
                easy to navigate.
              </motion.p>

              <motion.p
                className="text-[#9CA3AF] text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                The goal is simple navigation - the easier it is for customers to find
                information, the better. Clean, minimalist design emphasizing the dishes.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="https://restaurant-sichuan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="px-8 py-4 rounded-lg btn-gradient text-white font-montserrat font-medium flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Live Demo</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.button>
                </a>
                <Link href="/projects">
                  <motion.button
                    className="px-8 py-4 rounded-lg btn-outline font-montserrat font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    All Projects
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative w-full aspect-square">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4] rounded-3xl blur-2xl opacity-30" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card">
                  <Image
                    src="/imgs/projects/1/logo-fish.png"
                    alt="Restaurant Sichuan Logo"
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="flex flex-col items-center text-[#9CA3AF]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-montserrat mb-2">Scroll</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-safira-march gradient-text mb-12">Tech Stack</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <i className={`${tech.icon} text-3xl text-[#7C3AED]`} />
                    <span className="font-montserrat text-[#F8F8FF]">{tech.name}</span>
                  </div>
                  <div className="relative h-2 bg-[#1A1A3E] rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Preview */}
      <section className="py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-safira-march gradient-text mb-12">Project Preview</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden glass-card">
                <Image
                  src="/imgs/projects/1/homepage.png"
                  alt="Homepage Preview"
                  width={1500}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 border-t border-[#1A1A3E]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            <Link href="/projects" className="group">
              <motion.div
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#F8F8FF] transition-colors"
                whileHover={{ x: -5 }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-montserrat">Back to Projects</span>
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.button
                className="px-8 py-4 rounded-lg btn-gradient text-white font-montserrat font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
