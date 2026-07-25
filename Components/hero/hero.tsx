"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroGraphic from "@/components/hero/hero-graphic";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            <Image
              src="/logot.png"
              alt="Novomentum"
              width={360}
              height={140}
              priority
              className="mb-12 h-auto w-[320px]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-6xl font-black leading-[0.9] md:text-7xl lg:text-8xl"
          >
            AI That
            <br />
            Creates
            <br />
            <span className="text-cyan-400">
              Momentum.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .35 }}
            className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
Helping businesses modernize Microsoft 365, deploy AI agents,
automate workflows, and implement intelligent technology
that creates measurable business growth.
</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .55 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <button className="rounded-xl bg-cyan-400 px-8 py-5 text-lg font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,.35)]">
              Schedule Strategy Session
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-5 text-lg backdrop-blur transition hover:border-cyan-400 hover:bg-white/10">
              Explore Solutions
            </button>
          </motion.div>

        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden justify-center lg:flex"
        >
          <HeroGraphic />
        </motion.div>

      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
          Scroll
        </p>

        <div className="mt-3 animate-bounce text-2xl text-cyan-400">
          ↓
        </div>
      </motion.div>
    </section>
  );
}