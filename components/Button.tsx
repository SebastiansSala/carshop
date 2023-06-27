"use client";
import { FC } from "react";
import { ButtonPropsType } from "@/types";

const Button: FC<ButtonPropsType> = ({ text, handleClick }) => {

  return (
    <button
      className="max-w-fit py-2 px-4 bg-[#5F51FC] text-white rounded"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
