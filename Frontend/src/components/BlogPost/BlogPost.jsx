import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BlogPost.css"; // External CSS for styling

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://mishanshah.com.np/backend/api/posts.php?id=${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="blogpost-container">
      {post ? (
        <div className="post-content">
          <h1 className="post-title">{post.title}</h1>
          <p className="post-body">{post.body}</p>
          <div className="post-meta">
            <small>
              By <strong>{post.author}</strong> on{" "}
              {new Date(post.created_at).toLocaleDateString()}
            </small>
          </div>
        </div>
      ) : (
        <p className="loading-message">Loading post...</p>
      )}
    </div>
  );
};

export default BlogPost;
