"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroGraphic from "@/components/ui/hero-graphic";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/logot.png"
              alt="Novomentum"
              width={360}
              height={180}
              priority
              className="mb-10 h-auto w-[340px]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold tracking-tight leading-[0.92] md:text-7xl lg:text-8xl"
          >
            Creating
            <br />
            Momentum
            <br />
            Through
            <br />
            <span className="text-cyan-400">
              Technology & AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 max-w-xl text-lg leading-8 text-slate-300"
          >
            Helping businesses adopt AI, automate workflows,
            modernize Microsoft 365 environments, and build
            intelligent technology solutions that create real,
            measurable momentum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <button className="rounded-xl bg-cyan-400 px-8 py-5 text-lg font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,211,238,.35)]">
              Schedule AI Strategy Session →
            </button>

            <button className="rounded-xl border border-cyan-500/30 bg-white/5 px-8 py-5 text-lg backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:bg-white/10">
              Explore Solutions
            </button>
          </motion.div>

        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden justify-center lg:flex"
        >
          <HeroGraphic />
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
      >
        <div className="text-xs uppercase tracking-[0.35em] text-slate-500">
          Scroll
        </div>

        <div className="mt-3 text-cyan-400 animate-bounce text-2xl">
          ↓
        </div>
      </motion.div>
    </section>
  );
}