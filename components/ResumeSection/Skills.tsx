"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "@/components/animations";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Go", icon: "devicon-go-original-wordmark colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
    ],
  },
  {
    title: "Blockchain Development",
    skills: [
      { name: "Solidity", icon: "devicon-solidity-plain" },
      { name: "IPFS", icon: "", isImage: true, src: "/imgs/ipfs.png" },
      { name: "Hardhat", icon: "devicon-hardhat-plain colored" },
    ],
  },
  {
    title: "Framework & Tools",
    skills: [
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "Oracle", icon: "devicon-oracle-original colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
    ],
  },
];

interface SkillCardProps {
  category: typeof skillCategories[0];
  index: number;
}

function SkillCard({ category, index }: SkillCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        className="group relative glass-card p-6 rounded-2xl overflow-hidden"
        whileHover={{
          y: -5,
          rotateX: 5,
          rotateY: -5,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#06B6D4]/10 pointer-events-none" />

        {/* Border glow */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#7C3AED]/30 transition-colors duration-300 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-safira-march text-[#F8F8FF] mb-6 group-hover:gradient-text transition-all duration-300">
            {category.title}
          </h3>

          <div className="flex flex-wrap gap-4">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center gap-2 group/skill"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: skillIndex * 0.05 + 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="relative w-12 h-12 flex items-center justify-center rounded-lg bg-[#1A1A3E] group-hover/skill:bg-[#7C3AED]/20 transition-colors duration-300">
                  {skill.isImage ? (
                    <Image
                      src={skill.src || ""}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="grayscale group-hover/skill:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <i
                      className={`${skill.icon} text-3xl grayscale group-hover/skill:grayscale-0 transition-all duration-300`}
                    />
                  )}
                </div>
                <span className="text-xs font-montserrat text-[#9CA3AF] group-hover/skill:text-[#F8F8FF] transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Skills() {
  return (
    <section className="py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-safira-march gradient-text mb-4">
              Skills & Technologies
            </h2>
            <p className="text-[#9CA3AF] font-anonymous-regular max-w-2xl mx-auto">
              A collection of technologies I work with to bring ideas to life
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
