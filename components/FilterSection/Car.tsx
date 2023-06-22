"use client";
import { useEffect, useContext, useState } from "react";
import { CarsType } from "@/types";
import { SearchbarContext } from "@/providers/searchbar";

function Products({ promise }: { promise: Promise<CarsType[]> }) {
  const { search } = useContext(SearchbarContext);
  const [allCars, setAllCars] = useState<CarsType[]>([]);
  const [cars, setCars] = useState<CarsType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 16;
  const startIndx = (currentPage - 1) * 10;

  useEffect(() => {
    const fetchCars = async () => {
      const cars = await promise;
      setAllCars(cars);
    };
    fetchCars();
  }, [])

  useEffect(() => {
    const filterCars = async () => {
      const filteredCars = allCars.filter((car) =>
        car.model.toLowerCase().includes(search.toLowerCase())
      );
      const slicedCars = filteredCars.slice(startIndx, startIndx + carsPerPage);
      setCars(slicedCars);
      setCurrentPage(1);
    };
    filterCars();
  }, [search, allCars]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 px-20 2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {cars.map((car, index) => (
        <div key={index} className=" bg-white rounded-lg shadow-md">
          <p>
            {car.model} {car.year}
          </p>
          <p>{car.color}</p>
          <p>{car.brand}</p>
          <p className="text-2xl text-blue-500">Desde ${car.price}</p>
          <p className="text-sm text-gray-500">Desde ${car.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
