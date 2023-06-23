"use client";
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface FilternavContextProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const FilternavContext = createContext<FilternavContextProps>({
  show: false,
  setShow: () => {},
});

export default function FilternavProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [show, setShow] = useState(false);

  return (
    <FilternavContext.Provider value={{ show, setShow }}>
      {children}
    </FilternavContext.Provider>
  );
}
