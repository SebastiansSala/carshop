
import About from "@/components/About";
import Brands from "@/components/Brands";
import CarsSection from "@/components/FilterSection/CarsSection";
import Collection from "@/components/Collection/Collection";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <Brands />
      <About />
      <Services />
      <Collection />
    </main>
  );
}