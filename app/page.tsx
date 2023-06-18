
import About from "@/components/About";
import Brands from "@/components/Brands";
import CarsSection from "@/components/CarsSection";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <Brands />
      <About />
    </main>
  );
}