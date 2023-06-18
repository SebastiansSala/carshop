import { Suspense, useEffect, useState } from "react";
import { getCars } from "@/utils";
import { CarsType } from "@/types";

const CollectionFetch = ({ brand }: { brand: string }) => {
  const [cars, setCars] = useState<CarsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: CarsType[] = await getCars(brand);
        console.log(data);
        setCars(data);
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
          <div key={index}>{car.class}</div>
        ))}
      </Suspense>
    </>
  );
};

export default CollectionFetch;
