import AsideFilters from "@/components/FilterSection/AsideFilters";
import CarsSection from "@/components/FilterSection/CarsSection";
import SearchbarProvider from "@/context/SeachbarContext";
import Searchbar from "@/components/Searchbar";
import FilternavProvider from "@/context/FilterContext";
import Actions from "@/components/FilterSection/Actions";

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
