import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://blog.mishanshah.com.np/backend/api/posts.php?page=${currentPage}`
      )
      .then((response) => {
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => console.log(error));
  }, [currentPage]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <small>{post.author}</small>
        </div>
      ))}
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
