import Image from "next/image";
import Service from "./Service";
import { ServicesInfo } from "@/data";

export default function Services() {
  return (
    <section>
      <div className="flex flex-col gap-4 justify-center items-center w-full h-96 relative bg-slate-800">
        <h2 className="text-violet-600">Our Service</h2>
        <h1 className="text-6xl text-white font-bold">
          We have best Service for the rent cart
        </h1>
        <p className="text-lg text-gray-400">
          Senras easdfeearstartatratiornsaoixocvkcuxv xucnv cv xcv{" "}
        </p>
      </div>
      <div className="w-full grid grid-cols-3 place-items-center gap-6 pb-20">
        {ServicesInfo.map((service, index) => (
          <Service
            key={index}
            img={service.img}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  );
}
