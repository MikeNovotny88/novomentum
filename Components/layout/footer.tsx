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
                Let's discuss how AI, Microsoft 365, automation,
                and intelligent business systems can help your
                organization work smarter and grow faster.
              </p>

            </div>

            <div className="flex justify-center lg:justify-end">

              <Button href="#">
                Schedule Strategy Session
              </Button>

            </div>

          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Novomentum LLC
          </p>

          <div className="flex gap-8">

            <a href="#solutions">Solutions</a>

            <a href="#why">Why Novomentum</a>

            <a href="#contact">Contact</a>

          </div>

        </div>

      </div>
    </footer>
  );
}