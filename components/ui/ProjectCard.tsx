"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  tags?: string[];
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  href,
  tags = [],
  size = "medium",
  className = "",
}: ProjectCardProps) {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    large: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  };

  return (
    <Link href={href}>
      <motion.article
        className={`group relative overflow-hidden rounded-2xl glass-card ${sizeClasses[size]} ${className}`}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Image */}
        <div className="relative w-full h-full min-h-[300px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover grayscale-hover transition-all duration-500 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F23] via-[#0F0F23]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#7C3AED]/20 via-transparent to-[#06B6D4]/20" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-montserrat rounded-full bg-[#7C3AED]/30 text-[#F8F8FF] border border-[#7C3AED]/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-2xl font-safira-march text-[#F8F8FF] mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#9CA3AF] font-anonymous-regular text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
            {description}
          </p>

          {/* View project indicator */}
          <div className="flex items-center gap-2 mt-4 text-[#7C3AED] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
            <span className="text-sm font-montserrat">View Project</span>
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
  );
}
