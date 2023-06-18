import Image from "next/image";
import { ServicePropsType } from "@/types";

const Service = ({ img, title, desc }: ServicePropsType) => {
  return (
    <div className="pt-6 pb-4 pl-2 pr-4  max-w-xs border shadow-md min-h-full">
      <Image src={img} width={150} height={150} className="" alt="" />
      <h3 className="mt-6 mb-4 text-2xl font-bold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Service;
