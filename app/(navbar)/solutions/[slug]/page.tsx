import React from "react";
import { promises as fs } from "fs";
import path from "path";
import Blog from "@/types/blog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TracingBeam } from "@/components/ui/tracing-beam";
type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: Props) => {
  const file = await fs.readFile(
    path.join(process.cwd(), "public", "data", "blogs.json"),
    "utf8",
  );
  const data = JSON.parse(file) as Blog[];
  const blog = data.find((blog) => blog.slug === params.slug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-8 ">
      <div className="flex">
        <Link
          href={"/solutions"}
          className="group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900"
        >
          <svg
            viewBox="0 -9 3 24"
            className="mr-3 h-6 w-auto overflow-visible text-slate-400 group-hover:text-slate-600"
          >
            <path
              d="M3 0L0 3L3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          Go Back
        </Link>
      </div>

      <Breadcrumb className="py-6">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/solutions">
            Solutions
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} href={`/solutions/${blog?.slug}`}>
            {blog?.slug
              .replace(/-/g, " ")
              .replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase()),
              )}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <TracingBeam>
        <article className="prose prose-slate mx-auto max-w-3xl ">
          <img
            className="aspect-video rounded-lg"
            src={blog?.image}
            alt={blog?.name}
          />
          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
          ></div>
        </article>
      </TracingBeam>
    </div>
  );
};

export default Page;
