import { CarsType } from "@/types";

async function Products({ promise }: { promise: Promise<CarsType[]> }) {
  const cars = await promise;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cars.map((car, index) => (
        <div
          key={index}
          className=" bg-white rounded-lg shadow-md"
        >
          <p>{car.model} {car.year}</p>
          <p>{car.color}</p>
          <p className="text-2xl text-blue-500">Desde ${car.price}</p>
          <p className="text-sm text-gray-500">Desde ${car.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
