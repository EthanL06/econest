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
      className={`${quicksand.variable} max-w-screen-[1400px] relative mx-auto flex flex-col px-8  font-sans text-black sm:px-8`}
    >
      <div>{children}</div>
      <TailwindIndicator />
    </div>
  );
}
