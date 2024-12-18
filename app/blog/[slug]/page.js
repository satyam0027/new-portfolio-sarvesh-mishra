import React from "react";

// Example blog content mapping
const blogPosts = {
  "boost-productivity": {
    title: "5 Ways to Boost Your Productivity",
    content: `
      Productivity is essential in achieving both personal and professional goals.
      In this blog, we'll explore five proven ways to boost your productivity:
      - Prioritize tasks effectively.
      - Eliminate distractions.
      - Take regular breaks to refresh your mind.
      - Use productivity tools and apps.
      - Maintain a healthy work-life balance.
    `,
  },
  "financial-planning": {
    title: "The Art of Financial Planning",
    content: `
      Financial planning is a cornerstone of long-term success.
      This blog covers the essentials of setting financial goals, budgeting, saving for emergencies, and investing wisely.
    `,
  },
  "marketing-trends-2024": {
    title: "Digital Marketing Trends in 2024",
    content: `
      The digital marketing landscape is evolving rapidly.
      Stay ahead of the curve with these trends for 2024:
      - AI-driven personalization
      - Voice search optimization
      - Short-form video content
      - Social commerce growth
      - Sustainability-focused marketing
    `,
  },
  "successful-habits": {
    title: "10 Habits of Successful Entrepreneurs",
    content: `
      Success is often a result of consistent habits.
      This blog explores ten habits shared by successful entrepreneurs, including:
      - Setting clear goals
      - Continuous learning
      - Networking effectively
      - Practicing mindfulness
      - Staying adaptable
    `,
  },
};

const BlogContent = ({ params }) => {
  const { slug } = params;

  const blog = blogPosts[slug];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-yellow-500">
          Blog not found!
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center bg-transparent p-6">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6">{blog.title}</h1>
        <p className="text-white text-lg leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>
      </div>
    </div>
  );
};

// This function generates static paths for the dynamic [slug] route.
export async function generateStaticParams() {
  const slugs = Object.keys(blogPosts); // Slugs from blogPosts

  return slugs.map((slug) => ({
    slug, // This maps the dynamic [slug] param to the static paths
  }));
}

export default BlogContent;
