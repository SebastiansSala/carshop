"use client";
import { useContext } from "react";
import Image from "next/image";
import Cart from "./Cart";
import LinkAnchor from "../LinkAnchor";
import Searchbar from "./Searchbar";
import { AuthContext } from "@/providers/auth";

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <header className="fixed w-full z-50 bg-white top-0 shadow-md border-black py-4 px-6">
      <div className="container mx-auto">
        <section className="flex mb-5 gap-6 items-center">
          <Image
            src="/../public/logo.webp"
            width={120}
            height={100}
            alt="logo"
            className="w-auto h-auto"
          />
          <Searchbar />
          <Cart />
          {currentUser ? (
            <p>{currentUser.email || "For some reason cant get the email"}</p>
          ) : (
            <p>No signup</p>
          )}
        </section>
        <section className="flex gap-6 items-center justify-between">
          <div className="flex gap-5 overflow-x-auto font-semibold text-lg whitespace-nowrap text-gray-700">
            <LinkAnchor title="Home" route="/" />
            <LinkAnchor title="Products" route="/products" />
            <LinkAnchor title="In Stock" route="" />
            <LinkAnchor title="On Sale" route="" />
            <LinkAnchor title="FAQ" route="" />
            <LinkAnchor title="Articles" route="" />
            <LinkAnchor title="Status Update" route="" />
          </div>
          <div>
            <LinkAnchor title="Login" route="/login" />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
