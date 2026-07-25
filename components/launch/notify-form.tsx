"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function NotifyForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mx-auto mt-20 max-w-3xl"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-cyan-500/20
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_0_50px_rgba(34,211,238,.08)]
          p-2
        "
      >
        {/* Animated glow */}

        <div className="absolute inset-y-0 -left-40 w-40 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-xl animate-[pulse_6s_ease-in-out_infinite]" />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative flex flex-col gap-3 md:flex-row"
        >
          <div className="relative flex-1">
            <Mail
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300"
            />

            <input
              type="email"
              placeholder="Enter your email for launch updates"
              className="
                w-full
                rounded-2xl
                bg-transparent
                py-5
                pl-14
                pr-5
                text-white
                placeholder:text-slate-500
                outline-none
              "
            />
          </div>

          <button
            className="
              rounded-2xl
              bg-gradient-to-r
              from-cyan-400
              to-cyan-500
              px-10
              py-5
              font-bold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(34,211,238,.45)]
            "
          >
            Notify Me
          </button>
        </form>
      </div>

      <p className="mt-5 text-center text-sm text-slate-500">
        Be the first to know when Novomentum launches.
      </p>
    </motion.div>
  );
}