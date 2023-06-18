"use client";
import { useState } from "react";
import Button from "../Button";
import CollectionNavbar from "./CollectionNavbar";
import CollectionFetch from "./CollectionFetch";

const Collection = () => {
  const [selectedView, setSelectedView] = useState("bmw");

  return (
    <section className="flex flex-col gap-5 justify-center items-center pb-56">
      <h3 className="">Collection</h3>
      <h2>Our Collection Cars</h2>
      <CollectionNavbar setSelectedView={setSelectedView}/>
      <div className="py-4 px-2 grid grid-cols-3 gap-4">
        <CollectionFetch brand={selectedView} />
      </div>
      <Button text="See all cars" route="" />
    </section>
  );
};

export default Collection;
