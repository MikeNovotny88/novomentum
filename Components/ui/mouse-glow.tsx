"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x);
  const mouseY = useSpring(y);

  return (
    <motion.div
      onMouseMove={(e) => {
        x.set(e.clientX - 250);
        y.set(e.clientY - 250);
      }}
      style={{
        x: mouseX,
        y: mouseY,
      }}
      className="pointer-events-none fixed z-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]"
    />
  );
}