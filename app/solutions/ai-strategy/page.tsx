import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Button from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Strategy Consulting | Novomentum",
  description:
    "Develop a practical AI strategy that aligns with your business goals. Novomentum helps organizations identify opportunities, prioritize investments, and implement AI with confidence.",
};

export default function AIPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

        <section className="mx-auto max-w-7xl px-6 pt-40 pb-24">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            AI Strategy
          </p>

          <h1 className="mt-6 max-w-4xl text-6xl font-black leading-tight">
            Build an AI roadmap that delivers real business value.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">
            Artificial intelligence isn't about replacing people—it's about
            empowering them. We help organizations identify practical
            opportunities for AI, reduce manual work, and create measurable
            business outcomes.
          </p>

          <div className="mt-12">
            <Button href="/contact">
              Schedule Strategy Session
            </Button>
          </div>

        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-32 md:grid-cols-3">

          <div className="card p-10">
            <h2 className="text-2xl font-bold">
              Discovery
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Understand your current technology, workflows, and business
              objectives.
            </p>
          </div>

          <div className="card p-10">
            <h2 className="text-2xl font-bold">
              Roadmap
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Prioritize AI opportunities based on business value, complexity,
              and return on investment.
            </p>
          </div>

          <div className="card p-10">
            <h2 className="text-2xl font-bold">
              Implementation
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Deploy solutions using Microsoft Copilot, OpenAI, automation,
              and secure cloud technologies.
            </p>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}