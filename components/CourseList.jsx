import React from "react";
import Course from "./Course";
export default function CourseList() {
  return (
    <div className="container text-center flex flex-col items-center mb-6 md:my-6 lg:my-10">
      <h1 className="lg:text-5xl mb-8">Level Up Your Coding Skills</h1>
      <p className="text-lg lg:text-2xl max-w-prose">
        Whether you want to excel in web development, mobile development or
        strengthen your fundamental software engineering skills, there is a
        course for you.
      </p>

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
