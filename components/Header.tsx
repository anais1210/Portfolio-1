"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClassProps } from "@/app/type";

const navigation = [
  { name: "projects", href: "/projects" },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
];

export default function Header({ className }: ClassProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={className}>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-strong py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative group">
              <motion.div
                className="flex flex-col leading-none"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="gradient-text text-xl font-bold tracking-wider">AN</span>
                <span className="gradient-text text-xl font-bold tracking-wider">ZH</span>
              </motion.div>
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#7C3AED]/20 to-[#EC4899]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-1">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-sm font-montserrat group"
                    >
                      <span
                        className={`relative z-10 transition-colors duration-300 ${
                          isActive
                            ? "text-[#F8F8FF]"
                            : "text-[#9CA3AF] hover:text-[#F8F8FF]"
                        }`}
                      >
                        {item.name}
                      </span>

                      {/* Animated underline */}
                      <motion.span
                        className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4]"
                        initial={{ width: isActive ? "80%" : "0%", x: "-50%" }}
                        whileHover={{ width: "80%" }}
                        animate={{ width: isActive ? "80%" : "0%" }}
                        transition={{ duration: 0.3 }}
                        style={{ translateX: "-50%" }}
                      />

                      {/* Hover glow */}
                      <span className="absolute inset-0 rounded-lg bg-[#7C3AED]/0 group-hover:bg-[#7C3AED]/10 transition-colors duration-300" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="sm:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg glass"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-[#F8F8FF] rounded-full origin-center"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 7 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-[#F8F8FF] rounded-full"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? -20 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-[#F8F8FF] rounded-full origin-center"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -7 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#0F0F23]/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-4 text-4xl font-safira-march transition-colors duration-300 ${
                        isActive
                          ? "gradient-text"
                          : "text-[#9CA3AF] hover:text-[#F8F8FF]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Decorative gradient line */}
              <motion.div
                className="mt-12 w-32 h-1 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#06B6D4]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
