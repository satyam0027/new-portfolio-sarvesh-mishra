import React from "react";
import Link from "next/link";

// Example blog data
const blogs = [
  {
    id: 1,
    title: "5 Ways to Boost Your Productivity",
    description:
      "Learn practical techniques to maximize your daily productivity and achieve your goals effectively.",
    image: "/pexels-anthonyshkraba-production-8279235.jpg",
    link: "/blog/boost-productivity",
  },
  {
    id: 2,
    title: "The Art of Financial Planning",
    description:
      "Master the fundamentals of financial planning to secure your future and grow your wealth.",
    image: "/pexels-rdne-5922536.jpg",
    link: "/blog/financial-planning",
  },
  {
    id: 3,
    title: "Digital Marketing Trends in 2024",
    description:
      "Stay ahead with the latest trends in digital marketing to grow your business online.",
    image: "/pexels-mikael-blomkvist-6476808.jpg",
    link: "/blog/marketing-trends-2024",
  },
  {
    id: 4,
    title: "10 Habits of Successful Entrepreneurs",
    description:
      "Discover the habits that can make you a more effective and successful entrepreneur.",
    image: "/pexels-rdne-8124411.jpg",
    link: "/blog/successful-habits",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-transparent min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-500">
          Our Blogs
        </h1>
        <p className="text-center text-white max-w-2xl mx-auto mb-12">
          Discover insights and knowledge from industry experts on various topics like productivity, financial planning, digital marketing, and entrepreneurship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-transparent shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-yellow-500">
                  {blog.title}
                </h2>
                <p className="text-white mt-2 text-sm">{blog.description}</p>
                <Link
                  href={blog.link}
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
