"use client";

import { motion } from "framer-motion";
import Stars from "@/components/effects/stars";
import Aurora from "@/components/effects/aurora";
import MouseGlow from "@/components/effects/mouse-glow";
import Particles from "@/components/effects/particles";

import LaunchHero from "@/components/launch/hero";
import Countdown from "@/components/launch/countdown";
import NotifyForm from "@/components/launch/notify-form";
import SocialLinks from "@/components/launch/social-links";

export default function LaunchPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03070c] text-white">

      {/* Background */}
      <Aurora />
      <Stars />
      <Particles />
      <MouseGlow />

      {/* Large Aurora Glow */}
      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[180px]" />

      {/* Left Glow */}
      <div className="absolute -left-64 top-32 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* Right Glow */}
      <div className="absolute -right-64 bottom-32 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at center, white 20%, transparent 90%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
            relative
            w-full
            max-w-6xl
            overflow-hidden
            rounded-[42px]
            border
            border-cyan-400/20
            bg-[#08111a]/75
            backdrop-blur-3xl
            shadow-[0_0_120px_rgba(0,220,255,.18)]
            lg:p-20
            p-10
          "
        >

          {/* Neon Top Line */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-px
              w-96
              -translate-x-1/2
              bg-cyan-400
              blur-sm
            "
          />

          {/* Glass Border */}

          <div
            className="
              absolute
              inset-0
              rounded-[42px]
              border
              border-cyan-400/10
              pointer-events-none
            "
          />

          {/* Corner Glow */}

          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

          <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

          <LaunchHero />

          <Countdown />

          <NotifyForm />

          <SocialLinks />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
            }}
            className="mt-16 border-t border-white/10 pt-10 text-center"
          >
            <p className="text-xs uppercase tracking-[0.45em] text-cyan-400/70">
              Proudly Built in Idaho
            </p>

            <p className="mt-5 text-sm text-slate-500">
              © {new Date().getFullYear()} Novomentum LLC
            </p>

          </motion.div>

        </motion.div>

      </div>

    </main>
  );
}