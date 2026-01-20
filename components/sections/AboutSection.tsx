"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <div ref={sectionRef} className="relative bg-[#0F0F23]">
      {/* Magazine/Editorial Layout */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Large Background Text */}
        <motion.div
          className="absolute top-20 -left-10 text-[20vw] font-safira-march text-[#1A1A3E] select-none pointer-events-none leading-none"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          ABOUT
        </motion.div>

        {/* Main Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-32">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left Column - Large Image */}
            <motion.div
              className="col-span-12 lg:col-span-5 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <motion.div
                  style={{ scale: imageScale }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/imgs/cartoon.png"
                    alt="Anaïs Zhang"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F23] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating accent card */}
              {/* <motion.div
                className="absolute -bottom-8 -right-8 glass-card p-6 rounded-xl max-w-[200px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-4xl font-safira-march gradient-text">5+</p>
                <p className="text-[#9CA3AF] text-sm font-montserrat mt-1">
                  Years of Experience
                </p>
              </motion.div> */}
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              className="col-span-12 lg:col-span-7 lg:pl-12 pt-12 lg:pt-24"
              style={{ x: textX }}
            >
              {/* Section Label */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#EC4899]" />
                <span className="text-[#7C3AED] font-montserrat text-sm tracking-widest uppercase">
                  About Me
                </span>
              </motion.div>

              {/* Large Headline */}
              <motion.h2
                className="text-5xl sm:text-6xl lg:text-7xl font-safira-march leading-tight mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="text-[#F8F8FF]">Crafting </span>
                <span className="gradient-text">digital</span>
                <br />
                <span className="text-[#F8F8FF]">experiences with </span>
                <span className="gradient-text">code</span>
              </motion.h2>

              {/* Body Text - Editorial Style */}
              <div className="space-y-6 font-anonymous-regular text-lg">
                <motion.p
                  className="text-[#F8F8FF] text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  I'm Anaïs — a freelance fullstack developer from{" "}
                  <span className="text-[#7C3AED]">Paris, France 🇫🇷</span>. I
                  transform ideas into high-performance, modern web
                  applications.
                </motion.p>

                <motion.p
                  className="text-[#9CA3AF] leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  From front-end finesse to back-end architecture, I handle the
                  complete development cycle.
                </motion.p>

                <motion.p
                  className="text-[#9CA3AF] leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Driven by curiosity and a passion for solving complex
                  problems, I'm constantly exploring new technologies and
                  pushing the boundaries of what's possible on the web.
                </motion.p>
              </div>

              {/* CTA */}
              <motion.div
                className="mt-12 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
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
                    Let's Talk
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote/Highlight Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 text-center">
          <motion.blockquote
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Large quote marks */}
            <span className="absolute -top-8 -left-4 text-8xl text-[#7C3AED]/20 font-safira-march">
              "
            </span>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-safira-march text-[#F8F8FF] leading-tight">
              Let's work together and make your{" "}
              <span className="gradient-text">project real</span>
            </p>
            <span className="absolute -bottom-12 -right-4 text-8xl text-[#7C3AED]/20 font-safira-march">
              "
            </span>
          </motion.blockquote>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 border-t border-b border-[#1A1A3E]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "Things Shipped" },
              { value: "Fast", label: "Learning Curve" },
              { value: "∞", label: "Curiosity" },
              { value: "Daily", label: "Consistency" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <p className="text-4xl sm:text-5xl font-safira-march gradient-text">
                  {stat.value}
                </p>
                <p className="text-[#9CA3AF] font-montserrat text-sm mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
