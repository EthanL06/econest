import type { Metadata } from "next";
import "../globals.css";

import { quicksand } from "@/lib/fonts";
import Script from "next/script";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MouseGradient from "@/components/mouse-gradient";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ecoNest",
  description:
    "A passionate group committed to transforming homes into eco-friendly havens.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${quicksand.variable} max-w-screen-[1400px] relative mx-auto flex flex-col px-8 py-2 font-sans text-black sm:px-8 sm:py-4`}
    >
      <div className="flex">
        <Link className="" href="/">
          <div className="group flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                "size-8 rotate-0 transform transition-all duration-300 group-hover:rotate-45"
              }
              viewBox="0 0 512 512"
            >
              <path
                opacity="1"
                fill="#5FA25E"
                d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="mt-4 ">{children}</div>
      <TailwindIndicator />

      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`}
        async={true}
      />
    </div>
  );
}
