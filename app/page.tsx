"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const floatingIcons = [
  { icon: "devicon-react-original", delay: 0, x: "10%", y: "20%" },
  { icon: "devicon-typescript-plain", delay: 0.2, x: "85%", y: "15%" },
  { icon: "devicon-nextjs-plain", delay: 0.4, x: "75%", y: "70%" },
  { icon: "devicon-nodejs-plain", delay: 0.6, x: "15%", y: "75%" },
  { icon: "devicon-python-plain", delay: 0.8, x: "90%", y: "45%" },
  { icon: "devicon-figma-plain", delay: 1, x: "5%", y: "50%" },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Technologies" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
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
            opacity: { delay: item.delay + 1, duration: 0.5 },
            scale: { delay: item.delay + 1, duration: 0.5 },
            y: {
              delay: item.delay + 1.5,
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
      <main className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 pt-24">
        {/* Greeting */}
        <motion.p
          className="text-[#9CA3AF] font-montserrat text-lg md:text-xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hello there, I'm
        </motion.p>

        {/* Name with gradient */}
        <motion.h1
          className="font-safira-march text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.span
            className="block home-welcome gradient-text-animated"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Anaïs Zhang
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[#9CA3AF] font-anonymous-regular text-lg md:text-xl text-center max-w-2xl mt-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Full-Stack Developer & Creative Technologist
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link href="/projects">
            <motion.button
              className="px-8 py-4 rounded-lg btn-gradient text-white font-montserrat font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              className="px-8 py-4 rounded-lg btn-outline font-montserrat font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
            >
              <p className="text-3xl md:text-4xl font-safira-march gradient-text">
                {stat.value}
              </p>
              <p className="text-[#9CA3AF] font-anonymous-regular text-sm mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <Link href="/about" className="flex flex-col items-center group cursor-pointer">
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
        </Link>
      </motion.div>

      {/* Decorative gradient orb behind name */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-[#EC4899]/10 to-[#06B6D4]/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>
    </div>
  );
}
