"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/button";

const links = [
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "ROI Calculator", href: "/tools/roi-calculator" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 lg:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/85 py-3 shadow-2xl backdrop-blur-xl"
            : "border-white/5 bg-black/45 py-5 backdrop-blur-md"
        } px-8`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-4"
        >
          <Image
            src="/icon.png"
            alt="Novomentum"
            width={64}
            height={64}
            priority
            className="h-14 w-auto transition duration-300 group-hover:rotate-6 group-hover:scale-110"
          />

          <div className="hidden lg:block">
            <p className="text-lg font-bold tracking-wide">
              Novomentum
            </p>

            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              AI • Automation
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="#contact">
            Book Strategy Call
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl border border-white/10 p-3 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mx-auto mt-4 max-w-7xl rounded-2xl border border-white/10 bg-black/95 p-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-6">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}

            <Button href="#contact">
              Book Strategy Call
            </Button>

          </div>
        </div>
      )}
    </header>
  );
}