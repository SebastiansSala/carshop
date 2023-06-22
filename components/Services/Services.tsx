import Service from "./Service";
import { ServicesInfo } from "@/data";

export default function Services() {
  return (
    <section className="relative">
      <div className="grid gap-4 place-content-center w-full pt-20 pb-48 relative bg-slate-800 z-10">
        <div className="max-w-lg text-center h-full">
          <h2 className="text-violet-600">Our Service</h2>
          <h1 className="text-5xl text-white font-bold mt-6">
            We have best Service for the rent cart
          </h1>
          <p className="text-lg text-gray-400 mt-8">
            Senras easdfeearstartatratiornsaoixocvkcuxv xucnv cv xcv{" "}
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 place-items-center gap-6 pb-20 relative -top-16 bg-white">
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
