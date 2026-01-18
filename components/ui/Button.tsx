"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "gradient" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "gradient",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-montserrat font-medium rounded-lg transition-all duration-300 overflow-hidden";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    gradient:
      "bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4] text-white hover:shadow-lg hover:shadow-[#7C3AED]/30",
    outline:
      "border-2 border-[#7C3AED] text-[#F8F8FF] hover:bg-[#7C3AED] hover:shadow-lg hover:shadow-[#7C3AED]/30",
    ghost:
      "text-[#F8F8FF] hover:bg-[#1A1A3E] hover:text-[#7C3AED]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const MotionComponent = motion.button;

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          className={combinedStyles}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {variant === "gradient" && (
            <span className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4] opacity-0 hover:opacity-100 transition-opacity duration-300" />
          )}
          <span className="relative z-10">{children}</span>
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${combinedStyles} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      whileHover={disabled ? {} : { scale: 1.02, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {variant === "gradient" && (
        <span className="absolute inset-0 bg-gradient-to-r from-[#06B6D4] via-[#EC4899] to-[#7C3AED] opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
