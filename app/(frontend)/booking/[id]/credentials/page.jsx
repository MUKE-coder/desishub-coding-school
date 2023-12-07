import CopyContent from "@/components/CopyContent";
import { getData } from "@/lib/getData";
import { CheckCircle2, MessageSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function page({ params: { id } }) {
  const user = await getData(`/bookings/${id}`);

  return (
    <div className="max-w-6xl mx-auto p-16 ">
      <h2 className="bg-gradient-to-r text-center from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-2xl md:text-3xl lg:text-5xl py-8 ">
        Welcome {user?.firstName} {user?.lastName} to Class.
      </h2>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-8">
        Save the Credentials Below, You will Use them to Login for the Meetings
        in Future
      </h3>
      <div className="flex items-center justify-center">
        <CopyContent email={user?.email} regNo={user?.regNo} />
      </div>
      <Link
        className="inline-flex item-center justify-center my-16 space-x-2 animate-pulse bg-slate-700 mx-auto text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        href="https://wa.me/message/5USU26346OWRF1"
      >
        <MessageSquare />
        <span>Chat with JB on Whatsap</span>
      </Link>
    </div>
  );
}
