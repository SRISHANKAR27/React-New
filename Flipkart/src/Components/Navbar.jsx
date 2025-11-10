import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{backgroundColor: "black", padding: "10px", color: "white" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>
        Flipkart
      </Link>
      <Link to="/login" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>
        Login
      </Link>
      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
        Cart
      </Link>
    </nav>
  );    
}

export default Navbar;
