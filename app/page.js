"use client";
import FeaturedLanguages from "@/components/CareerPath/FeaturedLanguages";
import FindOut from "@/components/CareerPath/FindOut";
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
        {/* <div className="text-center">
          <Heading title="Featured Languages" />
        </div> */}
        <FeaturedLanguages />
      </div>
      <FindOut />
      <StudentTypes />
    </section>
  );
}
