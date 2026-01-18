"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Skills from "@/components/ResumeSection/Skills";
import { ScrollReveal } from "@/components/animations";

function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
        {/* Vertical "ABOUT" text on left edge */}
        <motion.div
          className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="vertical-text text-8xl font-safira-march text-outline opacity-20 tracking-widest">
            ABOUT
          </span>
        </motion.div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              className="order-2 lg:order-1"
              style={{ y: textY }}
            >
              <motion.h1
                className="about-title font-safira-march gradient-text mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                About Me
              </motion.h1>

              <div className="space-y-6 font-anonymous-regular font-content text-[#9CA3AF]">
                <ScrollReveal delay={0.3}>
                  <p className="text-[#F8F8FF]">
                    Hello, I&apos;m Anaïs — a freelance fullstack developer. I build
                    high-performance, modern websites and web applications for small
                    businesses and solo entrepreneurs.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <p>
                    I do both the front-end and back-end myself, so my clients get
                    completed, ready-to-launch solutions without the tech headache.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <p>
                    Driven by curiosity and a love for solving complex problems, I am
                    constantly exploring new technologies and honing my skills.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.6}>
                  <p>
                    Currently based in <span className="text-[#7C3AED]">Paris</span>, I am open to freelance collaborations
                    and opportunities where I can continue to grow and contribute to
                    the development community.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.7}>
                  <p className="text-[#F8F8FF] text-lg">
                    Let&apos;s work together and make your idea happen!
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.8}>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/projects">
                    <motion.button
                      className="px-6 py-3 rounded-lg btn-gradient text-white font-montserrat font-medium"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Projects
                    </motion.button>
                  </Link>
                  <Link href="/contact">
                    <motion.button
                      className="px-6 py-3 rounded-lg btn-outline font-montserrat font-medium"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get In Touch
                    </motion.button>
                  </Link>
                </div>
              </ScrollReveal>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              style={{ y: imageY }}
            >
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4] rounded-full blur-2xl opacity-30 animate-pulse-glow" />

                {/* Image container with blob mask effect */}
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-2 border-[#7C3AED]/30">
                  <Image
                    src="/imgs/profile.JPG"
                    alt="Profile"
                    fill
                    className="object-cover grayscale-hover"
                    priority
                  />
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#7C3AED]/50 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#EC4899] to-[#06B6D4] rounded-full opacity-60"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-12">
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

export default About;
