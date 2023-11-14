import React from "react";
import Course from "./Course";
import { Button } from "./ui/button";
import { BsBookmarkCheck } from "react-icons/bs";
import Link from "next/link";
export default function CourseList() {
  return (
    <div className="container text-center flex flex-col items-center mb-6 md:my-6 lg:my-10">
      <h1 className="text-[1.8rem] sm:text-4xl lg:text-[3rem] md:font-extrabold lg:leading-[3.2rem] font-bold text-white leading-8 md:leading-10">
        <span className="text-pink-500">Welcome to Desishub Courses.</span>
      </h1>
      <h1 className="text-sm lg:text-2xl my-3 border-b pb-4">
        Master Modern Web Development With a Project Based Approach. Gain
        real-world experience and land that dev job you've always imagined.
      </h1>

      <div className="flex flex-col items-center">
        {/* lINK HERE */}
        <h2 className="py-6 text-2xl">
          The Course is Coming Soon, Join the Waitlist
        </h2>
        <Button
          asChild
          className="bg-gradient-to-r from-pink-500 to-violet-600 text-gray-100"
        >
          <Link href="/waitlist" className="hidden sm:flex items-center">
            <BsBookmarkCheck className="mr-2 h-4 w-4" />
            Join Wait List
          </Link>
        </Button>
        {/* <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <Course />
          <Course />
          <Course />
          <Course />
        </div> */}
      </div>
    </div>
  );
}
