"use client";
import { FC } from "react";
import { ButtonPropsType } from "@/types";
import { useRouter } from "next/navigation";

const Button: FC<ButtonPropsType> = ({ text, route, handleClick }) => {
  const router = useRouter();

  return (
    <button
      className="max-w-fit mt-6 py-2 px-4 bg-[#5F51FC] text-white rounded"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
