import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white">
      <Navbar />
      <Hero />
    </main>
  );
}