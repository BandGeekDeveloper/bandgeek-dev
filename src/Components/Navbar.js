import react from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../app/globals.css";

const Navbar = () => {
  return (
    <div className="navMain">
      <div className="hamburger-container">
        <AiOutlineMenu />
      </div>
    </div>
  );
};

export default Navbar;
