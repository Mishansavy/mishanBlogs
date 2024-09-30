import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BlogList.css"; // External CSS for styling
import PostDefault from "../../assets/post-default-image.jpg";
const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null); // New state for error handling

  useEffect(() => {
    axios
      .get("https://blog.mishanshah.com.np/backend/api/posts.php?page=1")
      .then((response) => {
        setPosts(response.data.posts || []);
        setError(null); // Reset error on successful fetch
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setPosts([]);
        setError("Failed to fetch posts. Please try again later."); // Set error message
      });
  }, []);

  return (
    <div className="bloglist-container">
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error message */}
      {posts.length > 0 ? (
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <img src={post.image || PostDefault} alt={post.title} />
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body.slice(0, 100)}...</p>
              <small className="post-author">By: {post.author}</small>
            </div>
          ))}
        </div>
      ) : (
        !error && <p className="no-posts">No posts available</p>
      )}
    </div>
  );
};

export default BlogList;
