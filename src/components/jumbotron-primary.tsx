import Image from "next/image";
import React from "react";

export default function JumbotronPrimary() {
  return (
    <section className="bg-gradient-to-t bg-dark-100 from-primary-800 ">
      <section className="grid grid-cols-12 container mx-auto py-20">
        <div className="col-span-8">
          <p className="border inline-block text-primary-300 border-primary-300 rounded-full px-4 py-2">
            Building Connection, Innovative Solution
          </p>
          <h1 className="text-white text-7xl w-9/12 mt-6">
            Empowering Your Business with Cutting-Edge Technology
          </h1>
          <p className="text-gray-400 text-2xl w-8/12 mt-6">
            At DSA House, we craft innovative digital solutions that drive
            business growth. From dynamic web applications to robust enterprise
            systems, we turn your ideas into scalable, high-performing
            technology
          </p>
          <button className="bg-primary-300 text-dark-100 px-6 py-3 mt-6 font-semibold rounded-full text-xl">
            Explore Our Work
          </button>
        </div>
        <div className="col-span-4 relative">
          <div className="absolute inset-y-1/3 left-[-8rem]">
            <div className="relative h-[121px] w-[136px]">
              <Image alt="il-image" fill src="/images/jumbotron-dsa.png" />
            </div>
          </div>
          <Image
            alt="il-image"
            src="/images/women-jumbotron.png"
            width={414}
            height={571}
          />
        </div>
      </section>
    </section>
  );
}
