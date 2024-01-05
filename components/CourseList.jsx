import React from "react";
import Course from "./Course";
import { Button } from "./ui/button";
import { BsBookmarkCheck } from "react-icons/bs";
import Link from "next/link";
import FullWidthCourseCard from "./FullWidthCourseCard";
export default function CourseList() {
  return (
    <div className="container text-center flex flex-col items-center mb-6 md:my-6 lg:my-10">
      <FullWidthCourseCard />
    </div>
  );
}
