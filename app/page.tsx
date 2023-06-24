
import About from "@/components/About";
import Brands from "@/components/Brands";
import Collection from "@/components/Collection/Collection";
import Hero from "@/app/components/Hero";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main className="container mx-auto scroll-smooth" id="home">
      <Hero />
      <Brands />
      <About />
      <Services />
      <Collection />
    </main>
  );
}