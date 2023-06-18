import Image from "next/image";
import Link from "next/link";
import { CarsType } from "@/types";

async function Products({ promise }: { promise: Promise<CarsType[]> }) {
  const cars = await promise;

  return (
    <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {cars.map((car, index) => (
        <div
          key={index}
          className=" bg-white rounded-lg shadow-md overflow-hidden"
        >
          <p>{car.year}</p>
          <p>{car.city_mpg}</p>
          <p>{car.class}</p>
          <p>{car.combination_mpg}</p>
          <p>{car.cylinders}</p>
          <p>{car.displacement}</p>
          <p>{car.fuel_type}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
