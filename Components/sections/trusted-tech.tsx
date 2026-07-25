export default function TrustedTech() {
  const tech = [
    "Microsoft 365",
    "Azure",
    "Copilot",
    "OpenAI",
    "HubSpot",
    "Salesforce",
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-8 text-center text-sm uppercase tracking-[0.35em] text-cyan-400">
          Trusted Technologies
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {tech.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-slate-300 transition hover:border-cyan-400 hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}