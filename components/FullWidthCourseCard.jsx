import { Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FullWidthCourseCard() {
  const features = [
    "Build 4 Working SAAS Apps (Medical App, Banking App, Saas Boilerplate,Portifolio App)",
    "Implement Complex routing and use of Different Layouts",
    "Highly practical Course with a step by step Implementation",
    "Confidently build full-stack apps with Next.js 13+ and TypeScript",
    "Build RESTful APIs",
    "Implement Multi-authentication with NextAuth.js",
    "Send beautifully styled emails with React Email and Resend",
  ];
  return (
    <div className="">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-6xl py-8 mb-8 ">
          Unlock Fullstack Potential: Join Next.js Mastery Course!
        </h2>
        <p className="text-xl mb-8">
          Embark on a transformative coding journey from zero to hero with our
          upcoming Fullstack Next.js course—secure your spot now and be the
          first to level up your skills!
        </p>
        <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:[&>*]:translate-y-0.5 bg-primary text-primary-foreground hover:bg-primary/90 text-sm h-10 [&>*]:py-2 [&>*]:px-4 rounded-full PreviewButton text-white">
          <a
            href="/courses/the-best-next-js-course-to-build-full-stack-saas-apps"
            className="flex w-full h-full items-center transition-transform duration-500 ease-out undefined"
          >
            <span className="flex w-full flex-1 items-center justify-center">
              <span>View Course Details</span>
              <ChevronRight />
            </span>
          </a>
        </button>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-col-1 gap-16 mt-16">
        <Image
          src="/courses/courseMockup.png"
          width={735}
          height={449}
          alt="Zero to hero Fullstack Course"
        />
        {/* <WaitListForm /> */}
        <div className="mt-8 max-w-3xl mx-auto">
          <h2 className="temporary-pulse inline-flex w-auto animate-pulse items-center space-x-2 rounded-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-700 bg-clip-text px-4 py-2 text-center text-sm font-normal text-transparent shadow shadow-gray-700 mb-8">
            The best Next.js course to build full-stack SaaS apps
          </h2>
          <ul className="text-left">
            {features.map((item, i) => {
              return (
                <li key={i} className="flex items-center space-x-2 mb-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
