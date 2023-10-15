import React from "react";
import Course from "./Course";

export default function FeaturedCourses() {
  return (
    <div className="">
      <div className="flex">
        <button>Design</button>
        <button>Design</button>
      </div>
      <div className="grid  sm:grid-cols-2 grid-cols-1 gap-8 md:px-16 px-4 md:py-16 py-8">
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
    </div>
  );
}
