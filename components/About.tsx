import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function About() {
  return (
    <section className="grid grid-cols-2 gap-12 py-24">
      <div>
        <Image
          src="/../public/images/about.jpg"
          width={250}
          height={150}
          alt="about image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-[#5F51FC] text-sm font-bold">About us</h3>
        <h2 className="text-2xl font-bold mt-2">
          More than 150+ special collection cars
        </h2>
        <p className="text-gray-400 text-sm font-semibold mt-4">
          Get the car of your dreams with the installments of your choice. There
          are <span className="text-gray-500">various attractive</span> offers from Moladin through our
          collaboration with various trusted learning partners
        </p>
        <Button text="See all cars" route=""/>
      </div>
    </section>
  );
}
