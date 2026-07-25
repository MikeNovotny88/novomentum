"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";

const links = [
  { name: "Solutions", href: "#solutions" },
  { name: "AI Assessment", href: "#assessment" },
  { name: "Why Us", href: "#why" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/80 py-3 shadow-2xl backdrop-blur-xl"
            : "border-white/5 bg-black/40 py-5 backdrop-blur-md"
        } px-8`}
      >
        <a href="/">
          <Image
            src="/logot.png"
            alt="Novomentum"
            width={250}
            height={70}
            className="h-14 w-auto"
            priority
          />
        </a>

        <nav className="hidden gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <Button href="#contact">
          Schedule Strategy Session
        </Button>
      </div>
    </header>
  );
}