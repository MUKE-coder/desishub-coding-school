import CreateCourseForm from "@/components/admin/CreateCourseForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function CourseSetup({ params: { slug } }) {
  const course = await getData(`/courses/${slug}`);
  // console.log(course);
  return (
    <div>
      <CreateCourseForm course={course} />
    </div>
  );
}
