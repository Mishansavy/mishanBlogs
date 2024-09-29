import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogList = () => {
  const [posts, setPosts] = useState([]); // Initialize with an empty array

  useEffect(() => {
    axios
      .get("https://blog.mishanshah.com.np/backend/api/posts.php?page=1")
      .then((response) => {
        setPosts(response.data.posts || []); // Ensure 'posts' is always an array
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setPosts([]); // Set posts to an empty array on error
      });
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <small>{post.author}</small>
          </div>
        ))
      ) : (
        <p>No posts available</p> // Handle empty state when there are no posts
      )}
    </div>
  );
};

export default BlogList;
