import React from "react";

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

const BlogDetailsPage = ({ params }) => {
  //   console.log(params);
  const blog = blogsData.find((b) => b.slug == params.slug);
  console.log(blog.title);

  if (!blog) {
    return <h2 className="text-red-600">Blog not found!</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <p className="text-gray-600">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
