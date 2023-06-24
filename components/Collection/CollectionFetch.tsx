import { Suspense, useEffect, useState } from "react";
import { getCarsByBrand } from "@/utils";
import { CarsType } from "@/types";
import Button from "../Button";
import Image from "next/image";

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
          <div key={car._id} className="py-4 px-2 shadow-lg">
            <Image src={car.img} width={300} height={300} className="w-full h-40 object-contain" alt={car.model}/>
            <p className="mt-2 text-xl font-bold">${car.price}</p>
            <p className="mt-2 text-lg font-semibold">
              {car.model} {car.year}
            </p>
              <Button text="Booking now"/>
          </div>
        ))}
      </Suspense>
    </>
  );
};

export default CollectionFetch;
