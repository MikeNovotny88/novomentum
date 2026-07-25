"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Workflow,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Reveal from "@/components/animations/reveal";

const stats = [
  {
    icon: BrainCircuit,
    title: "Practical AI",
    description:
      "Implement AI solutions that solve real business problems instead of chasing trends.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Reduce manual work and connect your business systems with intelligent automation.",
  },
  {
    icon: ShieldCheck,
    title: "Microsoft 365",
    description:
      "Modernize collaboration with Microsoft 365, Copilot, Teams, and SharePoint.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Use technology as a competitive advantage to improve efficiency and scale confidently.",
  },
];

export default function Stats() {
  return (
    <Reveal>
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.12)]"
                >
                  <div className="mb-8 inline-flex rounded-2xl bg-cyan-400/10 p-4">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {stat.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>
      </section>
    </Reveal>
  );
}