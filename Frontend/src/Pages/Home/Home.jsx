import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css"; // External CSS file for styling
import PostDefault from "../../assets/post-default-image.jpg";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch blog posts from backend API
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://blog.mishanshah.com.np/backend/api/posts.php?page=${page}`)
      .then((response) => {
        setPosts(response.data.posts || []);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, [page]);

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">Mishan Tech Blog</h1>
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="https://mishanshah.com.np" className="nav-link">
            About Me
          </Link>
        </nav>
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
                <img src={post.image || PostDefault} alt={post.title} />
                <div className="blog-info">
                  <Link to={`/blog/${post.id}`} className="blog-title">
                    {post.title}
                  </Link>
                  <p className="blog-excerpt">
                    {post.body.slice(0, 100)}...
                    <Link to={`/blog/${post.id}`} className="read-more">
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 Mishan Tech Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
