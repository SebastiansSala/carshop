"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import { FilternavContext } from "@/providers/filternav";

const itemsVariants = {
  open: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.2 },
  },
  closed: {
    opacity: 0,
    x: -100,
    y: 0,
    transition: { duration: 0.2 },
  },
};

const AsideFilters = () => {
  const { show } = useContext(FilternavContext);
  return (
    <motion.aside
      className={`w-96 mt-4 border ${show ? "block" : "hidden"}`}
      initial={false}
      animate={show ? "open" : "closed"}
      variants={itemsVariants}
      exit={{opacity: 0, x: -100, y: 0, transition: { duration: 0.2 }}}
    >
      <div className="sticky h-auto border top-0">
        <ul>
          <li>Precio</li>
        </ul>
      </div>
    </motion.aside>
  );
};

export default AsideFilters;
