// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import "./BlogPost.css";

// const BlogPost = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://blog.mishanshah.com.np/backend/api/posts.php?id=${id}`)
//       .then((response) => {
//         const foundPost = response.data.posts.find(
//           (p) => p.id === parseInt(id)
//         );

//         setPost(foundPost);
//         console.log(foundPost);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id]);

//   return (
//     <div className="blogpost-container">
//       {post ? (
//         <div className="post-content">
//           <h1 className="post-title">{post.title}</h1>
//           <img src={post.img} alt={post.title} />
//           <p className="post-body">{post.body}</p>
//           <div className="post-meta">
//             <small>
//               By <strong>{post.author}</strong> on
//               {new Date(post.created_at).toLocaleDateString()}
//             </small>
//           </div>
//         </div>
//       ) : (
//         <p className="loading-message">Loading post...</p>
//       )}
//     </div>
//   );
// };

// export default BlogPost;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BlogPost.css";

const BlogPost = () => {
  const { id } = useParams(); // Getting the blog post ID from the URL parameters
  const [post, setPost] = useState(null); // State for storing the post data
  const [error, setError] = useState(null); // State for handling any errors

  useEffect(() => {
    // Fetching the blog post by ID
    axios
      .get(`https://blog.mishanshah.com.np/backend/api/posts.php?id=${id}`)
      .then((response) => {
        console.log("API Response:", response.data); // Logging the full response for debugging

        if (response.data && response.data.posts) {
          const foundPost = response.data.posts.find(
            (p) => parseInt(p.id) === parseInt(id) // Ensuring the IDs are compared as integers
          );

          if (foundPost) {
            setPost(foundPost); // If post is found, set it to the state
          } else {
            setError("Post not found"); // If no post matches the ID, set an error
          }
        } else {
          setError("No posts available in the response"); // If the API does not return posts
        }
      })
      .catch((error) => {
        console.log("Error fetching post:", error); // Log any error from the API
        setError("Error fetching the post"); // Set error state
      });
  }, [id]); // Runs every time the post ID changes

  return (
    <div className="blogpost-container">
      {error ? (
        <p className="error-message">{error}</p> // Display error if any
      ) : post ? (
        <div className="post-content">
          <h1 className="post-title">{post.title}</h1>
          {post.img && (
            <img
              src={`https://blog.mishanshah.com.np/backend/${post.img}`}
              alt={post.title}
              className="post-image"
            />
          )}
          <p className="post-body">{post.body}</p>
          <div className="post-meta">
            <small>
              By <strong>{post.author}</strong> on{" "}
              {new Date(post.created_at).toLocaleDateString()}
            </small>
          </div>
        </div>
      ) : (
        <p className="loading-message">Loading post...</p> // Show loading state if the post is being fetched
      )}
    </div>
  );
};

export default BlogPost;
