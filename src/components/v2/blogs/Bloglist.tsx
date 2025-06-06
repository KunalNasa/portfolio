// components/BlogList.tsx
"use client";

import Link from "next/link";

interface Post {
  title: string;
  brief: string;
  slug: string;
  dateAdded: string;
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className=" w-full rounded-lg ">
      {posts.map((post, index) => (
        <Link
          key={index}
          href={`https://kunalnasa.hashnode.dev/${post.slug}`}
          target="_blank"
        >   
          <div className="p-3 rounded-xl shadow-inner my-2 border-gray-300 dark:border-gray-700 hover:shadow-gray-500 transition duration-200 max-h-40 overflow-auto border  min-h-40">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500 mt-2">{post.brief.slice(0, 70)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
