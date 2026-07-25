import SectionTitle from "@/components/shared/section-title";

const technologies = [
  "Microsoft 365",
  "Azure",
  "Microsoft Copilot",
  "OpenAI",
  "HubSpot",
  "Salesforce",
  "Power Platform",
  "SharePoint",
  "Teams",
  "Cloudflare",
];

export default function TrustedTech() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Technology"
          title="Powered by the platforms you already trust."
          description="We build modern AI, automation, and business solutions using industry-leading technologies."
        />

        <div className="flex flex-wrap justify-center gap-5">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-lg text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-white"
            >
              {tech}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}