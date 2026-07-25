"use client";

import HeroContent from "./hero-content";
import HeroGraphic from "./hero-graphic";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32">

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <HeroContent />

        <div className="hidden justify-center lg:flex">

          <HeroGraphic />

        </div>

      </div>

    </section>
  );
}