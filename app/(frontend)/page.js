"use client";
import FeaturedLanguages from "@/components/CareerPath/FeaturedLanguages";
import FindOut from "@/components/CareerPath/FindOut";
import CourseList from "@/components/CourseList";
import Cube from "@/components/Cube";
import FeaturedCourses from "@/components/FeaturedCourses";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import StudentTypes from "@/components/StudentTypes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const languages = [
    {
      name: "HTML",
      logo: "/logos/htmlred.svg",
    },
    {
      name: "Css",
      logo: "/logos/css-3.svg",
    },
    {
      name: "Javascript",
      logo: "/logos/js.svg",
    },
    {
      name: "Python",
      logo: "/logos/python.svg",
    },
    {
      name: "Django",
      logo: "/logos/django.svg",
    },
    {
      name: "Larvel",
      logo: "/logos/laravel.svg",
    },
    {
      name: "PHP",
      logo: "/logos/php-1.svg",
    },
    {
      name: "React",
      logo: "/logos/react.svg",
    },
    {
      name: "Jamstack",
      logo: "/logos/jamstack.svg",
    },
    {
      name: "Tailwind",
      logo: "/logos/tailwind.svg",
    },
    {
      name: "Next Js",
      logo: "/logos/nextjs.svg",
    },
    {
      name: "Node Js",
      logo: "/logos/nodejs.svg",
    },
    {
      name: "Github",
      logo: "/logos/git.svg",
    },
    {
      name: "C++",
      logo: "/logos/cplus.svg",
    },
  ];
  return (
    <section className="min-h-screen">
      <div className="relative">
        <Image
          src="grid.svg"
          alt="background"
          width={1572}
          height={795}
          className="absolute -top-28 -z-10"
          style="color: transparent"
        />
      </div>
      <Hero />
      <div className="mt-8 sm:mt-16">
        <FeaturedLanguages languages={languages}/>
      </div>
      {/* <FindOut /> */}
      <div className="py-6">
        <Cube />
      </div>
      <StudentTypes />
      {/* <div className="relative">
        <Image
          src="grid.svg"
          alt="background"
          width={1572}
          height={795}
          className="absolute -top-28 -z-10"
          style="color: transparent"
        />
      </div> */}
      <section className="bg-slate-900">
        <CourseList />
      </section>
    </section>
  );
}
