"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
      className="mt-16 flex items-center justify-center gap-8"
    >
      <a
        href="https://github.com/MikeNovotny88"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/10 bg-white/5 p-4 text-slate-400 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
      >
        <FaGithub size={26} />
      </a>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/10 bg-white/5 p-4 text-slate-400 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
      >
        <FaLinkedin size={26} />
      </a>
    </motion.div>
  );
}