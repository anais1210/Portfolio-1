"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { prompt: "~", command: "whoami", output: "anais.zhang" },
  { prompt: "~", command: "cat skills.json", output: '{ "frontend": "React, Next.js, TypeScript" }' },
  { prompt: "~", command: "cat skills.json | jq .backend", output: '"Node.js, Python, Go"' },
  { prompt: "~", command: "echo $LOCATION", output: "Paris, France 🇫🇷" },
  { prompt: "~", command: "cat status.txt", output: "Available for freelance projects ✨" },
];

interface TerminalLineProps {
  line: typeof codeLines[0];
  index: number;
  onComplete: () => void;
  isActive: boolean;
}

function TerminalLine({ line, index, onComplete, isActive }: TerminalLineProps) {
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= line.command.length) {
        setDisplayedCommand(line.command.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowOutput(true);
          setCursorVisible(false);
          setTimeout(onComplete, 300);
        }, 200);
      }
    }, 50 + Math.random() * 30);

    return () => clearInterval(typeInterval);
  }, [isActive, line.command, onComplete]);

  // Cursor blink
  useEffect(() => {
    if (!isActive || showOutput) return;
    const blinkInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, [isActive, showOutput]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="mb-2"
    >
      {/* Command line */}
      <div className="flex items-center gap-2">
        <span className="text-[#06B6D4]">{line.prompt}</span>
        <span className="text-[#EC4899]">❯</span>
        <span className="text-[#F8F8FF]">
          {displayedCommand}
          {isActive && !showOutput && (
            <span
              className={`inline-block w-2 h-4 bg-[#7C3AED] ml-0.5 ${
                cursorVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </span>
      </div>

      {/* Output */}
      {showOutput && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#9CA3AF] pl-6 mt-1"
        >
          {line.output}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Terminal() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleLineComplete = () => {
    if (activeLineIndex < codeLines.length - 1) {
      setActiveLineIndex((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  // Restart animation after completion
  useEffect(() => {
    if (isComplete) {
      const restartTimeout = setTimeout(() => {
        setActiveLineIndex(0);
        setIsComplete(false);
      }, 4000);
      return () => clearTimeout(restartTimeout);
    }
  }, [isComplete]);

  return (
    <motion.div
      className="w-full max-w-lg glass-card rounded-xl overflow-hidden font-mono text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A3E]/80 border-b border-[#7C3AED]/20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EC4899]" />
          <div className="w-3 h-3 rounded-full bg-[#06B6D4]" />
          <div className="w-3 h-3 rounded-full bg-[#7C3AED]" />
        </div>
        <span className="text-[#9CA3AF] text-xs ml-2">anais@portfolio ~ zsh</span>
      </div>

      {/* Terminal content */}
      <div className="p-4 min-h-[200px]">
        {codeLines.slice(0, activeLineIndex + 1).map((line, index) => (
          <TerminalLine
            key={`${index}-${activeLineIndex === 0 ? "restart" : "running"}`}
            line={line}
            index={index}
            isActive={index === activeLineIndex && !isComplete}
            onComplete={handleLineComplete}
          />
        ))}

        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 pt-4 border-t border-[#7C3AED]/20 text-center"
          >
            <span className="text-[#7C3AED] text-xs">↓ Scroll to explore ↓</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
