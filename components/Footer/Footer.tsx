import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Logo from "../Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1E23] w-full h-60 px-24 py-10 text-white relative">
      <div className="h-full flex justify-between items-end relative">
        <Logo />
        <nav className="flex items-center gap-10">
          <Link href="">Home</Link>
          <Link href="">About Us</Link>
          <Link href="">Category</Link>
          <Link href="">Resources</Link>
        </nav>
        <div className="flex items-center gap-2">
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
      </div>
    </footer>
  );
};
