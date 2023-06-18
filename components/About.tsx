import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section className="grid grid-cols-2 gap-12">
      <div>
        <h3 className="text-purple-700 text-sm font-bold">About us</h3>
        <h2 className="text-2xl font-bold">
          More than 150+ special collection cars
        </h2>
        <p className="text-gray-400 text-sm font-semibold">
          Get the car of your dreams with the installments of your choice. There
          are <span>various attractive</span> offers from Moladin through our
          collaboration with various trusted learning partners
        </p>
        <Button text="See all cars" route=""/>
      </div>
    </section>
  );
}
