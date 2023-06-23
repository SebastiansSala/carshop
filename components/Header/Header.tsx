"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/providers/auth";
import LinkAnchor from "../LinkAnchor";
import Logo from "../Logo";
import Button from "../Button";
import Link from "next/link";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleClick = () => {};

  useEffect(() => {
    console.log(currentUser)
  }, [])
  

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg top-0 border-black py-4 px-6">
      <div className="container mx-auto">
        <section className="flex gap-6 justify-between items-center">
          <Logo />
          <div className="flex gap-5 overflow-x-auto font-semibold text-lg whitespace-nowrap text-gray-700">
            <LinkAnchor title="Home" route="/" />
            <LinkAnchor title="Pricing" route="" />
            <LinkAnchor title="FAQ" route="" />
            <LinkAnchor title="Contact" route="" />
          </div>

          {currentUser?._id !== null ? (
            <>
              <Button text="logout" handleClick={handleClick} />
              <p>{currentUser?.email || "For some reason cant get the email"}</p>
            </>
          ) : (
            <Link href={"/login"}>Login</Link>
          )}
        </section>
      </div>
    </header>
  );
};

export default Header;
