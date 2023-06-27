import Image from "next/image";
import { ServicePropsType } from "@/types";

const Service = ({ img, title, desc }: ServicePropsType) => {
  return (
    <div className="pt-6 pb-4 pl-2 pr-4 max-w-xs border shadow-md h-full z-20 bg-white">
      <Image src={img} width={150} height={150} className="w-auto h-auto" alt={desc} />
      <h3 className="mt-6 mb-4 text-base md:text-2xl font-bold">{title}</h3>
      <p className="font-semibold text-sm">{desc}</p>
    </div>
  );
};

export default Service;
