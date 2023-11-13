import React, { useState } from "react";
import "./NavbarCoding.css";
import { FaTimes, FaBars } from "react-icons/fa";
import Logo from "../../img/logo-dark.png";
const NavbarCoding = () => {
  const [clicked, setClick] = useState(false);
  const handleClick = () => {
    setClick(!clicked);
  };
  return (
    <div className="navbar-home">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <ul className={clicked ? "navbar-menu active" : "navbar-menu"}>
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Project</li>
        <li className="nav-item">GSOC</li>
        <li className="nav-item">HOF</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">SubClubs</li>
      </ul>
      <div className="humberger" onClick={handleClick}>
        {clicked ? (
          <FaTimes size={20} style={{ color: "#ffffff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#ffffff" }} />
        )}
      </div>
    </div>
  );
};

export default NavbarCoding;
