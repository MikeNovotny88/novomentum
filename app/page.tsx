import Stats from "@/components/sections/stats";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/hero";
import TrustedTech from "@/components/sections/trusted-tech";
import BusinessGoals from "@/components/sections/business-goals";
import WhyNovomentum from "@/components/sections/why-novomentum";
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
      <Footer />
    </main>
  );
}