import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://blog.mishanshah.com.np/backend/api/login.php", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "Login successful") {
          // Store user data in localStorage (you can also store only user ID if preferred)
          localStorage.setItem("admin", JSON.stringify(response.data.user));
          navigate("/admin/dashboard"); // Redirect to admin dashboard
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Login failed");
      });
  };

  return (
    <div className="formDiv">
      <h2>Admin Login</h2>
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
      </form>
    </div>
  );
};

export default Login;
