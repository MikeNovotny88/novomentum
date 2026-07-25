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
    description:
      "Build a practical AI roadmap tailored to your business goals.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Deploy AI assistants that automate customer interactions and internal tasks.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Eliminate repetitive work and streamline business operations.",
  },
  {
    icon: Building2,
    title: "CRM Solutions",
    description:
      "Implement and optimize CRM platforms that grow with your business.",
  },
  {
    icon: Network,
    title: "Business Integrations",
    description:
      "Connect Microsoft 365, CRMs, accounting systems, and other business tools.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Turn your business data into dashboards and actionable insights.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-14">
        <p className="text-cyan-400 text-sm uppercase tracking-[0.3em]">
          SOLUTIONS
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Technology that creates momentum.
        </h2>

        <p className="mt-5 max-w-2xl text-slate-400">
          We help organizations modernize with AI, automation, Microsoft
          technologies, and business integrations that produce measurable
          results.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {solutions.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-2xl border border-cyan-500/20 bg-zinc-900/80 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
          >
            <Icon className="mb-6 h-10 w-10 text-cyan-400 transition-transform group-hover:scale-110" />

            <h3 className="text-2xl font-semibold">{title}</h3>

            <p className="mt-4 leading-7 text-slate-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}