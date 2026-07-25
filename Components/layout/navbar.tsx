"use client";

import Image from "next/image";

const links = [
  { name: "Solutions", href: "#solutions" },
  { name: "Why Us", href: "#why" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50 px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-6 py-4 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,.45)]">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logot.png"
            alt="Novomentum"
            width={210}
            height={60}
            priority
            className="h-12 w-auto"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,.45)]"
        >
          Schedule Strategy Session
        </a>

      </div>
    </header>
  );
}