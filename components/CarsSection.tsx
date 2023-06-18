import React, { Suspense } from "react";
import Car from "./Car";
import { getCars } from "@/utils";

function CarsSection() {
  const carsPromise = getCars();

  return (
    <section className="pt-10 w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Car promise={carsPromise} />
      </Suspense>
    </section>
  );
}

export default CarsSection;
