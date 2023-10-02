import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LanguageCard({ logo, title }) {
  return (
    <Link
      href="#"
      title={title}
      className="mr-4 p-4 block bg-gray-100 rounded-xl"
    >
      <div className=" relative w-20 h-20  ">
        <Image
          src={logo}
          alt={title}
          fill
          className="absolute w-full h-full object-cover"
        />
      </div>
    </Link>
  );
}
