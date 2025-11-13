import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Todo App</h2>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/pending">Pending</Link></li>
        <li><Link to="/history">History</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
