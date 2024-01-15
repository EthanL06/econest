"use client";

import React, { useEffect, useRef } from "react";
import { Separator } from "../ui/separator";

type Props = {};

const Solutions = (props: Props) => {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

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
    <div className="mt-11 flex min-h-screen w-full flex-col items-center gap-y-12">
      <div className="flex w-full flex-col items-center text-center">
        <div className=" mb-1 text-center text-xl font-black text-primary">
          Innovative Solutions for Sustainable Living
          <Separator className="h-[3px] rounded-full bg-emerald-900" />
        </div>

        <div className=" text-4xl font-bold text-emerald-900 sm:text-5xl">
          Explore our Solutions
        </div>
      </div>

      <div className="grid min-h-screen w-full grid-cols-3 grid-rows-2 gap-8 text-white">
        <div ref={(el) => (cardsRef.current[0] = el)} className="card ">
          test
        </div>
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="card row-span-2  "
        >
          test
        </div>
        <div ref={(el) => (cardsRef.current[2] = el)} className="card">
          test
        </div>

        <div ref={(el) => (cardsRef.current[3] = el)} className="card">
          test
        </div>
        <div ref={(el) => (cardsRef.current[4] = el)} className="card">
          test
        </div>
      </div>
    </div>
  );
};

export default Solutions;
