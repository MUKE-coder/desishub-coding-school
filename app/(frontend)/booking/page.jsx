import BootcampForm from "@/components/BootcampForm";
import WaitListForm from "@/components/WaitListForm";
import { Button } from "@/components/ui/button";
import { CheckCircle, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import jb from "../../../public/jb.JPG";
import instructor from "../../../public/instructor.jpg";
import BookingForm from "@/components/BookingForm";
export const metadata = {
  title: "Enroll in the Desishub Next.js 1 Week Free Online Bootcamp",
  description:
    "Master Next.js in just one week with our intensive free online bootcamp. Gain hands-on experience building real-world applications under the guidance of experienced instructors.",
  keywords:
    "Next.js free online bootcamp, Next.js training, Next.js tutorials, Desishub Coding School",
  favicon: "/favicon.ico", // Replace with the URL of your favicon image
};
export default function page() {
  const chats = [
    {
      you: "When I follow along with tutorials I feel I know exactly what to do, but as soon as I try to build my own projects I get stuck.",
      mePhoto: jb,
      youPhoto: jb,
      me: "As a self-taught developer, I used to feel the same way! Let me show you how I overcame this.",
    },
    {
      you: "I have tried so many courses, but still don't know how to code JavaScript.",
      mePhoto: jb,
      youPhoto: jb,
      me: "This is because other courses don't teach you the most important topic, how to think like a developer.",
    },
  ];
  const benefits = [
    "Personalized learning: Gain a tailored program based on your specific goals and skill level.",
    "Expert guidance: Master complex concepts with clear explanations and practical examples.",
    "Unwavering support: Get help overcoming any challenge and stay motivated on your coding journey.",
    "Real-world application: Build your portfolio with projects that showcase your skills to potential employers.",
    "Faster progress: Achieve your coding goals in a shorter time compared to self-learning.",
    "Confidence and clarity: Navigate the world of programming with confidence and a roadmap for success.",
  ];
  return (
    <div className="lg:p-16 p-8 mt-8 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-2xl md:text-4xl lg:text-6xl py-8 mb-8 ">
          Tired of struggling through programming tutorials? Stop feeling lost
          and frustrated!. Join Me on 1-on-1 Live Coaching Classes
        </h2>
        {/* <p className="text-xl mb-8">
          Join us for a week-long immersive journey into NextJS 14, where
          passionate learners sponsored by Desishub Coding School will delve
          into the latest advancements in web development. This free Bootcamp,
          starting on Saturday, 2nd, promises hands-on learning, expert
          guidance, and a chance to earn a certificate at the Desishub meetup,
          marking the beginning of your expertise in NextJS 14. Seize the
          opportunity to shape your future in the world of cutting-edge web
          technologies!
        </p> */}
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
        <div className="flex items-start justify-start flex-col">
          <h1 className="text-[1.5rem] sm:text-3xl  md:font-extrabold font-bold text-white leading-8 mb-4">
            I can help you <span className="text-green-400">build</span> your
            dream <span className="text-pink-500">irrespective</span>of your
            previous struggles
          </h1>
          {chats.map((item, i) => {
            return (
              <div className="py-4" key={i}>
                <div className="py-3 mb-4 px-4 bg-slate-200 text-slate-600 flex items-center space-x-2 rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden mr-16">
                  <Image
                    src={item.youPhoto}
                    width={50}
                    height={50}
                    alt="visitor"
                    className="rounded-full"
                  />
                  <span className="text-xs md:text-sm">{item.you}</span>
                </div>
                <div className="py-3 px-4 bg-slate-600 text-slate-100 flex items-center space-x-2 rounded-tr-[2rem] rounded-bl-[2rem] overflow-hidden ml-16">
                  <span className="text-xs md:text-sm ">{item.me}</span>
                  <Image
                    src={item.mePhoto}
                    width={50}
                    height={50}
                    alt="JB WEB DEVELOPER"
                    className="rounded-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Image
          className="rounded-md w-3/4"
          src={instructor}
          alt="JB WEB DEVELOPER INSTRUCTOR"
        />
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-col-1 gap-16 mt-[10rem]">
        <div className="">
          <h1 className="text-[1.5rem] sm:text-3xl  md:font-extrabold font-bold text-white leading-8 mb-4">
            Here's what you'll get:
          </h1>
          <ul>
            {benefits.map((benefit) => {
              return (
                <li className="flex items-center gap-3 py-2.5 border-b border-slate-800">
                  <div className="flex w-8 h-8 bg-lime-100 rounded-full justify-center items-center text-lime-900 shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <span>{benefit}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <BookingForm />
      </div>
    </div>
  );
}
