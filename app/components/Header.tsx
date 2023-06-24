"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/providers/auth";
import LinkAnchor from "../../components/LinkAnchor";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Link from "next/link";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleClick = () => {};

  useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg top-0 border-black py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex gap-5 overflow-x-auto font-semibold text-lg whitespace-nowrap text-gray-700">
          <LinkAnchor title="Home" route="/" />
          <LinkAnchor title="Pricing" route="" />
          <LinkAnchor title="FAQ" route="" />
          <LinkAnchor title="Contact" route="" />
        </div>

        {currentUser && currentUser._id !== null ? (
          <div>
            <Button text="logout" handleClick={handleClick} />
            <p>{currentUser.email || "For some reason cant get the email"}</p>
          </div>
        ) : (
          <Link href={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
