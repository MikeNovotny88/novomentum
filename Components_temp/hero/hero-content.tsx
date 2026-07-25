"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400"
      >
        AI • AUTOMATION • MICROSOFT 365
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="text-6xl font-black leading-[0.9] tracking-tight md:text-7xl lg:text-8xl"
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
        className="mt-10 max-w-xl text-xl leading-9 text-slate-300"
      >
        Helping businesses modernize Microsoft 365,
        automate operations, deploy AI agents,
        and build intelligent technology that drives measurable growth.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .5 }}
        className="mt-12 flex flex-wrap gap-5"
      >
        <Button href="#contact">
          Schedule Strategy Session
        </Button>

        <Button
          href="#solutions"
          variant="secondary"
        >
          Explore Solutions
        </Button>
      </motion.div>

    </div>
  );
}