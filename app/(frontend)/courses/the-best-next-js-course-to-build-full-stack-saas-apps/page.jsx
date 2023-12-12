"use client";
import FeaturedLanguages from "@/components/CareerPath/FeaturedLanguages";
import {
  Check,
  ChevronRight,
  CreditCard,
  DownloadCloud,
  Flame,
  LayoutGrid,
  Lock,
  Mail,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player/youtube";
import { twMerge } from "tailwind-merge";
export default function Course() {
  // https://www.apptension.com/saas-boilerplate#saas-bp-tech
  // https://www.saasplanet.org/#pricing
  // https://docs.shipped.club/
  // https://makerkit.dev/courses/nextjs-app-router
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
  ];
  const studentTypes = [
    {
      title: "Next Js Saas Boilerplate",
      description:
        "Accelerate your full-stack SaaS app development with this comprehensive Next.js boilerplate, designed to streamline the process and save you time.",
      borderColor: "via-violet-500",
      color: "text-violet-500",
      image: "/projects/starter.jpeg",
    },
    {
      title: "Medical App",
      description:
        "Revolutionize healthcare with a Next.js-powered application, offering seamless patient management, appointment scheduling, and medical record tracking for healthcare professionals.",
      borderColor: "via-green-600",
      color: "text-green-500",
      image: "/projects/medical.jpeg",
    },
    {
      title: "Banking App",
      description:
        "Experience cutting-edge financial services with our Next.js-based banking app, providing secure transactions, real-time account management, and a user-friendly interface for all your banking needs.",
      borderColor: "via-pink-500",
      color: "text-pink-500",
      image: "/projects/bankApp.jpeg",
    },
  ];
  const features = [
    {
      icon: Mail,
      title: "Emails",
      items: [
        "Send transactional emails",
        "Create custom emails using react-email",
        "Powered using Resend",
      ],
    },
    {
      icon: CreditCard,
      title: "Payments",
      items: [
        "Create custom pricing plans",
        "Customer portal",
        "Powered using Stripe",
      ],
    },
    {
      icon: Lock,
      title: "Authentication",
      items: [
        " Magic links setup",
        "Login with Google, GitHub, Discord",
        "User data stored in your DB",
        "Secured pages and routes",
      ],
    },
    {
      icon: LayoutGrid,
      title: "Components",
      items: [
        "Re-usable components library",
        "100% customizable",
        "Built using ShadCN UI",
        "Tailwind",
      ],
    },
    {
      icon: DownloadCloud,
      title: "Database",
      items: ["MySQL, Mongo, Postgres", "Prisma ORM", "Schema included"],
    },
    {
      icon: Flame,
      title: "Extras",
      items: [
        "Admin dashboard",
        "Create and update pricing plans",
        "Blog using markdown",
        "File uploads",
      ],
    },
  ];
  return (
    <div className="mx-auto mt-32 flex flex-1 flex-col items-center justify-center space-y-10">
      <h2 className="temporary-pulse inline-flex w-auto animate-pulse items-center space-x-2 rounded-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-700 bg-clip-text px-4 py-2 text-center text-sm font-normal text-transparent shadow shadow-gray-700">
        The best Next.js course to build full-stack SaaS apps
      </h2>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold  largeHeading py-8 mb-8 ">
          The Only Next.js course you need for{" "}
          <span className="textGradient">building SaaS Apps from scratch</span>
        </h2>
        <p className="text-xl mb-8">
          Learn how to build SaaS applications with Next.js 14 App Router,
          Supabase,MongoDB and Planet Scale and Stripe. From auth to production,
          we build together a SaaS app that you can use for your own projects.
          Get access to the course for only $200.
        </p>
        <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:[&>*]:translate-y-0.5 bg-primary text-primary-foreground hover:bg-primary/90 text-sm h-10 [&>*]:py-2 [&>*]:px-4 rounded-full PreviewButton text-white">
          <a
            href=""
            className="flex w-full h-full items-center transition-transform duration-500 ease-out undefined"
          >
            <span className="flex w-full flex-1 items-center justify-center">
              <span>Enroll the Course</span>
              <ChevronRight />
            </span>
          </a>
        </button>
        <div className="py-24">
          <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl textGradient">
            We will Build 3+ Apps with Next Js 14
          </h2>
          <p className="py-4">
            It's NOT just another COURSE.This is the practical and interactive
            Next.js course you need to build SaaS apps deployed at the Edge ⚡️
          </p>
          <div className="w-full grid grid-cols-3 gap-4  justify-center mx-auto my-10 sm:my-20 ">
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
                      width={259}
                      height={194}
                      alt={type.title}
                      className="rounded-full object-cover w-full h-48 cursor-pointer"
                    />
                    <p
                      className={`font-bold mb-0 text-[.9rem]   sm:text-base leading-4 md:leading-5 ${type.color}`}
                    >
                      {type.title}
                    </p>
                    <p className="mb-0 leading-3 md:leading-5 text-[0.6rem] lg:text-base line-clamp-2">
                      {type.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 sm:mt-16">
            <FeaturedLanguages languages={languages} />
          </div>
          <div className="mx-auto flex items-center justify-center py-8">
            <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
          </div>
          <div className="mt-8">
            <h2 className="temporary-pulse inline-flex w-auto animate-pulse items-center space-x-2 rounded-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-700 bg-clip-text px-4 py-2 text-center text-sm font-normal text-transparent shadow shadow-gray-700">
              With more than 100+ hours of HD Video Content, Learning at 2x
              Speed
            </h2>
            <h2 className="pt-6 text-white text-4xl font-bold">
              Build, ship, and Land your Dev Job
            </h2>
            <p className="text-slate-400 py-3">
              Login, payments, emails, dashboard, user settings and more
              available to you instantly. Build off our boilerplate and spend
              more time building your startup.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-start justify-start gap-3"
                  >
                    <Icon className="text-slate-400" />
                    <h2>{feature.title}</h2>
                    <ul>
                      {feature.items.map((item, i) => {
                        return (
                          <li key={i} className="flex items-center space-x-2">
                            <Check className="w-4 h-4" />
                            <span>{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
