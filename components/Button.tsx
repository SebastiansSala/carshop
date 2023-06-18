"use client";
import { FC } from "react";
import { ButtonPropsType } from "@/types";
import { useRouter } from "next/navigation";

const Button: FC<ButtonPropsType> = ({ text, route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <button
      className="py-2 px-4 bg-violet-700 text-white rounded"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
