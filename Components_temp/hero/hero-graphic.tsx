"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 120, y: 120 },
  { x: 260, y: 80 },
  { x: 420, y: 140 },
  { x: 180, y: 260 },
  { x: 330, y: 240 },
  { x: 500, y: 300 },
  { x: 240, y: 420 },
  { x: 420, y: 440 },
];

const connections = [
  [0,1],
  [1,2],
  [0,3],
  [1,4],
  [2,4],
  [3,4],
  [4,5],
  [3,6],
  [4,7],
  [6,7],
];

export default function HeroGraphic() {
  return (
    <div className="relative h-[650px] w-[650px]">

      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [.5,.8,.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[170px]"
      />

      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
      >

        {/* Connection Lines */}
        {connections.map(([a,b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(34,211,238,.18)"
            strokeWidth="1.5"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [.15,.45,.15],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              delay: i * .15,
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node,i)=>(
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="7"
            fill="#22D3EE"
            animate={{
              r:[7,9,7],
              opacity:[.7,1,.7],
            }}
            transition={{
              repeat:Infinity,
              duration:3,
              delay:i*.25,
            }}
          />
        ))}

      </svg>

      {/* Center Orb */}
      <motion.div
        animate={{
          scale:[1,1.12,1],
        }}
        transition={{
          repeat:Infinity,
          duration:5,
        }}
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_80px_rgba(34,211,238,.5)]"
      />

    </div>
  );
}