import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://blog.mishanshah.com.np/backend/api/login.php", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data);
        // Store JWT in localStorage or cookies if you plan to use tokens
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="formDiv">
      <h2>Login to MishanBlogs</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <Link to={"/register"}>
          <button>Register</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
