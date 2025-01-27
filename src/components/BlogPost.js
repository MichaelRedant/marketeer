import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import blogData from "../blog.json";
import "../blogpagina.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const BlogPost = () => {
  const { slug } = useParams(); // Dynamische slug vanuit URL
  const blog = blogData.blogs.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <div className="bg-white text-center py-16 px-6">
        <h1 className="text-4xl font-primary text-primary">
          Blogpost niet gevonden
        </h1>
        <p className="text-lg text-gray-600">
          De blogpost die je zoekt bestaat niet. Ga terug naar de{" "}
          <a href="/blog" className="text-primary font-bold hover:underline">
            blogpagina
          </a>
          .
        </p>
      </div>
    );
  }

  // Dynamische deelbare URL
  const shareUrl = `https://xinudesign.be/blog/${slug}`;
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(blog.title);

  return (
    <div className="bg-white py-12 px-6">
      {/* Meta Tags */}
      <Helmet>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.keywords.join(", ")} />
        <meta name="author" content="Michaël Redant" />
        <link rel="canonical" href={`https://xinudesign.be/blog/${slug}`} />
      </Helmet>

      {/* Header */}
      <header className="relative bg-primary text-white py-12 px-6 rounded-md shadow-md">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl headerText font-bold leading-tight mb-4">
            {blog.title}
          </h1>
          <p className="text-lg md:text-xl headerTextSecondary">{blog.excerpt}</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto mt-8 space-y-12">
        {blog.content.map((section, index) => (
          <section
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="flex-1">
              <h2 className="text-3xl font-primary font-bold text-primary mb-4">
                {section.heading}
              </h2>
              <p className="text-lg font-secondary text-gray-700 leading-relaxed">
                {section.text}
              </p>
            </div>
            {section.image ? (
              <div className="flex-1">
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full rounded-md shadow-lg"
                />
              </div>
            ) : (
              <div className="flex-1"></div> // Lege ruimte als er geen afbeelding is
            )}
          </section>
        ))}

        {/* Conclusie */}
        {blog.conclusion && (
          <section className="mt-12 bg-gray-100 text-center p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-primary font-bold text-primary mb-4">Conclusie</h3>
            <p className="text-lg font-secondary text-gray-700">{blog.conclusion}</p>
          </section>
        )}

        {/* Deelknoppen */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 hover:bg-blue-700 rounded-full p-3 transition duration-300"
            title="Deel op Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedShareUrl}&text=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-400 hover:bg-blue-500 rounded-full p-3 transition duration-300"
            title="Deel op X (Twitter)"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedShareUrl}&title=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-800 hover:bg-blue-900 rounded-full p-3 transition duration-300"
            title="Deel op LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        

        {/* Terug naar Blogpagina */}
        <div className="mt-8 text-center">
          <a
            href="/blog"
            className="inline-block text-primary font-bold hover:underline"
          >
            ← Terug naar de blogpagina
          </a>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
