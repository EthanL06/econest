"use client";

import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

type Props = {};

const LogoWall = (props: Props) => {
  const delay = 1.6;
  const brands = [
    "tesla",
    "google",
    "honeywell",
    "sunpower",
    "vestas",
    "sunrun",
    "ikea",
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full max-w-3xl flex-col items-center justify-center text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay }}
          className="text-2xl font-bold sm:text-3xl"
        >
          Trusted by <span className="sm:marker-underline">the best</span> in
          the industry.
        </motion.div>
      </div>

      <div className="logos inline-flex h-[15vh] w-full flex-nowrap overflow-hidden  px-[3.75rem] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] hover:cursor-pointer">
        <div className="flex  animate-infinite-scroll-x items-center justify-center md:justify-start">
          {[...brands].map((brand, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + delay }}
              key={`${brand}-${index}`}
            >
              <Image
                alt={brand}
                className=" mx-8 inline-block h-[2rem] w-auto max-w-[10rem] sm:mx-12"
                width={0}
                height={0}
                src={`/images/${brand}.svg`}
              />
            </motion.div>
          ))}
        </div>

        <div
          className="flex  animate-infinite-scroll-x items-center justify-center md:justify-start"
          aria-hidden="true"
        >
          {[...brands].map((brand, index) => (
            <Image
              key={`${brand}-${index + brands.length}`}
              alt={brand}
              className="mx-8 inline-block h-[2rem] w-auto max-w-[10rem] sm:mx-12"
              width={0}
              height={0}
              src={`/images/${brand}.svg`}
            />
          ))}
        </div>
      </div>

      <Separator className="h-[1px] w-full bg-border" />
    </div>
  );
};

export default LogoWall;
