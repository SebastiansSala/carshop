"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Heroitems } from "@/data";
import Button from "../Button";
import "@/styles/snap.css";
import Anchor from "../Anchor";

export default function Hero() {
  const snapRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"forward" | "reverse">("forward");

  useEffect(() => {
    const scrollContainer = snapRef.current;

    const interval = setInterval(() => {
      if (scrollContainer) {
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (direction === "forward") {
          if (scrollContainer.scrollLeft === maxScrollLeft) {
            setDirection("reverse");
          } else {
            scrollContainer.scrollLeft += scrollContainer.clientWidth;
          }
        } else {
          if (scrollContainer.scrollLeft === 0) {
            setDirection("forward");
          } else {
            scrollContainer.scrollLeft = 0;
          }
        }
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [direction]);

  return (
    <section className="relative">
      <div
        className={`flex snap-x snap-mandatory 2xl:container hide-scrollbar 2xl:mx-auto ${
          direction === "forward" && "scroll-smooth"
        } overflow-x-scroll mt-24 xl:mt-40 h-96 xl:h-96  relative`}
        ref={snapRef}
      >
        {Heroitems.map((item, index) => (
          <div
            key={index}
            className="snap-center relative flex-shrink-0 w-full"
          >
            <Image
              src={item.img}
              fill
              alt="image"
              className="h-auto w-auto object-cover"
            />
          </div>
        ))}
      </div>
      <div className="z-10 absolute  top-0 mt-10 left-28 max-w-sm">
        <h1 className="font-bold text-4xl mb-5">
          Search and Find your best car rental with easy way
        </h1>
        <p className="mb-7">
          Drive performance and your cross-funcional collaboration with
          easy-to-sue dashboards, data visualizations, and authomatical insights
          in one click
        </p>
        <Anchor text="Booking now" route="reservation" />
      </div>
    </section>
  );
}
