import BootcampForm from "@/components/BootcampForm";
import WaitListForm from "@/components/WaitListForm";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="lg:p-16 p-8 mt-8 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-6xl py-8 mb-8 ">
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
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-col-1 gap-16 mt-16">
        <Image
          src="/courses/courseMockup.png"
          width={735}
          height={449}
          alt="Zero to hero Fullstack Course"
        />
        <BootcampForm />
      </div>
    </div>
  );
}
