"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, TrendingUp, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Bot,
    value: "AI",
    label: "Business Solutions",
  },
  {
    icon: Workflow,
    value: "100%",
    label: "Custom Automation",
  },
  {
    icon: TrendingUp,
    value: "24/7",
    label: "AI Productivity",
  },
  {
    icon: ShieldCheck,
    value: "365",
    label: "Microsoft Expertise",
  },
];

export default function Stats() {
  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card text-center p-10"
            >
              <Icon className="mx-auto mb-6 h-10 w-10 text-cyan-400" />

              <h3 className="text-5xl font-black">
                {stat.value}
              </h3>

              <p className="mt-4 text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}