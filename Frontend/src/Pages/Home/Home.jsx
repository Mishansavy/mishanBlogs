import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css"; // External CSS file for styling
import PostDefault from "../../assets/post-default-image.jpg";
import { Header } from "../../components/Header/Header";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Current page state
  const [totalPages, setTotalPages] = useState(1); // Total pages state

  // Fetch blog posts from backend API
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://blog.mishanshah.com.np/backend/api/posts.php?page=${page}`)
      .then((response) => {
        // Sort posts in descending order by id to show latest posts first
        const sortedPosts = response.data.posts.sort((a, b) => b.id - a.id);
        setPosts(sortedPosts || []);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, [page]);

  // Pagination handler to go to the next page
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  // Pagination handler to go to the previous page
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="home-container">
      <header className="header">
        <Header />
      </header>

      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="hero-title">Explore the Latest in Tech</h2>
          <p className="hero-subtitle">
            Stay ahead with insights, trends, and tutorials
          </p>
          <Link to="/blogs" className="cta-button">
            Read Blogs
          </Link>
        </div>
      </div>

      <div className="main-content container">
        <h2 className="section-title">Latest Posts</h2>
        <div className="blog-list">
          {loading ? (
            <div className="loader"></div>
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="blog-card">
                <img
                  src={
                    post.img && post.img.trim() !== ""
                      ? `https://blog.mishanshah.com.np/backend/${post.img}`
                      : PostDefault
                  }
                  alt={post.title}
                />
                <div className="blog-info">
                  <Link to={`/blog/${post.id}`} className="blog-title">
                    {post.title}
                  </Link>
                  <p className="blog-excerpt">{post.body.slice(0, 100)}...</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read more
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="pagination">
          <button
            className="prev-button"
            onClick={handlePrevPage}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="page-info">
            Page {page} of {totalPages}
          </span>
          <button
            className="next-button"
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 Mishan Tech Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
