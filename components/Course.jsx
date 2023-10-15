import Image from "next/image";
import Link from "next/link";
import React from "react";
import courseImage from "../public/courses/course.webp";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { Button } from "./ui/button";
import { Mail, SquareCode } from "lucide-react";
import { BsBookmarkCheck } from "react-icons/bs";

export default function Course() {
  return (
    <div className="border border-gray-600  transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-slate-900  relative max-w-[350px]">
      <div className="h-[196px] relative">
        <Link className="relative w-full h-full inline-block" href="/">
          <Image
            sizes="350px"
            className="object-cover course-image"
            src={courseImage}
            fill
            style=""
          />
        </Link>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="mb-2 leading-4">
            <Link
              className="text-gray-700 dark:text-white dark:hover:text-violet-60 no-underline transition-colors duration-200 ease-in-out font-semibold text-lg hover:no-underline"
              href="#"
            >
              All Access Subscripton
            </Link>
          </h3>
          <div className="ml-1">
            <div className="bg-slate-800 dark:bg-slate-800 font-medium md:font-bold inline px-3 py-1 rounded-2xl text-sm text-pink-500">
              330h
            </div>
          </div>
        </div>
        <p className="text-base mb-3 line-clamp-3">
          Become the best coder you can be with unlimited access to all the
          existing and future courses
        </p>
        <p className="font-bold text-gray-800 dark:text-white mb-0">
          $29/m
          <span className="ml-2 line-through font-normal text-gray-350 text-sm">
            $149
          </span>
        </p>
        <div className="flex items-center justify-between mt-3">
          <Button
            asChild
            className="bg-gradient-to-r from-pink-500 to-violet-600 text-gray-100"
          >
            <Link href="/enroll" className="hidden sm:flex items-center">
              <BsBookmarkCheck className="mr-2 h-4 w-4" />
              Enroll
            </Link>
          </Button>
          <Button
            asChild
            className="border border-pink-500  text-gray-100 bg-slate-900 hover:bg-slate-900"
          >
            <Link href="/enroll" className="hidden sm:flex items-center">
              <HiOutlineColorSwatch className="mr-2 h-4 w-4" />
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
