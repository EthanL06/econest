"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.9,
      }}
      className="relative flex w-full flex-col items-center justify-center rounded-xl px-4 py-8  shadow-2xl md:p-12 lg:p-24"
    >
      <img
        src="https://images.squarespace-cdn.com/content/v1/5b7316fc50a54f6532b5b564/d316f19f-c121-4fd5-8cbf-eaeee8767591/Squarespace+-+Featured+Image.png"
        alt="background"
        className="absolute inset-0 -z-10 h-full w-full rounded-xl object-cover brightness-[25%]"
      />

      <h2 className="xs:text-3xl text-pretty text-center text-2xl font-bold text-white sm:text-4xl md:text-5xl">
        Discover <span className="text-primary">Eco-Friendly Solutions</span>{" "}
        for Your Home!
      </h2>
      <p className="mt-2 max-w-[60ch] text-balance text-center text-base text-white sm:text-lg md:text-xl">
        Learn how to live a more sustainable life
      </p>
      <Link href={"/build-a-home"}>
        <Button className="mt-8 px-6 py-8 text-lg font-bold ">
          Discover Now!
        </Button>
      </Link>
    </motion.div>
  );
};

export default CallToAction;
