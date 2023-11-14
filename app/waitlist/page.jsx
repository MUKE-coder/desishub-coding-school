import WaitListForm from "@/components/WaitListForm";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="lg:p-16 p-8 mt-8 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-6xl py-8 mb-8 ">
          Unlock Fullstack Potential: Join Next.js Mastery Waitlist!
        </h2>
        <p className="text-xl mb-8">
          Embark on a transformative coding journey from zero to hero with our
          upcoming Fullstack Next.js course—secure your spot now and be the
          first to level up your skills!
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-col-1 gap-16 mt-16">
        <Image
          src="/courses/courseMockup.png"
          width={735}
          height={449}
          alt="Zero to hero Fullstack Course"
        />
        <WaitListForm />
      </div>
    </div>
  );
}
