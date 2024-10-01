import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <div className="headerComp">
      <h1 className="logo">
        <Link to="/">Mishan Tech Blog</Link>
      </h1>
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="https://mishanshah.com.np" className="nav-link">
          About Me
        </Link>
      </nav>
    </div>
  );
};
