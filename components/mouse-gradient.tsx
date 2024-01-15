"use client";

import useMousePosition from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

const MouseGradient = (props: Props) => {
  const {
    mousePosition: { x, y },
    scrollPosition,
  } = useMousePosition();

  console.log("position " + x, y);
  console.log("scroll " + scrollPosition);

  return (
    <div
      className={cn(
        "absolute left-0 top-0 -z-10 h-full w-full",
        x === 0 && y === 0 && "hidden",
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
