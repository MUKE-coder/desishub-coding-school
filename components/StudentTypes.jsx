import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function StudentTypes() {
  const studentTypes = [
    {
      title: "High School graduate",
      description:
        "Got your high school diploma and don't know what to do next?",
      borderColor: "via-violet-500",
      color: "text-violet-500",
      image: "/students/Blaise.jpeg",
    },
    {
      title: "Temporary employee",
      description: "You don't like your job or you've just lost it.",
      borderColor: "via-green-600",
      color: "text-green-500",
      image: "/students/Blaise.jpeg",
    },
    {
      title: "University Graduate",
      description:
        "Got your degree or you're considering a University dropout.",
      borderColor: "via-pink-500",
      color: "text-pink-500",
      image: "/students/Blaise.jpeg",
    },
    {
      title: "Tech addicted",
      description:
        "You are passionate about technology and want to make it your job.",
      borderColor: "via-orange-400",
      color: "text-orange-500",
      image: "/students/Blaise.jpeg",
    },
  ];
  return (
    <div className="bg-slate-900 py-8 sm:px-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="w-full flex flex-col gap-4  ">
          <h1 className="text-[1.65rem] sm:text-4xl lg:text-[3rem] md:font-extrabold lg:leading-[3.2rem] font-bold text-white leading-8 sm:leading-10">
            <span className="text-green-400">Learning</span> to{" "}
            <span className="text-pink-500">Code</span> has never been easier
          </h1>
          <p>
            Our mission is to empower a diverse range of individuals, from high
            school students and job seekers to tech enthusiasts and university
            graduates. Whether you're a novice eager to delve into coding, a
            career changer, a tech enthusiast hungry for knowledge, or a recent
            graduate seeking practical skills, our inclusive programs are
            customized to meet your specific needs.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-4  justify-center mx-auto my-10 sm:my-20 ">
          {studentTypes.map((type, i) => {
            return (
              <div
                key={i}
                className="shadow-2xl shadow-gray-50 dark:shadow-none border dark:border-blue-850 dark:bg-blue-750 rounded-md relative"
              >
                <div className="flex justify-center -translate-y-[1px]">
                  <div className="w-3/4">
                    <div
                      className={twMerge(
                        "h-[2px] bg-gradient-to-r from-transparent  to-transparent  w-full",
                        `${type.borderColor}`
                      )}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center text-center p-2 md:p-8">
                  <Image
                    src={type.image}
                    width={60}
                    height={60}
                    alt=""
                    className="rounded-full object-cover "
                  />
                  <p
                    className={`font-bold mb-0 text-[.9rem]   sm:text-base leading-4 md:leading-5 ${type.color}`}
                  >
                    {type.title}
                  </p>
                  <p className="mb-0 leading-3 md:leading-5 text-[0.6rem] lg:text-base">
                    {type.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
