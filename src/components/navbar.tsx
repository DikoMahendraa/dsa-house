import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="py-5 container mx-auto flex items-center justify-between">
      <Image alt="logo-dsa" src="/icons/dsa-logo.svg" height={29} width={132} />

      <div className="flex items-center gap-7 text-white">
        <p className="hover:text-cyan-100 cursor-pointer hover:border-b hover:border-b-cyan-100">
          Home
        </p>
        <p className="hover:text-cyan-100 cursor-pointer hover:border-b hover:border-b-cyan-100">
          About us
        </p>
        <p className="hover:text-cyan-100 cursor-pointer hover:border-b hover:border-b-cyan-100">
          About Projects
        </p>
        <p className="hover:text-cyan-100 cursor-pointer hover:border-b hover:border-b-cyan-100">
          Pricing
        </p>
      </div>

      <button className="text-primary-900 bg-cyan-100 py-3 font-semibold px-6 rounded-full">
        Let’s Build Something Great
      </button>
    </nav>
  );
}
