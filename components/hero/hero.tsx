"use client";

import { motion } from "framer-motion";
import HeroContent from "./hero-content";
import HeroGraphic from "./hero-graphic";
import Float from "@/components/animations/float";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-28 lg:pt-36">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[260px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.06),transparent_60%)]" />

      </div>

      <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center gap-20 px-6 lg:flex-row lg:justify-between lg:px-12">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="w-full lg:w-[48%]"
        >
          <HeroContent />
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="flex w-full justify-center lg:w-[52%]"
        >
          <Float>
            <HeroGraphic />
          </Float>
        </motion.div>

      </div>
    </section>
  );
}