import React from "react";
import "../app/styles/navbar.css";
import Image from "next/image";

const Navbar = () => {
  const myLogo = "/../public/assets/img/bandgeekDevLogoJuly2023.png";

  return (
    <div className="nav-main">
      <div className="logo">
        <a href="/">
          <Image
            src={myLogo}
            height={175}
            width={175}
            alt="logo created by Canva"
          />
        </a>
      </div>
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
