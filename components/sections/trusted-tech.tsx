import {
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Database,
  Bot,
  Cpu,
} from "lucide-react";

import Reveal from "@/components/animations/reveal";
import SectionTitle from "@/components/shared/section-title";

const technologies = [
  {
    name: "Microsoft 365",
    icon: ShieldCheck,
  },
  {
    name: "Microsoft Copilot",
    icon: Bot,
  },
  {
    name: "Azure",
    icon: Cloud,
  },
  {
    name: "OpenAI",
    icon: BrainCircuit,
  },
  {
    name: "Cloudflare",
    icon: Cpu,
  },
  {
    name: "Business Integrations",
    icon: Database,
  },
];

export default function TrustedTech() {
  return (
    <Reveal>
      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <SectionTitle
            eyebrow="Technology"
            title="Powered by trusted platforms."
            description="We build modern business solutions using enterprise technologies trusted around the world."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.12)]"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-cyan-400/10 p-4">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {tech.name}
                  </h3>
                </div>
              );
            })}

          </div>

        </div>

      </section>
    </Reveal>
  );
}