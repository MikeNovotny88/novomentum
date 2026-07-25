"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-6">
      <div className="flex w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-8 py-4 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,.45)]">

        <a href="#">
          <Image
            src="/logo.png"
            alt="Novomentum"
            width={210}
            height={60}
            priority
            className="h-12 w-auto"
          />
        </a>

        <nav className="hidden gap-10 text-sm font-medium text-slate-300 lg:flex">

          <a
            href="#solutions"
            className="transition hover:text-cyan-400"
          >
            Solutions
          </a>

          <a
            href="#why"
            className="transition hover:text-cyan-400"
          >
            Why Novomentum
          </a>

          <a
            href="#contact"
            className="transition hover:text-cyan-400"
          >
            Contact
          </a>

        </nav>

        <button className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,.35)]">
          Schedule Strategy Session
        </button>

      </div>
    </header>
  );
}