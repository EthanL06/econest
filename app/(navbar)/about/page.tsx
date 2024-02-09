import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};
const Page = (props: Props) => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-8">
      <Breadcrumb className="mb-6 px-6">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} href="/about">
            About
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-center text-2xl font-bold sm:text-3xl">About</h1>
      <p className="text-center text-lg font-medium text-muted-foreground">
        Learn about who we are and our purpose.
      </p>

      <div className="mx-auto mt-4 ">
        <Separator className="mx-auto max-w-md" />

        <div className="mt-8">
          <article className="prose prose-slate mx-auto max-w-3xl  px-6">
            <h3>Who Are We</h3>
            <p>
              We are ecoNest, a passionate group committed to transforming homes
              into eco-friendly havens. With a focus on green and clean energy
              solutions, we aim to guide homeowners toward sustainable choices
              the benefit both their wallets and the planet.
            </p>

            <h3>Our Mission</h3>
            <p>
              Our mission is to create a more sustainable future by making
              eco-friendly living accessible and rewarding. We envision a world
              where people embrace green solutions not just because it is the
              right thing to do, but because it benefits them financially and
              improves their quality of life.
            </p>
            <hr />
            <h2>TSA Documents</h2>
            <p>
              Regulations and requirements in compliance with the TSA Webmaster
              event guide.
            </p>
            <h3>Built With</h3>
            <ul>
              <li>
                <Link href="https://nextjs.org/">Next.js</Link> (React
                Framework)
              </li>

              <li>
                <Link href="https://www.typescriptlang.org/">TypeScript</Link>{" "}
                (Language)
              </li>
              <li>
                <Link href="https://tailwindcss.com/">Tailwind CSS</Link> (CSS
                Framework)
              </li>
              <li>
                <Link href="https://ui.shadcn.com/">shadcn/ui</Link> (Component
                Library)
              </li>
              <li>
                <Link href="https://lucide.dev/">Lucide</Link> (Icon Library)
              </li>
              <li>
                <Link href="https://threejs.org/">Three.js</Link> (3D Library)
              </li>

              <li>
                <Link href="https://fonts.google.com/">Google Fonts</Link>{" "}
                (Quicksand)
              </li>
            </ul>

            <p>
              <strong>
                Although this website was made on the listed frameworks above,
                the theme/template was built by the team.
              </strong>
            </p>

            <h3>Documents</h3>
            <ul>
              <li>
                <Link href={"/documents/copyright.pdf"}>Copyright</Link>
              </li>
              <li>
                <Link href={"/documents/POWL.pdf"}>Plan of Work Log</Link>
              </li>
            </ul>
            <h3>Sources</h3>
            <p>
              Coglan, Michael. Solar Panel. 1 Sept. 2013. Flickr,{" "}
              <Link href="https://www.flickr.com/photos/mikecogh/9647603520">
                https://www.flickr.com/photos/mikecogh/9647603520
              </Link>
              . Accessed 1 Jan. 2024.
            </p>

            <p>
              “Eco-Friendly” Petit Architect, 27 July 2022,{" "}
              <Link href="petitarchitect.com/blog/2022/6/8/eco-neighbourhood">
                petitarchitect.com/blog/2022/6/8/eco-neighbourhood
              </Link>
              . Accessed 1 Jan. 2024
            </p>

            <p>
              “Renewable Energy – Wind Energy Turbine Hub” 20 Oct. 2019,{" "}
              <Link href="castingthefuture.com/castings-in-the-world/renewable-energy-wind-energy-turbine-hub">
                castingthefuture.com/castings-in-the-world/renewable-energy-wind-energy-turbine-hub
              </Link>
              . Accessed 1 Jan. 2024.
            </p>

            <p>
              “Solar panels on a cloudy day” NOAA SciJinks All About Weather,{" "}
              <Link href="scijinks.gov/solar-energy-and-clouds">
                scijinks.gov/solar-energy-and-clouds
              </Link>
              . Accessed 28 Jan. 2024.
            </p>

            <p>
              “Green Roof at the WIPO Headquarters 1.jpg” Wikimedia Commons, 6
              Aug. 2021,{" "}
              <Link href="commons.wikimedia.org/wiki/File:Green_Roof_at_the_WIPO_Headquarters_1.jpg">
                commons.wikimedia.org/wiki/File:Green_Roof_at_the_WIPO_Headquarters_1.jpg
              </Link>
              . Accessed 28 Jan. 2024.
            </p>

            <p>
              Sommer, Lauren. “Smart windows” 28 Nov. 2011,{" "}
              <Link href="www.npr.org/2011/11/28/142848063/tenergy-saving-possibilities-of-smart-windows">
                www.npr.org/2011/11/28/142848063/tenergy-saving-possibilities-of-smart-windows
              </Link>
              . Accessed 28 Jan. 2024.
            </p>

            <p>
              Tech, Multimedia. “Home Automation” Flickr, 3 Aug. 2015,{" "}
              <Link href="www.flickr.com/photos/multimediatech/19636174774">
                www.flickr.com/photos/multimediatech/19636174774
              </Link>
              . Accessed 28 Jan. 2024.
            </p>

            <p>
              “soler panel” Sketchfab, 21 Sept. 2019,{" "}
              <Link href="sketchfab.com/3d-models/soler-panel-setup-087f976a313f401da2d38f0df73905ff">
                sketchfab.com/3d-models/soler-panel-setup-087f976a313f401da2d38f0df73905ff
              </Link>
              . Accessed 29 Jan. 2024.
            </p>

            <p>
              “Windmill” Sketchfab, 24 Feb. 2017,{" "}
              <Link href="sketchfab.com/3d-models/windmill-low-poly-ed577ce3d4db49a283924c2ec27e65e8">
                sketchfab.com/3d-models/windmill-low-poly-ed577ce3d4db49a283924c2ec27e65e8
              </Link>
              . Accessed 29 Jan. 2024.
            </p>

            <p>
              “Window” Sketchfab, 30 Apr. 2020,{" "}
              <Link href="sketchfab.com/3d-models/old-wooden-window-9cb47e9d4e8644efa4fa28c424253d79">
                sketchfab.com/3d-models/old-wooden-window-9cb47e9d4e8644efa4fa28c424253d79
              </Link>
              . Accessed 29 Jan. 2024.
            </p>

            <p>
              “Modern Home” Sketchfab, 27 Feb. 2021,{" "}
              <Link href="sketchfab.com/3d-models/modern-home-9ea150b9df1d48d2929ddc460b100e7e">
                sketchfab.com/3d-models/modern-home-9ea150b9df1d48d2929ddc460b100e7e
              </Link>
              . Accessed 29 Jan. 2024.
            </p>
            
            <p>
              “Business people having meeting analysing financial data.”
              YouTube, uploaded by Free Stock Footage, 19 Nov. 2023,{" "}
              <Link href="https://www.youtube.com/watch?v=_57f6TohFsQ">
                https://www.youtube.com/watch?v=_57f6TohFsQ
              </Link>
            </p>

            <p>
              “Saving money in locker animated video.” YouTube, uploaded by Free
              Stock Footage, 19 Nov. 2023,{" "}
              <Link href="https://www.youtube.com/watch?v=ArJ3jENMXUI">
                https://www.youtube.com/watch?v=ArJ3jENMXUI
              </Link>
            </p>

            <p>
              “Solar Panels on the Red Roof of the House and Wind Turbines
              Generators stock footage.” YouTube, uploaded by Free Stock
              Footage, 21 Oct. 2022,{" "}
              <Link href="https://www.youtube.com/watch?v=hyAqmSJtxoE">
                https://www.youtube.com/watch?v=hyAqmSJtxoE
              </Link>
            </p>

            <p>
              “Solar Panels - Solar Cell Energy Farm - Solar Energy Stock
              Footage” YouTube, uploaded by Dogie and Soni Art, 16 Sep. 2022,{" "}
              <Link href="https://www.youtube.com/watch?v=_PMpOubmzqg">
                https://www.youtube.com/watch?v=_PMpOubmzqg
              </Link>
            </p>

            <p>
              “Wind Mills Solar Farm I Generating Electricity I Energy Stock
              Footage” YouTube, uploaded by Dogie and Soni Art, 27 Sep. 2022,{" "}
              <Link href="https://www.youtube.com/watch?v=Cp5Wq9TXdFA">
                https://www.youtube.com/watch?v=Cp5Wq9TXdFA
              </Link>
            </p>

            <p>
              “Real estate Agent Showing Family Spacious House.” YouTube,
              uploaded by Free Stock Footage, 2 Dec. 2023,{" "}
              <Link href="https://www.youtube.com/watch?v=JOh6UQfw2RQ">
                https://www.youtube.com/watch?v=JOh6UQfw2RQ
              </Link>
            </p>

            <p>
              “Man, office and money rain celebration with phone, smile and
              winning in online competition” YouTube, uploaded by Free Stock
              Footage, 1 Dec. 2023,{" "}
              <Link href="https://www.youtube.com/watch?v=aA7yggm5qD4">
                https://www.youtube.com/watch?v=aA7yggm5qD4
              </Link>
            </p>

            <p>
              “Money rain, winning and winner man on phone bonus, profit or
              online trading” YouTube, uploaded by Free Stock Footage, 1 Dec.
              2023,{" "}
              <Link href="https://www.youtube.com/watch?v=4c1D456__Vk">
                https://www.youtube.com/watch?v=4c1D456__Vk
              </Link>
            </p>

            <p>
              “Men Installing a solar panel | Free Stock Video.” YouTube,
              uploaded by Video Stocker, 17 Aug. 2020,{" "}
              <Link href="https://www.youtube.com/watch?v=nck5t-Ba5jg">
                https://www.youtube.com/watch?v=nck5t-Ba5jg
              </Link>
            </p>

            <p>
              “hand watering a young plant - tree planting Free Stock Footage HD
              - no copyright video” YouTube, uploaded by Stock Footage Factory,
              20 Dec. 2022,{" "}
              <Link href="https://www.youtube.com/watch?v=34xD4FUUFAE">
                https://www.youtube.com/watch?v=34xD4FUUFAE
              </Link>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Page;
