import { Suspense, useEffect, useState } from "react";
import { getCarsByBrand } from "@/utils";
import { CarsType } from "@/types";
import Button from "../Button";

const CollectionFetch = ({ brand }: { brand: string }) => {
  const [cars, setCars] = useState<CarsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: CarsType[] = await getCarsByBrand(brand);
        const slicedData = data.slice(0, 6);
        setCars(slicedData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [brand]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {cars.map((car, index) => (
          <div key={index} className="py-4 px-2 shadow-lg">
            <p className="mt-2 text-xl font-bold">${car.price}</p>
            <p className="mt-2 text-lg font-semibold">{car.model} {car.year}</p>
            <Button text="Booking now" route=""/>
          </div>
        ))}
      </Suspense>
    </>
  );
};

export default CollectionFetch;
