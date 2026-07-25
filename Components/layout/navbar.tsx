export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#07111F]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="text-xl font-bold tracking-widest text-cyan-400">
          NOVOMENTUM
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#solutions" className="transition hover:text-cyan-400">
            Solutions
          </a>

          <a href="#industries" className="transition hover:text-cyan-400">
            Industries
          </a>

          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </nav>

        <button className="hidden rounded-lg bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:block">
          Book Strategy Call
        </button>
      </div>
    </header>
  );
}