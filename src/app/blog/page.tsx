import React from "react";
import Image from "next/image";
import Link from "next/link";
import { pricesHeroImgSrc } from "@/constants/CloudinaryImgUrl";

const blogPosts = [
  {
    title: "Blog Post 1",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://via.placeholder.com/300",
    link: "blog-post-1",
  },
  {
    title: "Blog Post 2",
    excerpt:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/300",
    link: "blog-post-2",
  },
  {
    title: "Blog Post 3",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "https://via.placeholder.com/300",
    link: "blog-post-3",
  },
  {
    title: "Blog Post 4",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    imageUrl: "https://via.placeholder.com/300",
    link: "blog-post-4",
  },
  {
    title: "Blog Post 5",
    excerpt:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    imageUrl: "https://via.placeholder.com/300",
    link: "blog-post-5",
  },
  {
    title: "Blog Post 6",
    excerpt: "Mollit anim id est laborum.",
    imageUrl: "https://via.placeholder.com/300",
    link: "blog-post-6",
  },
];

const BlogPage = () => {
  return (
    <section>
      {/* Hero Section */}
      <div
        className="h-[50dvh] bg-no-repeat bg-cover flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${pricesHeroImgSrc})`,
        }}
      >
        <div
          className="max-w-6xl flex-1 mx-auto px-4 mt-14 md:mt-20 md:px-6 lg:px-8 py-10 md:py-16 lg:py-20"
          data-aos="fade-right"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
            Our Blogs
          </h2>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="bg-fixed bg-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-3xl lg:text-5xl text-slate-900 font-medium mb-10">
            Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link
                    // href={`/blog/${post.link}`}
                    href="#"
                    className="text-white rounded-full text-sm px-3 py-2 bg-gradient-to-r from-[#5114AE] to-[#802FCE] font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
