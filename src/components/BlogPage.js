import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../blog.json"; // JSON bestand met blogposts
import { motion } from "framer-motion"; // Voor mini-animaties
import "../blog.css";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Bepaal de huidige blogs die getoond moeten worden
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.blogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogData.blogs.length / postsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-white py-12 px-6">
      <h1 className="text-4xl font-primary text-center text-primary mb-6">Blog</h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {currentPosts.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="bg-card shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/blog/${blog.slug}`}>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-primary mb-2">{blog.title}</h2>
                <p className="text-gray-600 line-clamp-3">{blog.excerpt}</p>
                <div className="mt-4 text-primary font-bold hover:underline">
                  Lees meer
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Paginering */}
      {blogData.blogs.length > postsPerPage && (
        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="px-4 py-2 bg-primary text-white rounded transition-transform transform hover:scale-105"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Vorige
          </button>
          <span className="text-gray-700">
            Pagina {currentPage} van {totalPages}
          </span>
          <button
            className="px-4 py-2 bg-primary text-white rounded transition-transform transform hover:scale-105"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Volgende
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default BlogPage;
