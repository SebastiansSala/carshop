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
    ferrari: false,
    ford: false,
    porsche: false,
    toyota: false,
    camry: false,
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
      <nav>
        <ul className="flex gap-6 w-full">
          <CollectionNavbarBrand
            text="BMW"
            view={view}
            handleView={handleView}
          />
          <CollectionNavbarBrand
            text="Ferrari"
            view={view}
            handleView={handleView}
          />
          <CollectionNavbarBrand
            text="Ford"
            view={view}
            handleView={handleView}
          />
          <CollectionNavbarBrand
            text="Porsche"
            view={view}
            handleView={handleView}
          />
          <CollectionNavbarBrand
            text="Toyota"
            view={view}
            handleView={handleView}
          />
          <CollectionNavbarBrand
            text="Camry"
            view={view}
            handleView={handleView}
          />
        </ul>
      </nav>
    </>
  );
};

export default CollectionNavbar;
