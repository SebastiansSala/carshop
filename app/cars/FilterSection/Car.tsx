"use client";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { CarsType } from "@/types";
import { SearchbarContext } from "@/context/SeachbarContext";
import Image from "next/image";
import { FilternavContext } from "@/context/FilterContext";

const itemsVariants = {
  open: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.2,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    x: 50,
  },
  closed: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

function Car({ promise }: { promise: Promise<CarsType[]> }) {
  const { search } = useContext(SearchbarContext);
  const [allCars, setAllCars] = useState<CarsType[]>([]);
  const [cars, setCars] = useState<CarsType[]>([]);
  const { currentUser } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 16;
  const startIndx = (currentPage - 1) * 10;
  const { show } = useContext(FilternavContext);

  useEffect(() => {
    console.log(currentUser);
    const fetchCars = async () => {
      const cars = await promise;
      setAllCars(cars);
    };
    fetchCars();
  }, []);

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
    <motion.div
      className="flex flex-wrap justify-center flex-1 px-10 gap-10 md:gap-4 p-4"
      animate={show ? "open" : "closed"}
      variants={itemsVariants}
    >
      {cars.map((car) => (
        <motion.div
          key={car._id}
          className=" bg-white rounded-lg min-w-[300px] shadow-md"
          variants={itemVariants}
        >
          <Image
            src={car.img}
            width={300}
            height={150}
            className="w-96  md:max-w-2xl object-contain h-40"
            alt="car"
          />
          <div className="p-2">
            <p>
              {car.model} {car.year}
            </p>
            <p>{car.color}</p>
            <p>{car.brand}</p>
            <p className="text-2xl text-blue-500">Desde ${car.price}</p>
            <p className="text-sm text-gray-500">Desde ${car.price}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Car;
