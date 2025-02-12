import Image from "next/image";
import React from "react";

export default function ScaleSmart() {
  return (
    <section className="bg-dark-100 py-20 border-t border-b border-primary-300/25">
      <section className="grid grid-cols-12 container mx-auto">
        <div className="col-span-8">
          <h1 className="text-white text-7xl w-9/12 mt-6">
            Scale Smart <br /> with DSA House
          </h1>
          <p className="text-gray-400 text-2xl w-8/12 mt-6">
            Need just a few expert roles instead of a full team? No problem! At
            DSA House, you can handpick the specialists you need—whether
            {"it's"} design or development. Get exactly what fits your business,
            nothing more, nothing less!
          </p>
        </div>
        <div className="col-span-4 w-full relative flex justify-start">
          <div>
            <Image
              alt="il-image"
              src="/images/il-scale-smart.png"
              width={431}
              height={384}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
