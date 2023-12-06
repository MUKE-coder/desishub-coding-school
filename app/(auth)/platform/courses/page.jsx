import { getData } from "@/lib/getData";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Courses() {
  const courses = await getData("courses");
  return (
    <div className="">
      <h2 className="border-b border-slate-600 pb-4">Your Courses</h2>
      <div className="">
        {courses.map((course, i) => {
          return (
            <div
              className="flex items-center gap-4 justify-between py-4 border-b border-slate-600"
              key={i}
            >
              <Image
                className="w-24 h-16 rounded-xl"
                src={course.courseImage}
                alt={course.title}
                width={735}
                height={449}
              />
              <Link
                className="hover:underline"
                href={`/platform/courses/${course.slug}/course-setup`}
              >
                {course.title}
              </Link>
              <div className="flex items-center gap-4 text-sm text-slate-400 flex-wrap ">
                <Link
                  href={`/platform/courses/${course.slug}/sections`}
                  className=" bg-purple-600 text-white  flex space-x-1 items-center px-3 py-2 rounded-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Sections</span>
                </Link>
                <Link
                  href={`/platform/courses/${course.slug}/lessons`}
                  className=" bg-purple-600 text-white  flex space-x-1 items-center px-3 py-2 rounded-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Lessons</span>
                </Link>
                <Link
                  href={`/platform/courses/${course.slug}/faqs`}
                  className=" bg-purple-600 text-white  flex space-x-1 items-center px-3 py-2 rounded-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>FAQs</span>
                </Link>
                <Link
                  href={`/platform/courses/${course.slug}/attachments`}
                  className=" bg-purple-600 text-white  flex space-x-1 items-center px-3 py-2 rounded-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Attachments</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
