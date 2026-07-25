import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import {
  BrainCircuit,
  ShieldCheck,
  Lightbulb,
  Rocket,
} from "lucide-react";

const values = [
  {
    icon: BrainCircuit,
    title: "Practical AI",
    description:
      "We focus on AI solutions that solve real business problems and deliver measurable results.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Every solution is designed with Microsoft security, governance, and best practices in mind.",
  },
  {
    icon: Lightbulb,
    title: "Business Focused",
    description:
      "Technology should support business goals—not become another project to manage.",
  },
  {
    icon: Rocket,
    title: "Create Momentum",
    description:
      "Our mission is to help organizations move faster through automation, AI, and modern cloud technologies.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black pt-36 text-white">

        <Section>
          <Container>

            <Badge>About Novomentum</Badge>

            <div className="mt-8 max-w-4xl">

              <h1 className="text-6xl font-black leading-tight">
                Helping businesses create momentum through technology and AI.
              </h1>

              <p className="mt-8 text-xl leading-9 text-slate-400">
                Novomentum helps organizations modernize Microsoft 365,
                automate business processes, deploy practical AI, and
                build secure technology that creates measurable business
                outcomes.
              </p>

            </div>

          </Container>
        </Section>

        <Section>
          <Container>

            <div className="grid gap-8 md:grid-cols-2">

              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <Card key={value.title}>

                    <div className="mb-6 inline-flex rounded-2xl bg-cyan-400/10 p-4">
                      <Icon className="h-8 w-8 text-cyan-400" />
                    </div>

                    <h2 className="text-2xl font-bold">
                      {value.title}
                    </h2>

                    <p className="mt-5 leading-8 text-slate-400">
                      {value.description}
                    </p>

                  </Card>
                );
              })}

            </div>

          </Container>
        </Section>

        <Section>
          <Container>

            <Card className="text-center">

              <h2 className="text-5xl font-black">
                Let&apos;s build something better.
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-400">
                Whether you&apos;re exploring AI, Microsoft 365, or automation,
                we&apos;ll help you build a practical roadmap that delivers
                measurable business results.
              </p>

              <div className="mt-10">
                <Button href="/contact">
                  Book Free Strategy Call
                </Button>
              </div>

            </Card>

          </Container>
        </Section>

      </main>

      <Footer />
    </>
  );
}