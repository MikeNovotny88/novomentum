"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LaunchHero() {
  return (
    <section className="relative text-center">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-6 -translate-x-1/2">
        <div className="h-[420px] w-[700px] rounded-full bg-cyan-400/15 blur-[170px]" />
      </div>

      {/* Logo */}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10"
      >
        <Image
          src="/launchlogo.png"
          alt="Novomentum"
          width={900}
          height={520}
          priority
          className="
            mx-auto
            w-[420px]
            md:w-[620px]
            lg:w-[700px]
            drop-shadow-[0_0_60px_rgba(34,211,238,.55)]
            animate-pulse
          "
        />
      </motion.div>

      {/* Launch Badge */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: .35,
        }}
        className="relative z-10 mt-6"
      >
        <div
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-cyan-400/25
            bg-cyan-500/10
            px-8
            py-3
            backdrop-blur-xl
          "
        >
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300">
            Launching Soon
          </span>
        </div>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: .5,
          duration: .8,
        }}
        className="relative z-10 mt-10"
      >
        <span className="block text-5xl font-black text-white md:text-7xl xl:text-8xl">
          Creating Momentum
        </span>

        <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl xl:text-8xl">
          Through Technology & AI
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: .75,
        }}
        className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl"
      >
        Modern technology consulting built for businesses ready to
        accelerate growth through Artificial Intelligence,
        Microsoft 365, Cloud Infrastructure, Automation,
        and Digital Transformation.
      </motion.p>

    </section>
  );
}