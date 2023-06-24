import React, { Suspense } from "react";
import Car from "./Car";
import { getAllCars } from "@/utils";
import AsideFilters from "./AsideFilters";

function CarsSection() {
  const carsPromise = getAllCars();

  return (
    <section className="flex pt-4 xl:px-20">
      <AsideFilters />
      <Suspense fallback={<div>Loading...</div>}>
        <Car promise={carsPromise} />
      </Suspense>
    </section>
  );
}

export default CarsSection;
