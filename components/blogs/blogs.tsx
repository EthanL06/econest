import React from "react";
import Link from "next/link";
import Blog from "@/types/blog";

const Blogs = ({ data }: { data: Blog[] }) => {
  return (
    <>
      {data.map((blog, index) => (
        <BlogItem key={`${blog.name}-${index}`} blog={blog} />
      ))}
    </>
  );
};

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={"/solutions/" + blog.slug}
      className="group mt-4 flex gap-x-5 rounded-lg p-4 transition-all duration-200 hover:bg-muted sm:p-6"
    >
      <div className="flex shrink-0 items-center justify-center">
        <img
          loading="lazy"
          src={blog.image}
          alt={blog.name}
          className="aspect-square size-20 rounded-lg object-cover transition-all duration-200 group-hover:scale-105 sm:size-32"
        />
      </div>
      <div>
        <div className="flex h-full flex-col justify-between ">
          <div className="line-clamp-1 text-2xl font-bold">{blog.name}</div>
          <div className="prose prose-slate line-clamp-2 self-end">
            {blog.description}
          </div>

          <div className="mt-2 flex items-center text-sm font-medium text-primary">
            <span className="relative">Read more</span>
            <svg
              className="relative ml-2.5 mt-px overflow-visible text-primary transition-transform duration-200 group-hover:translate-x-1"
              width="3"
              height="6"
              viewBox="0 0 3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0L3 3L0 6"></path>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blogs;
