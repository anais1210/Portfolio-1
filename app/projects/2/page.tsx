"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ScrollReveal } from "@/components/animations";

const techStack = [
  { name: "TypeScript", icon: "devicon-typescript-plain", level: 99 },
  { name: "React", icon: "devicon-react-original", level: 90 },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original", level: 85 },
  { name: "Vite.js", icon: "devicon-vitejs-plain", level: 80 },
  { name: "Node.js", icon: "devicon-nodejs-plain", level: 75 },
  { name: "Express.js", icon: "devicon-express-original", level: 75 },
  { name: "MongoDB", icon: "devicon-mongodb-plain", level: 75 },
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
            src="/imgs/projects/2/burger-neon.avif"
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
                March 2022
              </motion.span>

              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-safira-march gradient-text mt-4 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Oz Burger
              </motion.h1>

              <motion.p
                className="text-[#9CA3AF] text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                OzBurger is a scalable full-stack application designed for a
                burger restaurant. The backend is structured as independent
                microservices, providing a RESTful CRUD API for products, meals,
                users, and orders.
              </motion.p>

              <motion.p
                className="text-[#9CA3AF] text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                The frontend, built with React, interacts with these services to
                deliver a complete ordering experience, from menu exploration to
                order submission.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="https://anais1210.github.io/BurgerAPI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="px-8 py-4 rounded-lg btn-gradient text-white font-montserrat font-medium flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Live Demo</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.button>
                </a>
                <a
                  href="https://anais1210.github.io/BurgerAPI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="px-8 py-4 rounded-lg btn-outline font-montserrat font-medium flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Github Repo</span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.377.202 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </motion.button>
                </a>
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
                    src="/imgs/projects/2/preview-burger.png"
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
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-safira-march gradient-text mb-12">
              Tech Stack
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <i className={`${tech.icon} text-3xl text-[#7C3AED]`} />
                    <span className="font-montserrat text-[#F8F8FF]">
                      {tech.name}
                    </span>
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
            <h2 className="text-3xl font-safira-march gradient-text mb-12">
              Project Preview
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4] rounded-3xl blur-xl opacity-20" />

              <div className="relative grid grid-cols-1 gap-4 glass-card rounded-2xl p-4">
                {/* HERO */}
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/imgs/projects/2/burger-menu.png"
                    alt="OzBurger main interface"
                    width={1200}
                    height={700}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* FEATURES */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="/imgs/projects/2/menu-manage.png"
                      alt="Menu browsing"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="/imgs/projects/2/dashboard.png"
                      alt="Admin menu management"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="/imgs/projects/2/order-manage.png"
                      alt="Order management"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
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
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
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
