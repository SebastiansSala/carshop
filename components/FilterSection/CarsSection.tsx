import React, { Suspense } from "react";
import Car from "./Car";
import { getAllCars } from "@/utils";
import Searchbar from "../Searchbar";

function CarsSection() {
  const carsPromise = getAllCars();

  return (
    <section className="pt-10 w-full">
      <Searchbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Car promise={carsPromise} />
      </Suspense>
    </section>
  );
}

export default CarsSection;
