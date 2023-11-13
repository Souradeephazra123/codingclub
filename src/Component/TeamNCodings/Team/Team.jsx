import React from "react";
import "./Team.css";
import Boy from "../../../img/02.jpg";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
const Team = () => {
  return (
    <div className="team-N">
      <div className="team-N-contact">
        <div className="team-col">
          <img src={Boy} alt="" />
          <p>Name</p>
          <p>Details</p>
          <div className="logo">
            <FaGithub size={30} />
            <FaFacebook size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>

        <div className="team-col">
          <img src={Boy} alt="" />
          <p>Name</p>
          <p>Details</p>
          <div className="logo">
            <FaGithub size={30} />
            <FaFacebook size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>

        <div className="team-col">
          <img src={Boy} alt="" />
          <p>Name</p>
          <p>Details</p>
          <div className="logo">
            <FaGithub size={30} />
            <FaFacebook size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>

        <div className="team-col">
          <img src={Boy} alt="" />
          <p>Name</p>
          <p>Details</p>
          <div className="logo">
            <FaGithub size={30} />
            <FaFacebook size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>

        <div className="team-col">
          <img src={Boy} alt="" />
          <p>Name</p>
          <p>Details</p>
          <div className="logo">
            <FaGithub size={30} />
            <FaFacebook size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>

        <div className="team-col">
          <img src={Boy} alt="" />
          <p>Name</p>
          <p>Details</p>
          <div className="logo">
            <FaGithub size={30} />
            <FaFacebook size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
