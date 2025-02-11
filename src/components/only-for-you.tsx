import Image from "next/image";
import React from "react";

export default function OnlyForYou() {
  return (
    <section className="bg-gradient-to-b bg-dark-100 from-primary-800 py-20">
      <section className="container mx-auto">
        <section className="grid grid-cols-12">
          <div className="col-span-6 text-white">
            <p className="text-5xl font-semibold">The Software House </p>
            <p className="text-7xl font-semibold">Only For You</p>
          </div>
          <div className="col-span-6 text-white">
            <p className="font-semibold text-2xl">DSA House</p>
            <p className="text-xl mt-2 font-light text-gray-400">
              At DSA House, we turn ideas into powerful digital solutions. As a
              dedicated software house, we specialize in crafting
              high-performance applications, intuitive user experiences, and
              scalable systems tailored to your business needs.
            </p>
          </div>
        </section>

        <section className="relative">
          <section className="mt-32 relative h-[424px] flex justify-end">
            <div className="relative h-full w-full">
              <Image
                alt="background-ilustration"
                fill
                src="/images/background-the-reason.png"
              />

              <div className="absolute right-12 top-12">
                <h4 className="font-semibold text-white text-7xl text-right">
                  The Reason{" "}
                </h4>
                <h4 className="font-semibold text-white text-8xl">
                  Why Choose Us?
                </h4>
              </div>
            </div>
            <div className="absolute h-[506px] w-[456px] left-0 top-[-5.5rem]">
              <Image
                alt="background-ilustration"
                fill
                src="/images/il-software-house.png"
              />
            </div>
          </section>

          <div className="grid grid-cols-6 gap-x-12 -mt-28 px-10">
            <div className="p-4 col-span-2 z-30 rounded-3xl bg bg-primary-700">
              <p className="font-semibold text-white text-3xl">
                Tailored Solutions, Maximum Impact
              </p>
              <p className="text-gray-300 text-base mt-6">
                We don’t just build software—we craft solutions designed
                specifically for your business needs, ensuring efficiency and
                scalability
              </p>
            </div>
            <div className="p-4 col-span-2 z-30 rounded-3xl bg bg-primary-700">
              <p className="font-semibold text-white text-3xl">
                User-Centric Interface Design
              </p>
              <p className="text-gray-300 text-base mt-6">
                Our solutions prioritize seamless user experience, making your
                digital products intuitive, engaging, and easy to navigate
              </p>
            </div>
            <div className="p-4 col-span-2 z-30 rounded-3xl bg bg-primary-700">
              <p className="font-semibold text-white text-3xl">
                Scalable & Future-Ready
              </p>
              <p className="text-gray-300 text-base mt-6">
                We build solutions that grow with your business, adapting to
                future demands without compromising performance
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
