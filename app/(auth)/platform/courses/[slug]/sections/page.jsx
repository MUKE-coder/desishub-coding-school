import DeleteBtn from "@/components/DeleteBtn";
import { getData } from "@/lib/getData";
import { ChevronRight, Pencil, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Sections({ params: { slug } }) {
  const course = await getData(`/courses/${slug}`);
  const courseId = course.id;
  const sections = await getData("sections");
  const courseSections = sections?.filter(
    (section) => section.courseId === courseId
  );
  return (
    <div className="">
      <div className="flex border-b border-slate-600 py-6 px-8 bg-slate-700 rounded-2xl text-slate-300">
        <h2 className="overflow-hidden truncate w-64">{course.title}</h2>
        <ChevronRight />
        <h2 className="text-slate-100 font-semibold">Sections</h2>
      </div>
      <div className="flex gap-4 flex-col ">
        {courseSections?.length > 0 ? (
          courseSections?.map((section, i) => {
            return (
              <div
                className="flex justify-between gap-4 items-center py-4 border-b border-slate-500"
                key={i}
              >
                <Link
                  className="hover:underline"
                  href={`/platform/courses/${course.slug}/sections/create`}
                >
                  {section.title}
                </Link>
                <div className="flex items-center gap-4 text-sm text-slate-400 flex-wrap ">
                  <Link
                    href={`/platform/courses/${course.slug}/lessons`}
                    className=" bg-purple-600 text-white  flex space-x-1 items-center px-3 py-2 rounded-md"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Lessons</span>
                  </Link>
                  <Link
                    href={`/platform/courses/${course.slug}/sections/${section.id}`}
                  >
                    <Pencil />
                  </Link>
                  <DeleteBtn id={section.id} endpoint="sections" />
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex items-center flex-col justify-center py-16 gap-6 mx-auto text-center">
            <h2>No Sections</h2>
            <Link
              href={`/platform/courses/${course.slug}/sections/create`}
              className=" bg-purple-600 text-white  flex space-x-1 items-center px-3 py-2 rounded-md"
            >
              <Plus className="w-4 h-4" />
              <span>Add Section</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
