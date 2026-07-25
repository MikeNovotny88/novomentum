import {
  BrainCircuit,
  Bot,
  Workflow,
  Building2,
  Network,
  BarChart3,
} from "lucide-react";

const solutions = [
  {
    icon: BrainCircuit,
    title: "AI Strategy",
    description: "Create a practical roadmap for adopting AI across your business.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Deploy intelligent assistants that work 24/7 for your team.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive business processes and reduce manual work.",
  },
  {
    icon: Building2,
    title: "CRM Solutions",
    description: "Implement and optimize CRM platforms that scale with growth.",
  },
  {
    icon: Network,
    title: "Business Integrations",
    description: "Connect Microsoft 365, CRM, and your business applications.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Turn business data into dashboards and actionable insights.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-14">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          SOLUTIONS
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          AI Solutions Built for Growth
        </h2>

        <p className="mt-6 max-w-2xl text-slate-400">
          From intelligent automation to CRM transformation, Novomentum
          delivers modern technology solutions that create measurable
          business momentum.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {solutions.map((solution) => {
          const Icon = solution.icon;

          return (
            <div
              key={solution.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <Icon
                size={34}
                className="mb-6 text-cyan-400 transition group-hover:scale-110"
              />

              <h3 className="text-2xl font-semibold">
                {solution.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {solution.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}