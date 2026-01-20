"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Skills from "@/components/ResumeSection/Skills";
import { ScrollReveal } from "@/components/animations";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={containerRef} className="relative min-h-screen pt-20">
      {/* Hero Section - Magazine Style */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Large Background Text */}
        <motion.div
          className="absolute top-32 -left-10 text-[18vw] font-safira-march text-[#1A1A3E] select-none pointer-events-none leading-none whitespace-nowrap"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          ABOUT
        </motion.div>

        {/* Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16 lg:py-24">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            {/* Left Column - Image with Parallax */}
            <motion.div
              className="col-span-12 lg:col-span-5 relative"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <motion.div
                  className="absolute inset-0"
                  style={{ scale: imageScale, y: imageY }}
                >
                  <Image
                    src="/imgs/cartoon_profile2.jpg"
                    alt="Anaïs Zhang"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F23] via-transparent to-transparent opacity-70" />

                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-[#7C3AED]/30 rounded-2xl" />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                className="absolute -bottom-6 -right-6 lg:-right-12 glass-card p-6 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {/* <div className="flex gap-8">
                  <div className="text-center">
                    <p className="text-3xl font-safira-march gradient-text">
                      5+
                    </p>
                    <p className="text-[#9CA3AF] text-xs font-montserrat mt-1">
                      Years
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-safira-march gradient-text">
                      20+
                    </p>
                    <p className="text-[#9CA3AF] text-xs font-montserrat mt-1">
                      Projects
                    </p>
                  </div>
                </div> */}
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 border-2 border-[#EC4899]/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              className="col-span-12 lg:col-span-7 lg:pl-8 pt-8 lg:pt-16"
              style={{ y: textY }}
            >
              {/* Section Label */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#EC4899]" />
                <span className="text-[#7C3AED] font-montserrat text-sm tracking-widest uppercase">
                  Introduction
                </span>
              </motion.div>

              {/* Large Editorial Headline */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-safira-march leading-[1.1] mb-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="text-[#F8F8FF]">I craft </span>
                <span className="gradient-text">digital</span>
                <br />
                <span className="text-[#F8F8FF]">experiences </span>
                <span className="text-[#F8F8FF]">that</span>
                <br />
                <span className="gradient-text">inspire</span>
              </motion.h1>

              {/* Body Text - Large Editorial Style */}
              <div className="space-y-6 max-w-xl">
                <motion.p
                  className="text-xl lg:text-2xl text-[#F8F8FF] font-anonymous-regular leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  I'm Anaïs, a freelance fullstack developer based in{" "}
                  <span className="text-[#7C3AED] font-bold">
                    Paris, France 🇫🇷
                  </span>
                  .
                </motion.p>

                <motion.p
                  className="text-lg text-[#9CA3AF] font-anonymous-regular leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  I build high-performance, modern websites and web applications
                  for small businesses and solo entrepreneurs. From concept to
                  deployment, I handle everything so you can focus on your
                  business.
                </motion.p>

                <motion.p
                  className="text-lg text-[#9CA3AF] font-anonymous-regular leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  Driven by curiosity and a love for solving complex problems,
                  I'm constantly exploring new technologies and pushing
                  boundaries.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link href="/projects">
                  <motion.button
                    className="px-8 py-4 rounded-lg btn-gradient text-white font-montserrat font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Projects
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A3E]/30 to-transparent" />
        <div className="max-w-5xl mx-auto px-6 sm:px-12 text-center relative z-10">
          <ScrollReveal>
            <blockquote className="relative">
              <span className="absolute -top-8 -left-4 text-8xl text-[#7C3AED]/20 font-safira-march">
                "
              </span>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-safira-march text-[#F8F8FF] leading-tight">
                Let's work together and turn your{" "}
                <span className="gradient-text">vision into reality</span>
              </p>
              <span className="absolute -bottom-12 -right-4 text-8xl text-[#7C3AED]/20 font-safira-march">
                "
              </span>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

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

      {/* Bottom Divider */}
      <div className="flex justify-center py-12">
        <motion.div
          className="w-32 h-1 rounded-full bg-gradient-to-r from-[#06B6D4] via-[#EC4899] to-[#7C3AED]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
}
