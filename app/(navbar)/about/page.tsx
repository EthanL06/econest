import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
          {/* <Blogs data={data} /> */}
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
              where people embrace green solutions not just because it's the
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

            <h3>Sources</h3>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Page;
