"use client";

import { useState } from "react";
import SectionTitle from "@/components/shared/section-title";
import Button from "@/components/ui/button";

const goals = [
  {
    title: "Increase Productivity",
    heading: "Empower your team with AI.",
    description:
      "Automate repetitive tasks, streamline communication, and give employees more time to focus on meaningful work.",
  },
  {
    title: "Automate Workflows",
    heading: "Remove manual processes.",
    description:
      "Connect systems, eliminate duplicate work, and build intelligent workflows that run automatically.",
  },
  {
    title: "Grow Sales",
    heading: "Close more business.",
    description:
      "Use AI to qualify leads, automate follow-ups, and improve customer engagement.",
  },
  {
    title: "Modernize Microsoft 365",
    heading: "Unlock Microsoft Copilot.",
    description:
      "Get more value from Microsoft 365 with Copilot, SharePoint, Teams, and Power Platform.",
  },
  {
    title: "Business Intelligence",
    heading: "Make smarter decisions.",
    description:
      "Turn business data into dashboards, insights, and forecasts with AI-powered analytics.",
  },
];

export default function BusinessGoals() {
  const [selected, setSelected] = useState(goals[0]);

  return (
    <section id="solutions" className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Business Outcomes"
          title="Where do you want to create momentum?"
          description="Select your biggest opportunity and discover how AI can help."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="space-y-4">
            {goals.map((goal) => (
              <button
                key={goal.title}
                onClick={() => setSelected(goal)}
                className={`w-full rounded-2xl border p-6 text-left transition-all duration-300 ${
                  selected.title === goal.title
                    ? "border-cyan-400 bg-cyan-400/10"
                    : "border-white/10 bg-white/5 hover:border-cyan-400"
                }`}
              >
                <h3 className="text-xl font-semibold">
                  {goal.title}
                </h3>
              </button>
            ))}
          </div>

          <div className="card flex flex-col justify-center p-10">

            <h3 className="text-4xl font-black">
              {selected.heading}
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              {selected.description}
            </p>

            <div className="mt-10">
              <Button href="#contact">
                Schedule Strategy Session
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}