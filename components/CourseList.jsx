import React from "react";
import Course from "./Course";
export default function CourseList() {
  return (
    <div className="container text-center flex flex-col items-center mb-6 md:my-6 lg:my-10">
      <h1 className="text-[1.8rem] sm:text-4xl lg:text-[3rem] md:font-extrabold lg:leading-[3.2rem] font-bold text-white leading-8 md:leading-10">
        <span className="text-pink-500">Welcome to Desishub Courses.</span>
      </h1>
      <h1 className="text-sm lg:text-2xl my-3">
        Master Modern Web Development With a Project Based Approach. Gain
        real-world experience and land that dev job you've always imagined
      </h1>

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </div>
    </div>
  );
}
