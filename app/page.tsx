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
import { Separator } from "@/components/ui/separator";
import Reviews from "@/components/landing/reviews";
import CallToAction from "@/components/landing/call-to-action";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex min-h-screen flex-col justify-around gap-y-24 ">
          <div className="px-4 py-6 sm:px-8">
            <Heading />
          </div>

          <LogoWall />
        </div>

        <WaveSeparator />
        <Statistics />

        <div className="absolute left-0 top-0 -z-10">
          <Circles />
        </div>

        <div className="my-24 px-8 md:px-8 lg:pr-0 xl:mb-48 xl:pl-24">
          <About />
        </div>

        <div className=" flex flex-col gap-y-24 px-8 pb-24">
          <div className="md:px-6">
            <Solutions />{" "}
          </div>

          <div className="md:px-16">
            <Reviews />
          </div>
        </div>

        <div className="xs:px-4 px-2 pb-24 md:px-8 xl:px-24">
          <CallToAction />
        </div>
      </div>
    </>
  );
}
