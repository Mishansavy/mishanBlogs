import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://blog.mishanshah.com.np/backend/api/users.php", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data);
        // Store JWT in localStorage or cookies
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="formDiv">
        <h2>Login to MishanBlogs</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
