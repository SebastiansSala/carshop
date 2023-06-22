"use client";
import { useContext } from "react";
import LinkAnchor from "../LinkAnchor";
import { AuthContext } from "@/providers/auth";
import Logo from "../Logo";

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg top-0 border-black py-4 px-6">
      <div className="container mx-auto">
        <section className="flex gap-6 justify-between items-center">
          <Logo />
          <div className="flex gap-5 overflow-x-auto font-semibold text-lg whitespace-nowrap text-gray-700">
            <LinkAnchor title="Home" route="/" />
            <LinkAnchor title="Products" route="/cars" />
            <LinkAnchor title="In Stock" route="" />
            <LinkAnchor title="On Sale" route="" />
            <LinkAnchor title="FAQ" route="" />
            <LinkAnchor title="Articles" route="" />
            <LinkAnchor title="Status Update" route="" />
          </div>

          {currentUser ? (
            <p>{currentUser.email || "For some reason cant get the email"}</p>
          ) : (
            <p>Login</p>
          )}
        </section>
      </div>
    </header>
  );
};

export default Header;
