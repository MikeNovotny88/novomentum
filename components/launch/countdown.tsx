"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const launchDate = new Date("2026-10-01T00:00:00");

export default function Countdown() {
  const [time, setTime] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = launchDate.getTime() - Date.now();

    const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));
    const hours = Math.max(
      0,
      Math.floor((total / (1000 * 60 * 60)) % 24)
    );
    const minutes = Math.max(
      0,
      Math.floor((total / (1000 * 60)) % 60)
    );
    const seconds = Math.max(
      0,
      Math.floor((total / 1000) % 60)
    );

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15 * index,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            p-8
            backdrop-blur-xl
            shadow-[0_0_35px_rgba(34,211,238,.08)]
            transition-all
            duration-300
          "
        >
          <div className="text-center">

            <div className="text-6xl font-black text-cyan-300">
              {String(item.value).padStart(2, "0")}
            </div>

            <div className="mt-3 uppercase tracking-[0.35em] text-slate-400 text-xs">
              {item.label}
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
}