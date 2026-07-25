import MouseGlow from "@/components/ui/mouse-glow";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Solutions from "@/components/sections/solutions";
import WhyNovomentum from "@/components/sections/why-novomentum";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

  <MouseGlow />

  <Navbar />
  <Hero />
  <Solutions />
  <WhyNovomentum />
  <Footer />

</main>
  );
}