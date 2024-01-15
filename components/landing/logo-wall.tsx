import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";

type Props = {};

const LogoWall = (props: Props) => {
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
        <div className="text-3xl font-bold">
          Trusted by <span className="sm:marker-underline">the best</span> in
          the industry.
        </div>
      </div>

      <div className="logos inline-flex h-[15vh] w-full flex-nowrap overflow-hidden  px-[3.75rem] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] hover:cursor-pointer">
        <div className="animate-infinite-scroll  flex items-center justify-center md:justify-start">
          {[...brands].map((brand, index) => (
            <Image
              key={`${brand}-${index}`}
              alt={brand}
              className="mx-12 inline-block h-[2rem] w-auto max-w-[10rem]"
              width={0}
              height={0}
              src={`/images/brands/${brand}.svg`}
            />
          ))}
        </div>

        <div
          className="animate-infinite-scroll  flex items-center justify-center md:justify-start"
          aria-hidden="true"
        >
          {[...brands].map((brand, index) => (
            <Image
              key={`${brand}-${index + brands.length}`}
              alt={brand}
              className="mx-12 inline-block h-[2rem] w-auto max-w-[10rem]"
              width={0}
              height={0}
              src={`/images/brands/${brand}.svg`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoWall;
