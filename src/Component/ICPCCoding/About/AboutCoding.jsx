import React from "react";
import "./AboutCoding.css";
import EventICPC from "../../../img/Michael Roytek ICPC hall packed with teams.jpg";

import Cup from "../../../img/a2a35281876bb89fc2558c46e36184124ca60caf.png";
import icpcfoundation from "../../../img/2023-icpc-logo-3c@300-1.png";
const AboutCoding = () => {
  return (
    <div className="about-i">
      <div className="about-content-i">
        <div className="about-i-col">
          <img src={icpcfoundation} alt="" />
          <div className="about-i-col-content">
            <p style={{ fontSize: "30px" }}>What is ICPC ?</p>
            <p>
              The ICPC formerly known as ACM-ICPC (Association for Computing
              Machinery - International Collegiate Programming Contest) is
              considered as the "Olympics of Programming Competitions". The ICPC
              is a multi-tier, team-based, yearly programming competition for
              college students from all over the world. The contest participants
              come from over 2,000 universities that are spread across 80
              countries and six continents.
            </p>
          </div>
        </div>

        <div className="about-i-col">
          <div className="about-i-col-content">
            <p style={{ fontSize: "30px" }}>Prizes</p>
            <p>
              In terms of prize money, the top team takes home $15,000 along
              with the ICPC Gold medal. Three other teams getting Gold Medal are
              awarded $7,500. Each Silver Medal team gets $6,000 and each Bronze
              Medal team is awarded $3,000.
            </p>
          </div>
          <img src={Cup} alt="" />
        </div>

        <div className="about-i-col">
          <img src={EventICPC} alt="" />
          <div className="about-i-col-content">
            <p style={{ fontSize: "30px" }}>Contest Structure</p>
            <p>
              It consists of three tiers in India: an online contest, a regional
              contest and the world finals. In each contest, three-person teams
              get five hours (three for online contest) to solve as many
              problems as they can from a given problem set on one computer.
              Each problem set has historically had 8 to 10 problems, which tend
              to be applicable to real-world situations with solutions that are
              intended to use a wide variety of algorithms. The top finishing
              teams in online round can go to participate in regionals, and the
              top teams there can represent India at the World Finals. <br />
              <span style={{ color: "blue", textDecoration: "underline" }}>
                {" "}
                know more{" "}
              </span>
              about ICPC here
            </p>
          </div>
        </div>
        <p style={{ padding: "2rem 5rem" }}>
          The IIT Mandi teams participate each year in ICPC and train
          rigourously with the help of the club competitions and sesisons. IIT
          Mandi usually has three to five teams to the regional contest. You may
          also contact current Programming Club coordinators for more
          information here.
        </p>
      </div>
    </div>
  );
};

export default AboutCoding;
