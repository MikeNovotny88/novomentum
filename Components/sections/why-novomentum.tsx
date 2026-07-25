import { BrainCircuit, Shield, TrendingUp } from "lucide-react";
import SectionTitle from "@/components/shared/section-title";

const features = [
  {
    icon: BrainCircuit,
    title: "Practical AI",
    description:
      "We implement AI solutions that solve real business problems, automate repetitive work, and improve productivity across your organization.",
  },
  {
    icon: TrendingUp,
    title: "Business First",
    description:
      "Technology should accelerate growth. Every recommendation we make is focused on measurable business outcomes and long-term success.",
  },
  {
    icon: Shield,
    title: "Trusted Technology",
    description:
      "Built on Microsoft 365, Azure, OpenAI, and enterprise-grade cloud platforms designed for reliability and security.",
  },
];

export default function WhyNovomentum() {
  return (
    <section
      id="why"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Why Novomentum"
          title="Technology with purpose."
          description="Every recommendation is designed to increase efficiency, reduce manual work, and help your business move forward."
        />

        <div className="grid gap-8 md:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="card p-10"
              >
                <div className="mb-8 inline-flex rounded-2xl bg-cyan-400/10 p-4">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}