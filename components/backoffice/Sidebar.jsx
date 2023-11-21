"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/logo-red.png";
import {
  Boxes,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  LogOut,
  MonitorPlay,
  SendToBack,
  Slack,
  Truck,
  User,
  UserSquare2,
  Users2,
  Warehouse,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";
export default function Sidebar({ showSidebar, setShowSidebar }) {
  const pathname = usePathname();
  const sidebarLinks = [
    {
      title: "Mail List",
      icon: Users2,
      href: "/dashboard/waitlist",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "Settings",
      icon: LayoutGrid,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/",
    },
  ];
  const catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Attributes",
      icon: SendToBack,
      href: "/dashboard/attributes",
    },
    {
      title: "Coupons",
      icon: SendToBack,
      href: "/dashboard/coupons",
    },
    {
      title: "store sliders",
      icon: MonitorPlay,
      href: "/dashboard/sliders",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={
        showSidebar
          ? "sm:block mt-20 sm:mt-0 dark:bg-slate-700 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-50  fixed left-0 top-0 shadow-md"
          : " mt-20 sm:mt-0 hidden sm:block dark:bg-slate-700 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-50  fixed left-0 top-0 shadow-md"
      }
    >
      <Link
        onClick={() => setShowSidebar(false)}
        className="px-6 py-2 "
        href="/dashboard"
      >
        <Image
          src={logo}
          alt="Desishub Coding school logo"
          className="w-36 ml-8"
        />
      </Link>
      <div className="space-y-3 flex flex-col  ">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-white text-white font-bold"
              : "flex items-center space-x-3 px-6 py-2 "
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Collapsible className="px-6 py-2">
          <CollapsibleTrigger
            className=""
            onClick={() => setOpenMenu(!openMenu)}
          >
            <button className="flex items-center space-x-6  py-2 ">
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catalogue</span>
              </div>
              {openMenu ? <ChevronDown /> : <ChevronRight />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-lg py-3 px-3 pl-6 bg-slate-800">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSidebar(false)}
                  key={i}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "flex items-center space-x-3 py-1 text-sm   text-white font-bold"
                      : "flex items-center space-x-3  py-1 "
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={
                item.href == pathname
                  ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-white text-white font-bold"
                  : "flex items-center space-x-3 px-6 py-2 "
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className="bg-white rounded-md flex items-center space-x-3 px-6 py-3 text-slate-800">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
