"use client"
import { SetStateAction, useState, Dispatch } from "react";
import { ViewType } from "@/types";
import CollectionNavbarBrand from "./CollectionNavbarBrand";

const CollectionNavbar = ({
  setSelectedView,
}: {
  setSelectedView: Dispatch<SetStateAction<string>>;
}) => {
  const [view, setView] = useState<ViewType>({
    bmw: true,
    honda: false,
    ford: false,
    toyota: false,
    chevrolet: false,
    mercedes: false
  });

  const handleView = (brand: string) => {
    setSelectedView(brand);
    setView((prevState) => {
      const updatedView = { ...prevState };
      Object.keys(updatedView).forEach((key) => {
        updatedView[key] = key === brand;
      });
      return updatedView;
    });
  };

  return (
    <>
      <nav className="w-full px-10 overflow-x-auto">
        <ul className="flex gap-6 w-full">
          <CollectionNavbarBrand
            text="BMW"
            view={view}
            handleView={handleView}
          />
          <CollectionNavbarBrand
            text="Honda"
            view={view}
            handleView={handleView}
          />
          <CollectionNavbarBrand
            text="Toyota"
            view={view}
            handleView={handleView}
          />
          <CollectionNavbarBrand
            text="Ford"
            view={view}
            handleView={handleView}
          />
          <CollectionNavbarBrand
            text="Chevrolet"
            view={view}
            handleView={handleView}
          />
          <CollectionNavbarBrand
            text="Mercedes"
            view={view}
            handleView={handleView}
          />
        </ul>
      </nav>
    </>
  );
};

export default CollectionNavbar;
