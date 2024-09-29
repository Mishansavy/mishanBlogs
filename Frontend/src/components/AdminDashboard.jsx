import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/admin/login";
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="contains">
        <Link to="/admin/new-post">Create New Post</Link>
        <Link to="/blogs">View All Posts</Link>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
