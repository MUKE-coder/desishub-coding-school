"use client";
import FeaturedLanguages from "@/components/CareerPath/FeaturedLanguages";
import CustomAccordion from "@/components/CustomAccordion";
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

  const FAQs = [
    {
      qn: "What do I need to know to take this course?",
      ans: "To take this course you’ll need intermediate JavaScript knowledge and beginner React knowledge. You don’t need any Next.js or Typescript knowledge. If you don’t meet the requirements above, don’t worry! There will be a 1hr optional crash course covering all the Js you need to get started with react",
    },
    {
      qn: "What does the course cover?",
      ans: "The course covers Next.js basics, Next.js with TypeScript, building a full-stack Next.js application with Prisma, MongoDB, MySQL, Stripe Billing, Lemon Squeezy,Tailwind, and Mails with Resend. You'll also build three SaaS applications: a Next.js SaaS boilerplate, a medical app, and a banking app.",
    },
    {
      qn: "This course is too expensive for me",
      ans: "I understand that the price of this course may seem high at first glance. However, I want to assure you that I have carefully considered the value it offers and set the price accordingly.I have spoken with numerous developers from various backgrounds, including business owners in the USA, system administrators in Nigeria, and junior developers in India. Based on their feedback and the comprehensive content of the course, I believe it represents exceptional value for money. Consider the following:You are learning the most in-demand tech skills currently, which puts you ahead of the curve. This knowledge can open doors to career advancement, increased earning potential, and freelance opportunities.The course includes a comprehensive guide on how to find freelance clients, allowing you to start earning money immediately.The course provides valuable guidance on building and scaling your own applications, which can significantly increase your user base and potential revenue.When you consider the potential return on investment, the course price becomes much more justifiable. In fact, it could be the best investment you make in your career.If you are still hesitant, I encourage you to compare my course to other offerings on platforms like Udemy. You will quickly see that the depth of knowledge, hands-on projects, and personalized support I offer are unmatched at this price point.Ultimately, the decision is yours. I am confident that my course offers exceptional value and will equip you with the skills you need to achieve your career goals. However, I also respect your budget and understand that it may not be the right fit for everyone.",
    },
    {
      qn: "It’s just another watch-along course. I won’t actually be able to code this myself. Just copy what you did.",
      ans: "Nope! In this course, we’re doing everything from scratch.I’ll explain every decision and show why and how I chose to do this.Whenever we do anything, I’ll show you how we found this in the docs and how to translate this into a feature in our app.Not to mention the active lessons where you will code the most important parts of the app and master the features of Next14 to guarantee you walk away with a deep understanding and the skills to build stunning apps with Next14.",
    },
    {
      qn: "How is this course different than your YouTube videos?",
      ans: "While my YouTube videos provide valuable insights into various web development topics, including Next.js, this course offers a significantly deeper and more comprehensive learning experience. Here are some key differences:1. Structured learning path: The course follows a carefully designed curriculum that progresses logically, ensuring you build a solid foundation in Next.js and its related technologies. This structured learning path facilitates deeper understanding compared to individual YouTube videos, which may not always offer a cohesive learning experience.2). Hands-on coding exercises: The course goes beyond simply explaining concepts; it emphasizes practical application through hands-on coding exercises. You'll build unique applications that solidify your understanding and equip you with the skills to confidently build your own projects. 3). Active learning: This is not a passive watching experience. The course promotes active learning by encouraging you to code along with me and tackle challenges independently. This active participation leads to a more profound understanding and mastery of the material.4. Uncommon applications: We build applications not readily found online for this specific tech stack. This allows you to explore advanced concepts and gain valuable experience with practical use cases.5). Community and support: You'll gain access to a supportive community of developers and participate in weekly one-on-one sessions and a WhatsApp group. This fosters a collaborative learning environment where you can ask questions, receive feedback, and connect with other learners.In essence, this course offers a structured, hands-on, and interactive learning experience that goes far beyond the scope of my YouTube videos. It provides the necessary tools and support to help you master Next.js and build stunning applications.",
    },
    {
      qn: "Are the course materials up-to-date?",
      ans: "Yes, the course materials are constantly updated to reflect the latest versions of Next.js, TypeScript, and other relevant technologies.",
    },
    {
      qn: "What is the duration of the course?",
      ans: "The course contains approximately 60+ hours of video content, covering all concepts at a detailed pace.",
    },
    {
      qn: "What kind of projects will I build in the course?",
      ans: "You will build three practical SaaS applications: a Next Js Fullstack Portfolio, Next.js SaaS boilerplate, a medical app, and a banking app. These projects are designed to give you hands-on experience with all the concepts covered in the course.",
    },
    {
      qn: "What are the career opportunities after completing this course?",
      ans: "This course equips you with the skills to become a full-stack Next.js developer and build SaaS applications. You can pursue careers as a Software Engineer, Full-Stack Developer, or Frontend Developer specializing in Next.js and SaaS development.",
    },
    {
      qn: "Is there a certificate of completion offered?",
      ans: "Yes, upon completing the course and passing any assessments, you will receive a certificate of completion to showcase your acquired skills.",
    },
    {
      qn: "What happens if I get stuck or have questions?",
      ans: "The course provides access to a supportive community forum where you can ask questions, get help from fellow students and instructors, and discuss course topics.",
    },
    {
      qn: "Can I buy this course even if I don’t know TypeScript?",
      ans: "Yes, yes, yes! i teach by building apps. You’ll not only learn Next14 but build a strong base of TypeScript knowledge. TypeScript is used in most industry-level projects these days, so this is a perfect chance to learn it.",
    },
    {
      qn: "Can I purchase multiple licenses, for my team or group?",
      ans: "Certainly! You have the option to acquire multiple licenses using the toggle in the pricing section.",
    },
    {
      qn: "Why does it even matter? AI will just replace me :(",
      ans: "AI is exactly why you should take this course.AI can now output decent code, which means a developer that uses AI can do more than they did before. If 10 devs now do the work of 12 devs, those two are not necessary and they just lost a job.Here’s how to not get replaced:Be more than someone that just writes code.An AI doesn’t understand the big picture. How an app should look like start to finish. How to create the best experience for the users. How to make the right decision that will make a huge impact on the clients. Not to mention that right now, if you ask ChatGPT to do x, it will give you a mediocre and unoptimized solution.AI will empower those with deep understanding and replace the mediocre devs. Understanding how the code truly works gives you the ability to prompt well as AI advances. Understanding is the key to the future. And deep understanding is exactly what you will get in this course.",
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
          <div className="mx-auto flex items-center justify-center py-8 mt-8">
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
            <div className="grid grid-cols-3 gap-8 mt-8">
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
          <div className="mt-8 max-w-3xl mx-auto">
            <h2 className="temporary-pulse inline-flex w-auto animate-pulse items-center space-x-2 rounded-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-700 bg-clip-text px-4 py-2 text-center text-sm font-normal text-transparent shadow shadow-gray-700 mb-8">
              Frequently Asked Questions (FAQs)
            </h2>
            <CustomAccordion faqs={FAQs} />
          </div>
        </div>
      </div>
    </div>
  );
}
