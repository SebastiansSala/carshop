"use client"
import { createContext, ReactNode, useState } from "react";

export const SearchbarContext = createContext({
  search: "",
  setSearch: (value: string) => {},
});

export default function SearchbarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");

  return (
    <SearchbarContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchbarContext.Provider>
  );
}
