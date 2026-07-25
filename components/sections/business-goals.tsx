"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/shared/section-title";
import Button from "@/components/ui/button";

const goals = [
  {
    title: "AI Strategy",
    heading: "Build an AI roadmap with confidence.",
    description:
      "We identify practical AI opportunities that align with your business goals and deliver measurable results.",
    bullets: [
      "AI Readiness Assessment",
      "Executive Strategy Workshops",
      "Implementation Roadmap",
      "ROI Planning",
    ],
  },
  {
    title: "Workflow Automation",
    heading: "Eliminate repetitive work.",
    description:
      "Automate manual business processes using Microsoft Power Automate, AI, and cloud integrations.",
    bullets: [
      "Power Automate",
      "Approval Workflows",
      "Document Automation",
      "System Integrations",
    ],
  },
  {
    title: "Microsoft 365",
    heading: "Get more from Microsoft 365.",
    description:
      "Modernize collaboration with Teams, SharePoint, Copilot, Exchange Online, and the Power Platform.",
    bullets: [
      "Microsoft Copilot",
      "SharePoint",
      "Teams",
      "Security & Compliance",
    ],
  },
  {
    title: "AI Agents",
    heading: "Put AI to work for your business.",
    description:
      "Deploy intelligent AI assistants that answer questions, automate tasks, and improve customer experiences.",
    bullets: [
      "Custom AI Agents",
      "Knowledge Bases",
      "Customer Support",
      "Internal Assistants",
    ],
  },
  {
    title: "CRM & Integrations",
    heading: "Connect your business systems.",
    description:
      "Bring together CRM, email, Microsoft 365, and third-party applications into one connected workflow.",
    bullets: [
      "HubSpot",
      "Salesforce",
      "Microsoft Dynamics",
      "API Integrations",
    ],
  },
];

export default function BusinessGoals() {
  const [selected, setSelected] = useState(goals[0]);

  return (
    <section
      id="solutions"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Solutions"
          title="Technology built around your business."
          description="Choose a solution to see how Novomentum can help your organization create momentum."
        />

        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">

          {/* Left Menu */}

          <div className="space-y-3">

            {goals.map((goal) => (
              <button
                key={goal.title}
                onClick={() => setSelected(goal)}
                className={`group w-full rounded-2xl border p-6 text-left transition-all duration-300 ${
                  selected.title === goal.title
                    ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,.15)]"
                    : "border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">

                  <h3 className="text-lg font-semibold">
                    {goal.title}
                  </h3>

                  <ArrowRight
                    className={`h-5 w-5 transition-transform ${
                      selected.title === goal.title
                        ? "translate-x-1 text-cyan-400"
                        : "text-slate-500 group-hover:text-cyan-400"
                    }`}
                  />

                </div>

              </button>
            ))}

          </div>

          {/* Right Panel */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              {selected.title}
            </p>

            <h3 className="mt-4 text-5xl font-black leading-tight">
              {selected.heading}
            </h3>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-400">
              {selected.description}
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {selected.bullets.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-12">

              <Button href="#contact">
                Book Free Strategy Call
              </Button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}