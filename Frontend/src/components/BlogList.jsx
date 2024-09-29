import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      {error && <p>{error}</p>} {/* Display error message if exists */}
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <small>{post.author}</small>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default BlogList;
