"use client";
import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import LinkAnchor from "@/components/LinkAnchor";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const handleClick = () => {
    logout();
  };

  return (
    <div className="fixed w-full top-0 shadow-lg bg-white z-50">
      <header className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Logo />
        <div className="flex gap-5 overflow-x-auto font-semibold text-lg whitespace-nowrap text-gray-700">
          <LinkAnchor title="Home" route="/" />
          <LinkAnchor title="Pricing" route="" />
          <LinkAnchor title="FAQ" route="" />
          <LinkAnchor title="Contact" route="" />
        </div>

        {currentUser && currentUser._id !== null ? (
          <div className="flex gap-4 items-center">
            <Button text="logout" handleClick={handleClick} />
            <p>{currentUser.email || "For some reason cant get the email"}</p>
          </div>
        ) : (
          <Link href={"/login"}>Login</Link>
        )}
      </header>
    </div>
  );
};

export default Header;
