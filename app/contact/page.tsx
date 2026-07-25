import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white pt-36">

        <Section>

          <Container>

            <Badge>Let&apos;s Talk</Badge>

            <div className="mt-8 max-w-4xl">

              <h1 className="text-6xl font-black leading-tight">
                Ready to modernize your business?
              </h1>

              <p className="mt-8 text-xl leading-9 text-slate-400">
                Whether you&apos;re exploring AI, Microsoft 365, automation,
                or cloud modernization, let&apos;s have a conversation about
                your goals and how Novomentum can help.
              </p>

            </div>

          </Container>

        </Section>

        <Section>

          <Container>

            <div className="grid gap-10 lg:grid-cols-2">

              {/* Contact Form */}

              <Card>

                <h2 className="text-3xl font-black">
                  Request a Strategy Session
                </h2>

                <form className="mt-10 space-y-6">

                  <input
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-cyan-400"
                  />

                  <input
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-cyan-400"
                  />

                  <input
                    placeholder="Company"
                    className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-cyan-400"
                  />

                  <select className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-cyan-400">
                    <option>I&apos;m interested in...</option>
                    <option>AI Strategy</option>
                    <option>Microsoft 365</option>
                    <option>Workflow Automation</option>
                    <option>AI Agents</option>
                    <option>CRM &amp; Integrations</option>
                  </select>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your goals..."
                    className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-cyan-400"
                  />

                  <Button href="#">
                    Submit Request
                  </Button>

                </form>

              </Card>

              {/* Why Work With Us */}

              <Card>

                <h2 className="text-3xl font-black">
                  What happens next?
                </h2>

                <div className="mt-10 space-y-8">

                  <div>
                    <h3 className="font-bold text-cyan-400">
                      1. Discovery Call
                    </h3>

                    <p className="mt-2 text-slate-400">
                      We learn about your business, goals, and current technology.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-cyan-400">
                      2. Strategy
                    </h3>

                    <p className="mt-2 text-slate-400">
                      We&apos;ll identify opportunities to modernize, automate,
                      and improve your business.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-cyan-400">
                      3. Roadmap
                    </h3>

                    <p className="mt-2 text-slate-400">
                      You&apos;ll receive practical recommendations with clear next steps.
                    </p>
                  </div>

                </div>

              </Card>

            </div>

          </Container>

        </Section>

      </main>

      <Footer />

    </>
  );
}