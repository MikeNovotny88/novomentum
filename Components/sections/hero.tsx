export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">
      <div className="max-w-3xl">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
          NOVOMENTUM
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
          Creating Momentum Through
          <span className="block text-cyan-400">
            Technology & AI
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-300 md:text-xl">
          We help businesses automate operations, modernize workflows,
          implement AI, and unlock measurable business growth through
          intelligent technology solutions.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500">
            Schedule a Strategy Session
          </button>

          <button className="rounded-xl border border-slate-700 px-6 py-4 transition hover:border-cyan-400">
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
}