import Navbar from "@/components/navbar";
import Heading from "@/components/landing/heading";
import Circles from "@/components/landing/svgs/circles";
import WaveSeparator from "@/components/landing/svgs/wave-separator";
import Statistics from "@/components/landing/statistics";
import About from "@/components/landing/about";
import Solutions from "@/components/landing/solutions";
import LogoWall from "@/components/landing/logo-wall";
import { ArrowDownCircle, ChevronDownCircle } from "lucide-react";
import MouseGradient from "@/components/mouse-gradient";

export default function Home() {
  return (
    <>
      <MouseGradient />
      <div className="flex flex-col">
        <div className="flex min-h-screen flex-col justify-around gap-y-24 px-4 py-6 sm:px-8">
          <Heading />

          <LogoWall />
        </div>

        <WaveSeparator />
        <Statistics />

        <div className="absolute left-0 top-0 -z-10">
          <Circles />
        </div>

        <div className="my-20 px-8 md:px-8 lg:pr-0 xl:pl-24">
          <About />
        </div>

        <div className=" px-8 md:px-8 lg:pr-0 xl:p-24">
          <Solutions />
        </div>
      </div>
    </>
  );
}
