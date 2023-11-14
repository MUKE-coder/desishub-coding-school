"use client";
import { BiMenuAltLeft, BiBookBookmark } from "react-icons/bi";
import {
  BsChevronRight,
  BsCodeSlash,
  BsQuestionLg,
  BsRobot,
  BsWhatsapp,
} from "react-icons/bs";
import { LiaCertificateSolid } from "react-icons/lia";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { AiOutlineMedicineBox, AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineAltRoute } from "react-icons/md";
import Image from "next/image";
export default function Header() {
  const resources = [
    {
      title: "Dev Tools",
      href: "/dev-tools",
      description: "Handy tools for developers to streamline their workflow.",
    },
    {
      title: "Guides",
      href: "/guides",
      description:
        "Comprehensive guides to help you master web development techniques.",
    },
    {
      title: "Blogs",
      href: "/blogs",
      description:
        "Insightful articles from experts in the field of web development.",
    },
    {
      title: "Cheatsheet",
      href: "/cheatsheet",
      description:
        "Quick reference guides to essential coding concepts and commands.",
    },
    {
      title: "Jobs",
      href: "/jobs",
      description: "Find job opportunities in the web development industry.",
    },
    {
      title: "Community",
      href: "/community",
      description:
        "Connect with like-minded developers and share your knowledge.",
    },
  ];
  const codeBrief = [
    {
      title: "Interview Questions",
      href: "/interview-questions",
      description:
        "Common interview questions to help you prepare for job interviews.",
    },
    {
      title: "Coding Challenges",
      href: "/coding-challenges",
      description:
        "Sharpen your coding skills with fun and challenging programming exercises.",
    },
    {
      title: "Practice Projects",
      href: "/practice-projects",
      description:
        "Hands-on projects to apply what you've learned in web development.",
    },
    {
      title: "Tutorials",
      href: "/tutorials",
      description:
        "Step-by-step tutorials to learn and master web development topics.",
    },
    {
      title: "Newsletter",
      href: "/newsletter",
      description:
        "Subscribe to our newsletter for the latest updates and web development news.",
    },
    {
      title: "Book a Call",
      href: "/book-a-call",
      description:
        "Schedule a one-on-one consultation or mentoring session with our JB Web Developer.",
    },
  ];
  const learningPath = [
    {
      title: "Bootcamps",
      href: "/bootcamps",
      description: "Intensive, hands-on bootcamps for rapid skill development.",
    },
    {
      title: "Events",
      href: "/events",
      description:
        "Stay updated on upcoming web development events and meetups.",
    },
    {
      title: "Not sure where to start",
      href: "/survey",
      description:
        "Take a quick survey to find the perfect learning path for you.",
    },
  ];
  const courses = [
    {
      title: "All Courses",
      href: "/all-courses",
      description:
        "Browse our entire course catalog for a comprehensive selection.",
    },
    {
      title: "Fullstack Courses",
      href: "/fullstack-courses",
      description:
        "Learn both front-end and back-end development for a well-rounded skillset.",
    },
    {
      title: "Frontend Courses",
      href: "/frontend-courses",
      description:
        "Focus on front-end development, including HTML, CSS, and JavaScript.",
    },
    {
      title: "Free Courses",
      href: "/free-courses",
      description:
        "Access our collection of free courses to kickstart your learning journey.",
    },
    {
      title: "Recommended Courses",
      href: "/recommended-courses",
      description: "Explore courses recommended by experts and the community.",
    },
    {
      title: "Not Sure Where to Start",
      href: "/course-survey",
      description:
        "Take a quick survey to get personalized course recommendations.",
    },
  ];
  const membership = [
    {
      title: "High School Students",
      href: "/high-school-membership",
      description:
        "Membership tailored for high school students seeking to learn and grow.",
    },
    {
      title: "Campus Students",
      href: "/campus-membership",
      description:
        "Exclusive membership for campus students to access educational resources.",
    },
    {
      title: "Individual Groups",
      href: "/individual-groups-membership",
      description:
        "Ideal for individuals or small groups looking to expand their knowledge.",
    },
    {
      title: "Teams",
      href: "/teams-membership",
      description:
        "Membership designed for teams and organizations to foster skill development.",
    },
    {
      title: "Kids",
      href: "/kids-membership",
      description:
        "Engaging membership for younger learners to explore new skills.",
    },
    {
      title: "Self Taught",
      href: "/self-taught-membership",
      description:
        "Self-paced membership for individuals pursuing self-guided learning journeys.",
    },
  ];
  const mobileLinks = [
    {
      title: "Courses",
      href: "/courses",
      icon: BiBookBookmark,
    },
    {
      title: "Resources",
      href: "/",
      icon: AiOutlineMedicineBox,
    },
    {
      title: "Learning Path",
      href: "/",
      icon: MdOutlineAltRoute,
    },
    {
      title: "CodeBrief",
      href: "/",
      icon: BsCodeSlash,
    },
    {
      title: "Membership",
      href: "/",
      icon: LiaCertificateSolid,
    },
    {
      title: "Community",
      href: "/",
      icon: AiOutlineUsergroupAdd,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  function closeMenu() {
    setIsOpen(false);
  }
  function openMenu() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="flex justify-between items-center sm:px-16 px-4 py-8 w-full top-0 fixed h-14 bg-slate-950 z-50">
        <Link href="/">
          <img
            src="/logo-red.png"
            className="h-14"
            alt="desishub coding school logo"
          />
        </Link>
        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {courses.map((course) => (
                    <ListItem
                      key={course.title}
                      title={course.title}
                      href={course.href}
                    >
                      {course.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Learning Paths</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <BiMenuAltLeft className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Learning Paths
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Structured paths to guide your learning journey in web
                          development.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {learningPath.map((path) => (
                    <ListItem
                      key={path.title}
                      title={path.title}
                      href={path.href}
                    >
                      {path.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>CodeBrief</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {codeBrief.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {resources.map((resource) => (
                    <ListItem
                      key={resource.title}
                      title={resource.title}
                      href={resource.href}
                    >
                      {resource.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Membership</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {membership.map((resource) => (
                    <ListItem
                      key={resource.title}
                      title={resource.title}
                      href={resource.href}
                    >
                      {resource.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Single Link */}

            <NavigationMenuItem>
              <Link href="/thecodementor" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  theCodeMentor
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          asChild
          className="bg-gradient-to-r from-pink-500 to-violet-600 text-gray-100"
        >
          <Link href="/enroll" className="hidden sm:flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            Enroll
          </Link>
        </Button>
        <Button
          onClick={openMenu}
          className="bg-transparent hover:bg-slate-950 sm:hidden"
        >
          <Menu className="mr-2 h-6 w-6 text-slate-50" />
        </Button>
      </div>
      <div
        className={`${
          isOpen
            ? "sm:hidden flex flex-col justify-between items-start px-4 py-4 w-full  top-0 fixed h-screen right-0 left-0 bg-slate-950 z-[100]"
            : "hidden sm:hidden flex-col justify-between items-start px-4 py-4 w-full  top-0 fixed h-screen right-0 left-0 bg-slate-950 z-[100]"
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between border-b border-gray-500 w-full">
            <Link href="/">
              <img
                src="logo-red.png"
                className="h-14"
                alt="desishub coding school logo"
              />
            </Link>
            <Button
              onClick={closeMenu}
              className="bg-transparent hover:bg-slate-950"
            >
              <X className="mr-2 h-6 w-6 text-slate-50" />
            </Button>
          </div>
          <div className="flex flex-col  mt-4 w-full">
            {mobileLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={closeMenu}
                  key={i}
                  href={item.href}
                  className={`flex items-center py-3 justify-between ${
                    i !== mobileLinks.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon />
                    <span>{item.title}</span>
                  </div>
                  <BsChevronRight />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-full py-6 flex border-t border-gray-500 justify-between gap-2 flex-wrap">
          <Link href="/chat" className="flex items-center space-x-2">
            <BsWhatsapp className="h-6 w-6 text-green-500" />
            <span>Chat with Instructor</span>
          </Link>
          <Link href="/chat" className="flex items-center space-x-2">
            <BsQuestionLg className="h-6 w-6 text-orange-500" />
            <span>FAQs</span>
          </Link>
          <Link href="/chat" className="flex items-center space-x-2">
            <BsRobot className="h-6 w-6 text-rose-500" />
            <span>Ask Our AI</span>
          </Link>
        </div>
      </div>
    </>
  );
}

const ListItem = ({ className, title, children, ...props }) => {
  const listItemRef = useRef(null); // Create a ref

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={listItemRef} // Assign the ref to the anchor element
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
