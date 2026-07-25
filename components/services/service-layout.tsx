import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { LucideIcon, CheckCircle2 } from "lucide-react";

interface ServiceLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
}

export default function ServiceLayout({
  eyebrow,
  title,
  description,
  icon: Icon,
  benefits,
  process,
}: ServiceLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="bg-black pt-36 text-white">

        <Section>
          <Container>

            <Badge>{eyebrow}</Badge>

            <div className="mt-8 max-w-4xl">

              <div className="mb-8 inline-flex rounded-3xl bg-cyan-400/10 p-5">
                <Icon className="h-10 w-10 text-cyan-400" />
              </div>

              <h1 className="text-6xl font-black leading-tight">
                {title}
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">
                {description}
              </p>

            </div>

          </Container>
        </Section>

        <Section>
          <Container>

            <div className="grid gap-8 lg:grid-cols-2">

              <Card>

                <h2 className="text-3xl font-black">
                  What You&apos;ll Gain
                </h2>

                <div className="mt-8 space-y-5">

                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}

                </div>

              </Card>

              <Card>

                <h2 className="text-3xl font-black">
                  Our Process
                </h2>

                <div className="mt-8 space-y-8">

                  {process.map((step, index) => (
                    <div key={step.title}>

                      <p className="font-semibold text-cyan-400">
                        Step {index + 1}
                      </p>

                      <h3 className="mt-2 text-xl font-bold">
                        {step.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-400">
                        {step.description}
                      </p>

                    </div>
                  ))}

                </div>

              </Card>

            </div>

            <div className="mt-20 text-center">

              <Button href="/contact">
                Book Free Strategy Call
              </Button>

            </div>

          </Container>
        </Section>

      </main>

      <Footer />
    </>
  );
}