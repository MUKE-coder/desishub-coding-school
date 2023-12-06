"use client";
import {
  BellDot,
  Book,
  BookPlus,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  LogOutIcon,
  SlidersHorizontal,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ isOpen, setIsOpen }) {
  const sidebarLinks = [
    {
      title: "Dashboard",
      href: "/platform",
      icon: LayoutDashboard,
    },
    {
      title: "Bootcamp",
      href: "/platform/bootcamp",
      icon: GraduationCap,
    },
    {
      title: "Project Ideas",
      href: "/platform/suggested-projects",
      icon: BookPlus,
    },
    {
      title: "Waitlist",
      href: "/platform/waitlist",
      icon: Users,
    },
    {
      title: "Courses",
      href: "/platform/courses",
      icon: Book,
    },
  ];
  const pathname = usePathname();
  // console.log(isOpen);
  return (
    <div
      className={
        isOpen
          ? "fixed md:static z-50 md:w-72 w-3/4 left-0 shadow-md bg-slate-800 md:bg-slate-950 min-h-screen rounded-md"
          : "hidden md:block  md:static z-50 md:w-72 w-3/4 left-0 shadow-md bg-slate-800 md:bg-slate-950 min-h-screen rounded-md"
      }
    >
      <div className=" bg-purple-400 p-2 rounded-md flex justify-between md:justify-center ">
        <div className="flex flex-col items-center justify-center text-slate-800">
          <Link href="/dashboard" className="text-3xl font-bold">
            Desishub
          </Link>
          <small>Coding School</small>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden text-slate-50"
        >
          <X />
        </button>
      </div>
      <div className="flex justify-between  flex-col py-2">
        <nav className="py-5 border-b border-slate-700 flex flex-col gap-4 text-slate-50 px-2 pb-6">
          {sidebarLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                onClick={() => setIsOpen(false)}
                href={item.href}
                className={
                  pathname == `${item.href}`
                    ? "flex gap-3 bg-purple-400 py-2 text-slate-900 px-4 rounded-md"
                    : "flex gap-3 px-2"
                }
              >
                <Icon />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
        <div className="py-8 flex flex-col gap-4 text-slate-50 px-4">
          <button href="/dashboard" className="flex gap-3">
            <LogOutIcon />
            <span>Logout</span>
          </button>
          <Link href="/dashboard" className="flex gap-3">
            <SlidersHorizontal />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
