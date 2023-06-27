"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { getCarsByBrand } from "@/utils";
import { CarsType } from "@/types";
import Button from "../../../components/Button";
import Image from "next/image";

const CollectionFetch = ({ brand }: { brand: string }) => {
  const [cars, setCars] = useState<CarsType[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(brand);
        const data: CarsType[] = await getCarsByBrand(brand);
        const slicedData = data.slice(0, 6);
        setCars(slicedData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [brand]);

  useEffect(() => {
    controls.start("visible");
  }, [cars]);

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        type: "spring",
        bounce: 0.2,
        stiffness: 100,
        mass: 1,
        damping: 10,
      },
    },
  };

  return (
    <>
      {cars.map((car) => (
        <motion.div
          key={car._id}
          className="py-4 px-2 shadow-lg transition-all"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <Image
            src={car.img}
            width={300}
            height={300}
            className="w-full h-40 object-contain"
            alt={car.model}
          />
          <p className="mt-2 text-xl font-bold">${car.price}</p>
          <p className="mt-2 text-lg font-semibold">
            {car.model} {car.year}
          </p>
          <Button text="Booking now" />
        </motion.div>
      ))}
    </>
  );
};

export default CollectionFetch;
