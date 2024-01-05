import { Check, PlusCircle } from "lucide-react";
import React from "react";

export default function CourseOutline() {
  const modules = [
    {
      module: "Module:1 - Next js 14, Tailwind Css and Typescript Basics",
      topics: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      module: "Module:2 - Saas Business - Making Money ",
      topics: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ];
  const features = ["Feature 1", "Feature 2", "Feature 3"];
  return (
    <div className="p-16">
      <ol className="relative border-s border-gray-200 dark:border-gray-700 ">
        {modules.map((item, i) => {
          return (
            <li className="mb-10 ms-6" key={i}>
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <PlusCircle className="w-4 h-4 text-blue-800 dark:text-blue-300" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  text-transparent bg-clip-text textGradient">
                {item.module}
              </h3>
              <ul className="text-left pt-4 ">
                {item.topics.map((item, i) => {
                  return (
                    <li key={i} className="flex items-center space-x-2 mb-2">
                      <Check className="w-4 h-4 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
