import Blogs from "@/components/blogs/blogs";
import Blog from "@/types/blog";
import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

type Props = {};

const Page = async (props: Props) => {
  const file = await fs.readFile(
    path.join(process.cwd(), "public", "data", "blogs.json"),
    "utf8",
  );
  const data = JSON.parse(file) as Blog[];

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-8">
      <Breadcrumb className="mb-6 px-6">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} href="/solutions">
            Solutions
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <h1 className="text-center text-2xl font-bold sm:text-3xl">Solutions</h1>
      <p className="text-center text-lg font-medium text-muted-foreground">
        Our solutions for sustainable living.
      </p>

      <div className="mx-auto mt-4 ">
        <Separator className="mx-auto max-w-md" />

        <div className="mt-8">
          <Blogs data={data} />
        </div>
      </div>
    </div>
  );
};

export default Page;
