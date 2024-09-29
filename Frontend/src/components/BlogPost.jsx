import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    <div className="container">
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <small>
            By {post.author} on {new Date(post.created_at).toLocaleDateString()}
          </small>
        </div>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default BlogPost;
