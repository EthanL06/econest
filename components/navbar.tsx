"use client";

import React, { useEffect } from "react";
import Logo from "./logo";
import { Menu } from "lucide-react";
import { useWindowScroll, useMeasure } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  const [ref, { height }] = useMeasure();
  const [{ y }] = useWindowScroll();

  const ifScrollBelowNavbar = () => {
    return y && height && y > height;
  };

  return (
    <div
      ref={ref}
      className={cn(
        "fixed left-0 right-0 top-0 z-[999999] mx-auto flex w-full items-center justify-between border-b border-transparent bg-transparent py-2  transition-all duration-300 ease-in-out sm:border sm:px-8 ",
        ifScrollBelowNavbar()
          ? "  border-border bg-white/95 px-4 sm:my-2 sm:w-[32rem] sm:rounded-full sm:bg-white sm:px-6 sm:py-3 sm:shadow"
          : " px-8 sm:py-4",
      )}
    >
      <Link href="/">
        <div className="group flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "rotate-0 transform transition-all duration-300 group-hover:rotate-3",
              ifScrollBelowNavbar() ? "size-7 rotate-45 sm:size-5" : "size-10",
            )}
            viewBox="0 0 512 512"
          >
            <path
              opacity="1"
              fill="#5FA25E"
              d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
            />
          </svg>

          <div
            className={cn(
              "overflow-hidden text-2xl font-semibold transition-all duration-300 ",
              ifScrollBelowNavbar() ? "text-base " : " w-24",
            )}
          >
            <span className="">eco</span>
            <span className="text-[#5FA25E]">Nest</span>
          </div>
        </div>
      </Link>

      <div className="flex items-center gap-x-4">
        <Link href="/articles">
          <div className="cursor-pointer text-sm font-semibold">Articles</div>
        </Link>

        <Link href="/solutions">
          <div className="cursor-pointer text-sm font-semibold">Solutions</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
