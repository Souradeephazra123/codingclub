import React from "react";
import "./AboutCoding.css";
import Boy from "../../../img/02.jpg";
const AboutCoding = () => {
  return (
    <div className="about-coding">
      <img src={Boy} alt="" />

      <div className="about-coding-content">
        <p>About Us</p>
        <p>
          The Competitive Programming Club is about doing ridiculously difficult
          problems within unfairly short time limits. Our focus is contests such
          as the ACM ICPC, Google Codejam, and Facebook Hacker Cup. We have
          weekly meetings where we practice problems, discuss algorithms, cry
          over the parts we didn't understand, figure things out, and celebrate
          with free pizza.
        </p>
      </div>
    </div>
  );
};

export default AboutCoding;
