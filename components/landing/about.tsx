"use client";

import React from "react";
import { Separator } from "../ui/separator";
import {
  CheckCircle,
  CheckCircle2,
  HomeIcon,
  SmileIcon,
  TreesIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className=" flex w-full flex-col justify-between gap-8 lg:flex-row">
      <div className="flex  flex-col gap-y-1">
        <div className="flex ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.9,
            }}
            className="text-lg font-bold text-primary md:text-xl"
          >
            Who Are We
            <Separator className="h-[3px] rounded-full bg-primary" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.9,
          }}
          className="text-[42px] font-bold leading-[3rem] text-emerald-900 md:text-5xl"
        >
          Dedicated to{" "}
          <span className="sm:marker-underline">Green Living.</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.9,
          }}
          className="mt-4 max-w-[65ch] text-pretty text-base font-medium leading-loose text-emerald-900"
        >
          We are ecoNest, a passionate group committed to transforming homes
          into eco-friendly havens. With a focus on green and clean energy
          solutions, we aim to guide homeowners toward sustainable choices the
          benefit both their wallets and the planet.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.9,
          }}
          className="mt-4 max-w-[65ch] text-pretty text-base font-medium leading-loose text-emerald-900"
        >
          Our mission is to create a more sustainable future by making
          eco-friendly living accessible and rewarding. We envision a world
          where people embrace green solutions not just because it&apos;s the
          right thing to do, but because it benefits them financially and
          improves their quality of life.
        </motion.p>
        <div className="mt-4 flex flex-col gap-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.9,
            }}
            className="flex items-center gap-x-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 shrink-0 text-emerald-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>

            <div className="text-pretty text-lg font-semibold text-emerald-900">
              Advocates of green energy for a healthier planet
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.9,
            }}
            className="flex items-center gap-x-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 shrink-0 text-emerald-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>

            <div className="text-pretty text-lg font-semibold text-emerald-900">
              Guiding homeowners to eco-friendly, cost-saving choices.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.9,
            }}
            className="flex items-center gap-x-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 shrink-0 text-emerald-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>

            <div className="text-lg font-semibold text-emerald-900">
              Inspire eco-living for well-being and planet health.
            </div>
          </motion.div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 sm:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.9,
            }}
          >
            <Link href={"/forum"}>
              <Button
                size={"lg"}
                className="mt-8 bg-emerald-500 px-6 py-8 text-lg font-bold hover:bg-emerald-500/90"
              >
                Join our Community!
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.9,
            }}
          >
            <Link href={"/about"}>
              <Button
                size={"lg"}
                variant={"ghost"}
                className="mt-8  px-6 py-8 text-lg font-bold "
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative hidden h-[20rem] w-full  max-w-2xl lg:block lg:max-w-[50%] ">
        <Image
          src="/images/solar_panel_house.jpg"
          alt="solar panel house"
          sizes="100vw"
          width={0}
          height={0}
          className=" h-auto w-full rounded-3xl border-[5px] border-emerald-500 shadow-2xl lg:rounded-r-none lg:border-r-0"
        />

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: "-13%" }}
          viewport={{
            once: true,
            amount: 0.9,
          }}
          className="absolute left-0 top-64 hidden w-[16.5rem]  justify-between  gap-x-4 rounded-lg border-2 bg-white px-4 py-5 text-emerald-900 shadow-xl min-[1400px]:flex"
        >
          <div className="grid shrink-0 place-items-center rounded-full bg-green-300/50 p-4">
            <SmileIcon />
          </div>

          <div className="flex flex-col">
            <div className="text-2xl font-bold">75,000+</div>
            <div className="text-base font-medium">Happy Homeowners</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: "-13%" }}
          viewport={{
            once: true,
            amount: 0.9,
          }}
          className="absolute left-0 top-96 hidden w-[16.5rem] gap-x-4 rounded-lg border-2 bg-white px-4 py-5 text-emerald-900 shadow-xl min-[1400px]:flex"
        >
          <div className="grid shrink-0 place-items-center rounded-full bg-green-300/50 p-4">
            <HomeIcon />
          </div>

          <div className="flex flex-col">
            <div className="text-2xl font-bold">50,000+</div>
            <div className="text-base font-medium">Green Homes Built</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
