import SearchbarProvider from "@/context/SeachbarContext";
import FilternavProvider from "@/context/FilterContext";
import CarsSection from "@/app/cars/FilterSection/CarsSection";
import Actions from "./FilterSection/Actions";

export default function Home() {
  return (
    <main className="container mx-auto">
      <FilternavProvider>
        <SearchbarProvider>
          <Actions />
          <CarsSection />
        </SearchbarProvider>
      </FilternavProvider>
    </main>
  );
}
