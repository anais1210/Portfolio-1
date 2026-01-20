"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { ScrollReveal } from "@/components/animations";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:azhang.pro@gmail.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "zhanais.dev@gmail.com",
  },
  {
    name: "GitHub",
    href: "https://github.com/anaiszhang",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/anaiszhang",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      );

      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Error sending message. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 sm:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.h1
            className="contact-title font-safira-march mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#F8F8FF]">Let's </span>
            <span className="gradient-text">chat!</span>
          </motion.h1>
          <motion.p
            className="text-[#9CA3AF] font-anonymous-regular text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Have a project in mind? Let's build something amazing together.
            Share your ideas with me, and we'll get started!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Info & Social Links */}
          <div className="space-y-8">
            <ScrollReveal>
              <h2 className="text-2xl font-safira-march text-[#F8F8FF] mb-6">
                Get in touch
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <ScrollReveal key={link.name} delay={index * 0.1}>
                  <a
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={
                      link.name !== "Email" ? "noopener noreferrer" : undefined
                    }
                  >
                    <motion.div
                      className="group flex items-center gap-4 p-4 glass-card rounded-xl cursor-pointer"
                      whileHover={{ x: 8, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center text-white">
                        {link.icon}
                      </div>
                      <div>
                        <p className="text-[#9CA3AF] text-sm font-montserrat">
                          {link.name}
                        </p>
                        <p className="text-[#F8F8FF] font-anonymous-regular group-hover:text-[#7C3AED] transition-colors">
                          {link.label}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 ml-auto text-[#9CA3AF] group-hover:text-[#7C3AED] transition-colors"
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
                    </motion.div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* Decorative element */}
            <ScrollReveal delay={0.4}>
              <div className="relative mt-12 p-6 glass-card rounded-xl overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#7C3AED]/30 to-[#EC4899]/30 rounded-full blur-2xl" />
                <p className="relative text-[#F8F8FF] font-anonymous-regular text-lg">
                  "Great things happen when creativity meets code."
                </p>
                <p className="relative text-[#7C3AED] font-montserrat text-sm mt-2">
                  — Let's create something amazing
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              {/* Glow effect behind form */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED]/20 via-[#EC4899]/20 to-[#06B6D4]/20 rounded-3xl blur-2xl" />

              <form
                onSubmit={handleSubmit}
                className="relative glass-card p-8 rounded-2xl space-y-6"
              >
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-montserrat text-[#9CA3AF] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg input-dark font-anonymous-regular focus:border-[#7C3AED] transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-montserrat text-[#9CA3AF] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg input-dark font-anonymous-regular focus:border-[#7C3AED] transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-montserrat text-[#9CA3AF] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg input-dark font-anonymous-regular focus:border-[#7C3AED] transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-montserrat text-[#9CA3AF] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-4 rounded-lg input-dark font-anonymous-regular focus:border-[#7C3AED] transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg btn-gradient text-white font-montserrat font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
