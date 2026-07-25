import Button from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <Image
                src="/logot.png"
                alt="Novomentum"
                width={320}
                height={90}
                className="mb-8 h-auto w-72"
              />

              <h2 className="text-5xl font-black leading-tight">
                Ready to Create
                <br />
                <span className="text-cyan-400">
                  Momentum?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                Let&apos;s discuss how AI, Microsoft 365, automation,
                and intelligent business systems can help your
                organization work smarter and grow faster.
              </p>

            </div>

            <div className="flex justify-center lg:justify-end">

              <Button href="/contact">
                Schedule Strategy Session
              </Button>

            </div>

          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Novomentum LLC. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-8">

            <a
              href="/solutions"
              className="transition hover:text-cyan-400"
            >
              Solutions
            </a>

            <a
              href="/about"
              className="transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="/tools/roi-calculator"
              className="transition hover:text-cyan-400"
            >
              ROI Calculator
            </a>

            <a
              href="/contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}