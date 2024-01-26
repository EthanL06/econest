"use client";

import React, { useEffect, useRef } from "react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {};

const Solutions = (props: Props) => {
  const router = useRouter();
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  const data = [
    {
      name: "Solar Panels",
      description:
        "Installing solar panels allows you to generate clean, renewable electricity from sunlight to power your home.  High-efficiency solar modules can provide over 90% of a household's energy needs.",
      image:
        "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/fl36293687126-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=cd947b996a2f2d8d8bdb050330dd4b90",
      link: "/blogs/solar-panels",
    },
    {
      name: "Wind Power",
      description:
        "Wind power is a clean and renewable energy source that utilizes the natural force of the wind to generate electricity. By harnessing this abundant resource, homes can significantly reduce their reliance on non-renewable fossil fuels, contributing to a cleaner and greener environment.",
      image:
        "https://i2.pickpik.com/photos/735/816/924/pinwheel-energy-wind-power-environmental-technology-preview.jpg",
      link: "/blogs/wind-power",
    },
    {
      name: "Green Roofs",
      description:
        "Green roofs provide eco-friendly insulation and stormwater management by covering buildingtops with hardy,  low-maintenance vegetation. A layered system of waterproofing membranes, drainage mats, lightweight soil mixtures, and native plants is installed",
      image: "https://live.staticflickr.com/65535/51255410824_d99f55f8a3_b.jpg",
      link: "/blogs/green-roofs",
    },

    {
      name: "High-Efficiency Windows",
      description:
        "Replacing aging, inefficient windows with new double or triple-pane ENERGY STAR models can dramatically reduce energy loss and lower heating and cooling bills. Advanced glazing provides better insulation, preventing hot or cold outdoor air from entering the home",
      image: "https://live.staticflickr.com/3131/2825699407_517715f8be_b.jpg",
      link: "/blogs/high-efficiency-windows",
    },
    {
      name: "Smart Home Technology",
      description:
        "Smart Home Technology optimizes energy consumption by dynamically controlling lighting, HVAC, appliances, and other systems. Networked sensors monitor occupancy, temperature, humidity, and lighting needs in different zones",
      image: "https://live.staticflickr.com/3691/19636174774_6c2a8a167c_b.jpg",
      link: "/blogs/smart-home-technology",
    },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      card.onmousemove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        card.onmousemove = null;
      });
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-y-8">
      <div className="flex w-full flex-col items-center text-center">
        <div className=" mb-1 text-center text-lg font-black text-primary sm:text-xl">
          Blogs for Sustainable Living
          <Separator className="h-[3px] rounded-full bg-primary" />
        </div>

        <div className=" text-3xl font-bold text-emerald-900 sm:text-4xl md:text-5xl">
          Explore our Solutions
        </div>
      </div>

      <div className="flex min-h-screen w-full grid-cols-3 grid-rows-2 flex-col gap-8 text-white lg:grid">
        {data.map((item, index) => (
          <motion.div
            onClick={() => {
              router.push(item.link);
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.3 },
            }}
            initial={{ scale: 0 }}
            viewport={{
              once: true,
            }}
            whileInView={{
              scale: 1,
              transition: { duration: 1, type: "spring", bounce: 0.3 },
            }}
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={cn(
              "card group relative col-span-1 row-span-1 aspect-video h-auto w-full transform cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl lg:aspect-auto",
              index === 1 && "row-span-2",
            )}
          >
            <img
              className="absolute z-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-50"
              src={item.image}
            />

            <div
              className={cn(
                "absolute -bottom-full left-0 z-10 flex w-full  bg-[#101010]/70 px-4 py-3 font-bold text-white transition-all duration-700 group-hover:bottom-0",
              )}
            >
              <div className="flex flex-col gap-y-1">
                <div className=" flex max-w-max flex-col text-2xl font-bold">
                  {item.name}
                </div>
                <div className="h-auto w-full overflow-ellipsis text-pretty text-[0.9rem] text-sm font-medium">
                  <span className="hidden lg:inline-block">
                    {item.description.slice(0, 70).trim() + "..."}
                    <Link
                      className="ml-1 inline-block text-sm font-semibold text-emerald-500 underline underline-offset-2"
                      href={item.link}
                    >
                      Read More
                    </Link>
                  </span>
                  <span className="inline-block lg:hidden">
                    {item.description.slice(0, 85).trim() + "..."}
                    <Link
                      className="ml-1 inline-block text-sm font-semibold text-emerald-500 underline underline-offset-2"
                      href={item.link}
                    >
                      Read More
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Link href="/blogs">
        <Button className="bg-emerald-500 px-6 py-7 text-lg font-bold hover:bg-emerald-500/90">
          View All
        </Button>
      </Link>
    </div>
  );
};

export default Solutions;
