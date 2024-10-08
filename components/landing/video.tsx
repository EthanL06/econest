"use client";

import React from "react";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";
type Props = {};

const Video = (props: Props) => {
  return (
    <div className="mb-6 mt-6 flex flex-col items-center justify-center px-4 lg:mb-0">
      <motion.iframe
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="aspect-video w-full rounded-xl  border-2 border-border shadow-2xl shadow-primary/60 lg:w-[60rem]"
        src="https://www.youtube.com/embed/mzEJhd8PVwA?si=e5S1VtEjU0ObDcxi"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></motion.iframe>
    </div>
  );
};

export default Video;
