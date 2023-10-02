import React from "react";

export default function Heading({ title }) {
  return (
    <h1 className="text-4xl lg:text-[3rem] md:font-extrabold lg:leading-[3.2rem] font-bold text-white leading-10">
      {title}
    </h1>
  );
}
