import CarsSection from "@/components/FilterSection/CarsSection";
import SearchbarProvider from "@/providers/searchbar";

export default function Home() {
  return (
    <main className="container mx-auto">
      <SearchbarProvider>
        <CarsSection />
      </SearchbarProvider>
    </main>
  );
}
