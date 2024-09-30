// import React, { useState } from "react";
// import axios from "axios";
// import "./NewPost.css"; // External CSS for styling

// const NewPost = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [author, setAuthor] = useState("");
//   const [file, setFile] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("body", body);
//     formData.append("author", author);
//     formData.append("file", file);

//     axios
//       .post("https://blog.mishanshah.com.np/backend/api/posts.php", formData)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="newpost-container">
//       <h1>Create a New Post</h1>
//       <form onSubmit={handleSubmit} className="newpost-form">
//         <div className="form-group">
//           <label htmlFor="title">Post Title</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter the post title"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="file">Upload Image</label>
//           <input
//             type="file"
//             id="file"
//             onChange={(e) => setFile(e.target.files[0])}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="body">Post Content</label>
//           <textarea
//             id="body"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             placeholder="Write the post content"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="author">Author</label>
//           <input
//             type="text"
//             id="author"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             placeholder="Enter author name"
//             required
//           />
//         </div>

//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewPost;

import React, { useState } from "react";
import axios from "axios";
import "./NewPost.css"; // External CSS for styling

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("author", author);
    formData.append("file", file); // Attach the file here

    axios
      .post("https://blog.mishanshah.com.np/backend/api/posts.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response || error.message);
      });
  };

  return (
    <div className="newpost-container">
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit} className="newpost-form">
        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the post title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Upload Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Post Content</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write the post content"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
