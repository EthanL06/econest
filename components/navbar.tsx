"use client";

import React, { useEffect, useState } from "react";
import Logo from "./logo";
import { ChevronRight, HomeIcon, MenuIcon, XIcon } from "lucide-react";
import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
type Props = {};

const Navbar = (props: Props) => {
  const [{ y }] = useWindowScroll();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const ifScrollBelowNavbar = () => {
    return y && y > 0;
  };

  useEffect(() => {
    setShowMobileMenu(false);
  }, []);

  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-[999999] mx-auto flex w-full items-center justify-between border-b border-transparent bg-transparent py-2  transition-all duration-300 ease-in-out sm:border sm:px-8 ",
        ifScrollBelowNavbar()
          ? "  border-border bg-white/95 px-4 sm:my-2 sm:w-[38rem] sm:rounded-full sm:bg-white sm:px-6 sm:py-3 sm:shadow"
          : " px-4 sm:py-4",
      )}
    >
      <Link href="/">
        <div className="group flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "rotate-0 transform transition-all duration-300 group-hover:rotate-3",
              ifScrollBelowNavbar()
                ? "size-6 rotate-45 sm:size-7"
                : "size-9 sm:size-10",
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
              "ransition-all overflow-hidden  text-xl font-bold duration-300 sm:text-2xl ",
              ifScrollBelowNavbar() ? "text-base sm:text-2xl " : " w-24",
            )}
          >
            <span className="">eco</span>
            <span className="text-[#5FA25E]">Nest</span>
          </div>
        </div>
      </Link>

      <Button
        onClick={() => {
          setShowMobileMenu(!showMobileMenu);
        }}
        className={cn("transition-all duration-300 ease-in-out sm:hidden", {
          "opacity-0": showMobileMenu,
          "opacity-100": !showMobileMenu,
        })}
        size={"icon"}
        variant={"ghost"}
      >
        <MenuIcon />
      </Button>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        variants={{
          hidden: {
            width: "100%", // Start from the right edge
            left: "100%", // Start from the right edge
          },
          visible: {
            width: "100%", // Retract to the left edge
            left: 0, // Expand towards the left edge
          },
        }}
        animate={showMobileMenu ? "visible" : "hidden"}
        className={cn(
          "fixed bottom-0 left-0 right-0 top-0 z-[999999] float-right flex h-full w-full flex-col items-center overflow-hidden bg-white px-4 sm:hidden",
          !showMobileMenu ? "pointer-events-none" : "",
        )}
      >
        <Button
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
          className={cn(
            "absolute right-4 top-2 transition-all duration-300 ease-in-out sm:hidden",
            {
              "opacity-100": showMobileMenu,
              "opacity-0": !showMobileMenu,
            },
          )}
          size={"icon"}
          variant={"ghost"}
        >
          <XIcon />
        </Button>

        <Link
          onClick={() => {
            setShowMobileMenu(false);
          }}
          className="group mt-14 flex w-full items-center justify-between gap-x-2 border-b border-border p-4 text-left text-2xl font-semibold transition-colors hover:border-primary hover:bg-primary hover:text-white"
          href={"/"}
        >
          Home
          <ChevronRight className="relative left-0 h-6 w-6 stroke-[3] text-black/50 transition-all duration-200 ease-in-out group-hover:left-1 group-hover:text-white" />
        </Link>

        <Link
          onClick={() => {
            setShowMobileMenu(false);
          }}
          className="group flex w-full items-center justify-between gap-x-2 border-b border-border p-4 text-left text-2xl font-semibold transition-colors hover:border-primary hover:bg-primary hover:text-white"
          href={"/solutions"}
        >
          Solutions
          <ChevronRight className="relative left-0 h-6 w-6 stroke-[3] text-black/50 transition-all duration-200 ease-in-out group-hover:left-1 group-hover:text-white" />
        </Link>

        <Link
          onClick={() => {
            setShowMobileMenu(false);
          }}
          className="group flex w-full items-center justify-between gap-x-2 border-b border-border p-4 text-left text-2xl font-semibold transition-colors hover:border-primary hover:bg-primary hover:text-white"
          href={"/community"}
        >
          Community
          <ChevronRight className="relative left-0 h-6 w-6 stroke-[3] text-black/50 transition-all duration-200 ease-in-out group-hover:left-1 group-hover:text-white" />
        </Link>

        <Link
          onClick={() => {
            setShowMobileMenu(false);
          }}
          className="group flex w-full items-center justify-between gap-x-2 border-b border-border p-4 text-left text-2xl font-semibold transition-colors hover:border-primary hover:bg-primary hover:text-white"
          href={"/build-a-home"}
        >
          Build-A-Home
          <ChevronRight className="relative left-0 h-6 w-6 stroke-[3] text-black/50 transition-all duration-200 ease-in-out group-hover:left-1 group-hover:text-white" />
        </Link>

        <Link
          onClick={() => {
            setShowMobileMenu(false);
          }}
          className="group flex w-full items-center justify-between gap-x-2 border-border p-4 text-left text-2xl font-semibold transition-colors hover:border-primary hover:bg-primary hover:text-white"
          href={"/about"}
        >
          About
          <ChevronRight className="relative left-0 h-6 w-6 stroke-[3] text-black/50 transition-all duration-200 ease-in-out group-hover:left-1 group-hover:text-white" />
        </Link>
      </motion.div>

      <div className="hidden items-center gap-x-6 sm:flex">
        <Link href="/solutions">
          <div className="cursor-pointer text-sm font-semibold">Solutions</div>
        </Link>
        <Link href="/community">
          <div className="cursor-pointer text-sm font-semibold">Community</div>
        </Link>
        <Link href="/about">
          <div className="cursor-pointer text-sm font-semibold">About</div>
        </Link>
        <Link href="/build-a-home">
          <Button className="text-sm font-semibold">Build-A-Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
