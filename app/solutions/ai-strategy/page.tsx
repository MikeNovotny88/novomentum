import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import {
  BrainCircuit,
  Target,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const process = [
  {
    title: "Discover",
    description:
      "We learn your business, your technology, and your biggest operational challenges.",
    icon: Target,
  },
  {
    title: "Design",
    description:
      "Create an AI roadmap focused on measurable business outcomes.",
    icon: BrainCircuit,
  },
  {
    title: "Deploy",
    description:
      "Implement secure AI solutions with Microsoft 365 and OpenAI technologies.",
    icon: TrendingUp,
  },
];

const outcomes = [
  "Reduce manual work",
  "Increase employee productivity",
  "Improve customer response times",
  "Deploy Microsoft Copilot",
  "Automate repetitive workflows",
  "Build an AI roadmap",
];

export default function AIPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white pt-36">

        <Section>

          <Container>

            <Badge>
              AI Strategy
            </Badge>

            <div className="mt-8 max-w-4xl">

              <h1 className="text-6xl font-black leading-tight">
                Build an AI strategy that delivers measurable business value.
              </h1>

              <p className="mt-8 text-xl leading-9 text-slate-400">
                AI isn&apos;t about replacing people. It&apos;s about empowering your
                team, eliminating repetitive work, and creating a smarter,
                faster organization.
              </p>

            </div>

          </Container>

        </Section>

        <Section>

          <Container>

            <h2 className="mb-12 text-4xl font-black">
              Our Process
            </h2>

            <div className="grid gap-8 md:grid-cols-3">

              {process.map((step) => {
                const Icon = step.icon;

                return (
                  <Card key={step.title}>

                    <div className="mb-6 inline-flex rounded-2xl bg-cyan-400/10 p-4">
                      <Icon className="h-8 w-8 text-cyan-400" />
                    </div>

                    <h3 className="text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-400">
                      {step.description}
                    </p>

                  </Card>
                );
              })}

            </div>

          </Container>

        </Section>

        <Section>

          <Container>

            <div className="grid gap-10 lg:grid-cols-2">

              <div>

                <h2 className="text-4xl font-black">
                  Expected Outcomes
                </h2>

                <div className="mt-10 space-y-5">

                  {outcomes.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4"
                    >
                      <CheckCircle2 className="h-6 w-6 text-cyan-400" />

                      <span className="text-lg">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              <Card>

                <h3 className="text-3xl font-black">
                  Ready to create momentum?
                </h3>

                <p className="mt-6 leading-8 text-slate-400">
                  Schedule a free strategy session and discover how practical AI
                  can transform your business.
                </p>

                <div className="mt-10">

                  <Button href="/contact">
                    Book Free Strategy Call
                  </Button>

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