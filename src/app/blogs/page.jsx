import React from "react";
import { getBlogPost } from "../services/postApi";

// Import your blog JSON data
const blogsData = [
  {
    slug: "how-to-learn-react",
    title: "How to Learn React",
    description:
      "A beginner's guide to understanding and mastering React.js for modern web development.",
  },
  {
    slug: "understanding-nextjs",
    title: "Understanding Next.js",
    description:
      "An introduction to Next.js and its powerful features for server-side rendering and static site generation.",
  },
  {
    slug: "javascript-tips-and-tricks",
    title: "JavaScript Tips and Tricks",
    description:
      "Learn advanced tips and tricks to write cleaner and more efficient JavaScript code.",
  },
  {
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox",
    description:
      "A detailed comparison of CSS Grid and Flexbox with examples to decide which layout method to use.",
  },
  {
    slug: "seo-best-practices",
    title: "SEO Best Practices",
    description:
      "Tips and strategies to optimize your website for better search engine rankings.",
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    description:
      "An overview of full-stack development and how to build scalable and maintainable web applications.",
  },
];

const BlogsPage = async () => {
  const blogPosts = await getBlogPost();
  console.log(blogPosts.length);
  return (
    <div className=" bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Latest Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 18)?.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">{blog.body}</p>
              <a
                href={`/blogs/${blog.id}`}
                className="inline-block text-indigo-600 font-medium hover:text-indigo-800"
              >
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
