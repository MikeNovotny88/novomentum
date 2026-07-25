"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Center Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left Glow */}
      <motion.div
        className="absolute -left-48 top-24 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px]"
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Glow */}
      <motion.div
        className="absolute -right-48 bottom-24 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]"
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top Glow */}
      <motion.div
        className="absolute left-1/3 -top-32 h-[350px] w-[350px] rounded-full bg-cyan-300/10 blur-[120px]"
        animate={{
          y: [-20, 30, -20],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
}