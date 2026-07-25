import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/hero";
import Stats from "@/components/sections/stats";
import TrustedTech from "@/components/sections/trusted-tech";
import BusinessGoals from "@/components/sections/business-goals";
import WhyNovomentum from "@/components/sections/why-novomentum";
import AIAssessment from "@/components/sections/ai-assessment";
import CTA from "@/components/sections/cta";
import Footer from "@/components/layout/footer";
import MouseGlow from "@/components/ui/mouse-glow";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <MouseGlow />

      <Navbar />

      <Hero />

      <Stats />

      <TrustedTech />

      <BusinessGoals />

      <WhyNovomentum />

      <AIAssessment />

      <CTA />

      <Footer />
    </main>
  );
}