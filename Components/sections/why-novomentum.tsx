import { ShieldCheck, Zap, Users } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Practical AI",
    description:
      "We focus on AI solutions that solve real business problems and deliver measurable results.",
  },
  {
    icon: Users,
    title: "Business First",
    description:
      "Technology should support your business goals—not become another system to manage.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Technology",
    description:
      "Built around Microsoft 365, modern cloud platforms, and secure AI solutions.",
  },
];

export default function WhyNovomentum() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          WHY NOVOMENTUM
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Technology with a purpose.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
          Every recommendation we make is designed to improve efficiency,
          reduce manual work, and help your business move forward with
          confidence.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-zinc-900/80 p-8 backdrop-blur-sm transition hover:border-cyan-400/40 hover:border-cyan-500/20"
          >
            <Icon className="mb-6 h-10 w-10 text-cyan-400" />

            <h3 className="text-2xl font-semibold">{title}</h3>

            <p className="mt-4 text-slate-400 leading-7">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}