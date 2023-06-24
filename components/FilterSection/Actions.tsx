"use client";
import { useContext } from "react";
import { FilternavContext } from "@/context/FilterContext";
import Searchbar from "../Searchbar";

const Actions = () => {
  const { show, setShow } = useContext(FilternavContext);

  return (
    <section className="flex gap-4 mt-40">
      <button className="px-8 py-4 bg-zinc-500" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      <Searchbar />
    </section>
  );
};

export default Actions;
