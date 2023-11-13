import React from "react";
import "./HeroCoding.css";
import { FaChevronCircleDown } from "react-icons/fa";
import Logo from "../../../img/C3_transparent.png";
const HeroCoding = () => {
  return (
    <div className="hero-coding">
      <img src={Logo} alt="" />
      <h1>Competitive Coding Club of IIT Mandi</h1>
      <p>Learn More</p>
      <div className="logo">
        <FaChevronCircleDown size={40} />
      </div>
    </div>
  );
};

export default HeroCoding;
