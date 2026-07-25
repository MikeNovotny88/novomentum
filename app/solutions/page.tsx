import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import Link from "next/link";
import {
  BrainCircuit,
  Bot,
  Workflow,
  Building2,
  Database,
} from "lucide-react";

const services = [
  {
    title: "AI Strategy",
    description:
      "Develop an AI roadmap that aligns with your business goals and delivers measurable results.",
    icon: BrainCircuit,
    href: "/solutions/ai-strategy",
  },
  {
    title: "AI Agents",
    description:
      "Deploy intelligent assistants that automate work and improve customer experiences.",
    icon: Bot,
    href: "/solutions/ai-agents",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes using Microsoft Power Automate and AI.",
    icon: Workflow,
    href: "/solutions/automation",
  },
  {
    title: "Microsoft 365",
    description:
      "Unlock the full potential of Microsoft 365, Teams, SharePoint, and Copilot.",
    icon: Building2,
    href: "/solutions/microsoft-365",
  },
  {
    title: "CRM & Integrations",
    description:
      "Connect your CRM, Microsoft 365, and business applications into one intelligent workflow.",
    icon: Database,
    href: "/solutions/crm",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white pt-36">

        <Section>

          <Container>

            <Badge>
              Solutions
            </Badge>

            <div className="mt-8 max-w-4xl">

              <h1 className="text-6xl font-black leading-tight">
                Technology solutions designed to create momentum.
              </h1>

              <p className="mt-8 text-xl leading-9 text-slate-400">
                Every business is different. We help organizations modernize,
                automate, and grow with practical AI and Microsoft technologies.
              </p>

            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Card key={service.title}>

                    <div className="mb-8 inline-flex rounded-2xl bg-cyan-400/10 p-4">
                      <Icon className="h-8 w-8 text-cyan-400" />
                    </div>

                    <h2 className="text-2xl font-bold">
                      {service.title}
                    </h2>

                    <p className="mt-5 leading-8 text-slate-400">
                      {service.description}
                    </p>

                    <Link
                      href={service.href}
                      className="mt-8 inline-flex text-cyan-400 hover:text-cyan-300"
                    >
                      Learn More →
                    </Link>

                  </Card>
                );
              })}

            </div>

            <div className="mt-24 text-center">

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