"use client";

import useMousePosition from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

const MouseGradient = (props: Props) => {
  const {
    mousePosition: { x, y },
    scrollPosition,
  } = useMousePosition();

  const pathname = usePathname();

  return (
    <div
      className={cn(
        "absolute left-0 top-0 -z-10 -mt-16 hidden h-full w-full lg:block",
        (x === 0 && y === 0) || pathname !== "/" ? "!hidden" : "",
      )}
      style={{
        background: `radial-gradient(
            800px circle at ${x}px ${y + scrollPosition}px,
            hsla(142, 30%, 55%, 0.125),
            transparent 60%
          )`,
      }}
    ></div>
  );
};

export default MouseGradient;
