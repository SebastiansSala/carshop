"use client";
import { useState, useEffect } from "react";
import Button from "../Button";
import CollectionNavbar from "./CollectionNavbar";
import CollectionFetch from "./CollectionFetch";
import Anchor from "../Anchor";

const Collection = () => {
  const [selectedView, setSelectedView] = useState("bmw");

  return (
    <section className="flex flex-col gap-5 justify-center items-center pb-56">
      <h3 className="text-[#5F51FC] font-bold">Collection</h3>
      <h2 className="text-5xl font-bold text-center mb-10">Our Collection Cars</h2>
      <CollectionNavbar setSelectedView={setSelectedView}/>
      <div className="grid grid-cols-3 gap-4 w-full px-40 pt-10">
        <CollectionFetch brand={selectedView}/>
      </div>
      <Anchor text="See all cars" route="/cars" />
    </section>
  );
};

export default Collection;
