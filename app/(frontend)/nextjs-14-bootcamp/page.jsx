import BootcampForm from "@/components/BootcampForm";
import WaitListForm from "@/components/WaitListForm";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Enroll in the Desishub Next.js 1 Week Free Online Bootcamp",
  description:
    "Master Next.js in just one week with our intensive free online bootcamp. Gain hands-on experience building real-world applications under the guidance of experienced instructors.",
  keywords:
    "Next.js free online bootcamp, Next.js training, Next.js tutorials, Desishub Coding School",
  favicon: "/favicon.ico", // Replace with the URL of your favicon image
};
export default function page() {
  return (
    <div className="lg:p-16 p-8 mt-8 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-2xl md:text-4xl lg:text-6xl py-8 mb-8 ">
          NextJS 14 Mastery Bootcamp: Empowering Futures with Desishub Coding
          School!
        </h2>
        <p className="text-xl mb-8">
          Join us for a week-long immersive journey into NextJS 14, where
          passionate learners sponsored by Desishub Coding School will delve
          into the latest advancements in web development. This free Bootcamp,
          starting on Saturday, 2nd, promises hands-on learning, expert
          guidance, and a chance to earn a certificate at the Desishub meetup,
          marking the beginning of your expertise in NextJS 14. Seize the
          opportunity to shape your future in the world of cutting-edge web
          technologies!
        </p>
        <div className="flex items-center justify-center sm:hidden">
          <Button
            asChild
            className="bg-gradient-to-r from-pink-500 to-violet-600 text-gray-100"
          >
            <Link href="#book" className="flex items-center">
              <GraduationCap className="mr-2 h-4 w-4" />
              Book a Seat
            </Link>
          </Button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-col-1 gap-16 mt-16">
        <Image
          src="/courses/bootcamp.png"
          width={735}
          height={449}
          alt="Next js FULLSATCK Bootcamp"
        />
        <BootcampForm />
      </div>
    </div>
  );
}
