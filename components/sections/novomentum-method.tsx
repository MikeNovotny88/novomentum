"use client";

import {
  Search,
  Rocket,
  Workflow,
  TrendingUp,
} from "lucide-react";

import Reveal from "@/components/animations/reveal";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We learn how your business operates, identify bottlenecks, and uncover opportunities where technology can create measurable value.",
  },
  {
    icon: Rocket,
    title: "Modernize",
    description:
      "Upgrade Microsoft 365, cloud infrastructure, collaboration tools, and security to build a strong technology foundation.",
  },
  {
    icon: Workflow,
    title: "Automate",
    description:
      "Eliminate repetitive work using AI, Microsoft Copilot, Power Automate, and intelligent business workflows.",
  },
  {
    icon: TrendingUp,
    title: "Accelerate",
    description:
      "Measure results, optimize processes, and continue improving so technology keeps delivering business value.",
  },
];

export default function NovomentumMethod() {
  return (
    <Reveal>
      <Section>
        <Container>
          <div className="text-center">

            <Badge>
              The Novomentum Method
            </Badge>

            <h2 className="mt-8 text-5xl font-black tracking-tight lg:text-6xl">
              A proven framework for modernizing your business.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
              We don&apos;t implement technology for technology&apos;s sake.
              Every engagement follows a structured process designed to
              create measurable business momentum.
            </p>

          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Card
                  key={step.title}
                  className="relative text-center"
                >
                  <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/10">
                    <Icon className="h-10 w-10 text-cyan-400" />
                  </div>

                  <div className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-400">
                    STEP {index + 1}
                  </div>

                  <h3 className="text-3xl font-black">
                    {step.title}
                  </h3>

                  <p className="mt-6 leading-8 text-slate-400">
                    {step.description}
                  </p>

                </Card>
              );
            })}

          </div>
        </Container>
      </Section>
    </Reveal>
  );
}