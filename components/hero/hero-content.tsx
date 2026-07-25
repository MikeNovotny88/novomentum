"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="max-w-4xl">

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0,
        }}
        className="mb-10"
      >
        <Image
          src="/logot.png"
          alt="Novomentum"
          width={460}
          height={140}
          priority
          className="h-auto w-[340px] lg:w-[420px]"
        />
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
        }}
      >
        <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            AI • AUTOMATION • MICROSOFT 365
          </span>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="mt-10 text-6xl font-black leading-[0.9] tracking-tight md:text-7xl xl:text-[7.5rem]"
      >
        Modern Technology.
        <br />
        Practical AI.
        <br />
        <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
          Real Results.
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.35,
        }}
        className="mt-10 max-w-2xl text-xl leading-9 text-slate-300"
      >
        We help businesses modernize Microsoft 365, deploy secure AI
        solutions, automate repetitive work, and build technology that
        delivers measurable business outcomes.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="mt-12 flex flex-wrap gap-5"
      >
        <Button href="/contact">
          Book Free Strategy Call
        </Button>

        <Button href="/solutions" variant="secondary">
          View Services
        </Button>
      </motion.div>

    </div>
  );
}