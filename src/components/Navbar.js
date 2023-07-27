import React from "react";
import "../app/navbar.css";

const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="nav-menu">
        <ul className="nav-links-container">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
