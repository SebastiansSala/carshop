"use client";
import Image from "next/image";
import Button from "../../components/Button";
import "@/styles/snap.css";
import Anchor from "../../components/Anchor";
import { motion, Variants } from "framer-motion";

const carVariants: Variants = {
  offscreen: {
    x: 300,
  },
  onscreen: {
    x: 0,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      className="relative flex mt-28 max-h-80 justify-center mb-20"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <div className="z-10 w-1/2 top-0 mt-10 left-28">
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
      <motion.div className="1/2" variants={carVariants}>
        <Image
          src="https://www.pngplay.com/wp-content/uploads/9/Luxury-Car-Transparent-Images.png"
          width={700}
          height={700}
          alt="hero image"
          priority
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
