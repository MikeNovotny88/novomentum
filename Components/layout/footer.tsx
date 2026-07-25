export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Ready to create momentum?
        </h2>

        <p className="mt-4 max-w-xl text-slate-400">
          Let's explore how AI, automation, and modern technology can help
          your organization work smarter and grow faster.
        </p>

        <button className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
          Schedule a Strategy Session
        </button>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Novomentum LLC • Nampa, Idaho
        </div>
      </div>
    </footer>
  );
}