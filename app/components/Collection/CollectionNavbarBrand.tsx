import { CollectionNavbarBrandType } from "@/types";

const CollectionNavbarBrand = ({
  text,
  handleView,
  view,
}: CollectionNavbarBrandType) => {
  const textLowercase = text.toLowerCase();
  const isActive = view[textLowercase];

  return (
    <li
      onClick={() => handleView(textLowercase)}
      className={`cursor-pointer flex-1 py-2 text-center ${isActive && "border-b-4 border-black"}`}
    >
      {text}
    </li>
  );
};

export default CollectionNavbarBrand;
