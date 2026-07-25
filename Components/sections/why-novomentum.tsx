import {
  Shield,
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Practical AI",
    description:
      "We implement AI that solves real business problems and delivers measurable results.",
  },
  {
    icon: TrendingUp,
    title: "Business First",
    description:
      "Technology should move your business forward—not become another system to manage.",
  },
  {
    icon: Shield,
    title: "Trusted Technology",
    description:
      "Built on Microsoft 365, Azure, OpenAI, and secure cloud platforms.",
  },
];

export default function WhyNovomentum() {
  return (
    <section id="why" className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-sm uppercase tracking-[0.35em] text-cyan-400">
          Why Novomentum
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Technology with purpose.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-400">
          Every recommendation is designed to increase efficiency,
          reduce manual work, and help your business grow.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="card p-10"
              >
                <Icon className="mb-8 h-10 w-10 text-cyan-400" />

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