"use client";
import { FC } from "react";
import Link from "next/link";
import { AnchorPropsType } from "@/types";

const Anchor: FC<AnchorPropsType> = ({ text, route, handleClick }) => {

  return (
    <Link
      className="max-w-fit mt-6 py-2 px-4 bg-[#5F51FC] text-white rounded"
      onClick={handleClick}
      href={route}
    >
      {text}
    </Link>
  );
};

export default Anchor;
