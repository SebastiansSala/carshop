import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Logo from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1E23] w-full h-60 px-4 md:px-24 py-10 text-white">
      <div className="h-full container mx-auto flex justify-center items-end">
        <nav className="flex flex-1 justify-center items-center gap-10 whitespace-nowrap">
          <Link href="/">Home</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#collection">Category</Link>
        </nav>
        <div className="flex flex-1 justify-center gap-9 items-center text-2xl">
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
      </div>
    </footer>
  );
};
