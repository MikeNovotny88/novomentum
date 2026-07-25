"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 80, y: 80 },
  { x: 240, y: 120 },
  { x: 420, y: 80 },
  { x: 140, y: 280 },
  { x: 320, y: 240 },
  { x: 480, y: 320 },
  { x: 220, y: 440 },
  { x: 420, y: 460 },
];

export default function HeroGraphic() {
  return (
    <div className="relative h-[650px] w-[650px]">

      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[160px]" />

      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
      >
        {/* Connection Lines */}
        {nodes.map((node, index) =>
          nodes.slice(index + 1).map((target, i) => (
            <motion.line
              key={`${index}-${i}`}
              x1={node.x}
              y1={node.y}
              x2={target.x}
              y2={target.y}
              stroke="rgba(34,211,238,.08)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.05,
                duration: 1,
              }}
            />
          ))
        )}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="6"
            fill="#22d3ee"
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>

      {/* Center Orb */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_80px_rgba(34,211,238,.45)]"
      />

    </div>
  );
}