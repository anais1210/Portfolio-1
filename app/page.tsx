"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Terminal from "@/components/ui/Terminal";
import AboutSection from "@/components/sections/AboutSection";
import Skills from "@/components/ResumeSection/Skills";

const floatingIcons = [
  { icon: "devicon-react-original", delay: 0, x: "8%", y: "25%" },
  { icon: "devicon-typescript-plain", delay: 0.2, x: "88%", y: "18%" },
  { icon: "devicon-nextjs-plain", delay: 0.4, x: "78%", y: "72%" },
  { icon: "devicon-nodejs-plain", delay: 0.6, x: "12%", y: "78%" },
  { icon: "devicon-python-plain", delay: 0.8, x: "92%", y: "50%" },
  { icon: "devicon-figma-plain", delay: 1, x: "5%", y: "55%" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero section animations (fade out and scale as user scrolls)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // About section animations (fade in as user scrolls)
  const aboutOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.1, 0.25], [50, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section - Fixed position that fades out */}
      <motion.section
        ref={heroRef}
        className="fixed inset-0 flex flex-col justify-center items-center overflow-hidden z-10"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        {/* Floating tech icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl md:text-5xl text-[#9CA3AF]/20 pointer-events-none"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              opacity: { delay: item.delay + 0.5, duration: 0.5 },
              scale: { delay: item.delay + 0.5, duration: 0.5 },
              y: {
                delay: item.delay + 1,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <i className={item.icon} />
          </motion.div>
        ))}

        {/* Main content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 sm:px-12 lg:px-24 w-full max-w-7xl">
          {/* Left side - Text content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Greeting */}
            <motion.p
              className="text-[#9CA3AF] font-montserrat text-lg md:text-xl mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello there, I'm
            </motion.p>

            {/* Name with gradient */}
            <motion.h1
              className="font-safira-march"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.span
                className="block text-5xl sm:text-6xl lg:text-7xl gradient-text-animated leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Anaïs Zhang
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-[#9CA3AF] font-anonymous-regular text-lg md:text-xl mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Full-Stack Developer & Creative Technologist
            </motion.p>
          </div>

          {/* Right side - Terminal */}
          <motion.div
            className="flex-shrink-0 w-full max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Terminal />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="flex flex-col items-center group cursor-pointer">
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-[#9CA3AF] flex justify-center pt-2 group-hover:border-[#7C3AED] transition-colors duration-300"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
            <span className="text-[#9CA3AF] text-sm font-montserrat mt-3 group-hover:text-[#7C3AED] transition-colors duration-300">
              Scroll to explore
            </span>
          </div>
        </motion.div>

        {/* Decorative gradient orb */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/15 via-[#EC4899]/10 to-[#06B6D4]/15 rounded-full blur-3xl animate-pulse-glow" />
        </div>
      </motion.section>

      {/* Spacer for hero section */}
      <div className="h-screen" />

      {/* About Section - Scrolls in with parallax merge effect */}
      <motion.div
        className="relative z-20"
        style={{ opacity: aboutOpacity, y: aboutY }}
      >
        <AboutSection />

        {/* Divider */}
        <div className="flex justify-center py-8">
          <motion.div
            className="w-32 h-1 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Skills Section */}
        <Skills />
      </motion.div>
    </div>
  );
}
