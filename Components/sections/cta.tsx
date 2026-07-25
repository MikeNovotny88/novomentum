import Button from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-transparent p-16">

          <h2 className="text-5xl font-black">
            Ready to create momentum?
          </h2>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-400">
            Schedule a strategy session and discover how AI,
            automation, and Microsoft technologies can move
            your business forward.
          </p>

          <div className="mt-10">
            <Button href="#contact">
              Schedule Strategy Session
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}