"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 120, y: 120 },
  { x: 220, y: 70 },
  { x: 360, y: 80 },
  { x: 500, y: 140 },
  { x: 150, y: 240 },
  { x: 280, y: 220 },
  { x: 430, y: 240 },
  { x: 540, y: 320 },
  { x: 180, y: 380 },
  { x: 320, y: 360 },
  { x: 470, y: 420 },
  { x: 260, y: 520 },
  { x: 410, y: 520 },
];

const connections = [
  [0,1],[1,2],[2,3],
  [0,4],[1,5],[2,5],[3,6],
  [4,5],[5,6],[6,7],
  [4,8],[5,9],[6,10],
  [8,9],[9,10],
  [8,11],[9,11],[9,12],[10,12],
];

export default function HeroGraphic() {
  return (
    <div className="relative h-[760px] w-[760px]">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.8, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[220px]"
      />

      {/* Rotating Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
      />

      {/* AI Network */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
      >
        {connections.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(34,211,238,.22)"
            strokeWidth="2"
            animate={{
              opacity: [0.15, 0.7, 0.15],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: i * 0.08,
            }}
          />
        ))}

        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="6"
            fill="#22D3EE"
            animate={{
              r: [6, 9, 6],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              delay: i * 0.15,
            }}
          />
        ))}
      </svg>

      {/* Outer Pulse Rings */}
      {[220, 280, 340].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-cyan-400/20"
          style={{
            width: size,
            height: size,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Center Core */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_140px_rgba(34,211,238,.7)]"
      />

      {/* Inner Core */}
      <motion.div
        animate={{
          scale: [1, 0.85, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </div>
  );
}