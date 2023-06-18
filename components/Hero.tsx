"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Heroitems } from "@/data";
import "@/styles/snap.css";

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
    <section
      className={`flex snap-x snap-mandatory 2xl:container hide-scrollbar 2xl:mx-auto ${
        direction === "forward" && "scroll-smooth"
      } overflow-x-scroll mt-24 xl:mt-40 h-96 xl:h-96  relative`}
      ref={snapRef}
    >
      {Heroitems.map((item, index) => (
        <div key={index} className="snap-center relative flex-shrink-0 w-full">
          <Image
            src={item.img}
            fill
            alt="image"
            className="h-auto w-auto object-cover"
          />
        </div>
      ))}
    </section>
  );
}