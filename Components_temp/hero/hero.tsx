"use client";

import { motion } from "framer-motion";
import HeroContent from "./hero-content";
import HeroGraphic from "./hero-graphic";
import Float from "@/components/animations/float";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]"
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroContent />
        </motion.div>

        {/* Right Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden justify-center lg:flex"
        >
          <Float>
            <HeroGraphic />
          </Float>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Scroll
          </p>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            className="mt-3 text-2xl text-cyan-400"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}