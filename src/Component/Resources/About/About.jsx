import React from "react";
import "./About.css";
import ACM from "../../../img/acm_icpc.png";
import OnlineJudge from "../../../img/online jude.png";
import CodeChef from "../../../img/codechef.png";
import CodeForces from "../../../img/codeforces.jpeg";
import Book from "../../../img/book_3330317.png";
const About = () => {
  return (
    <div className="about-r">
      <img src={ACM} alt="" />
      <p>
        <span>ICPC Website </span> -official website of icpc
      </p>
      <p>
        <span>Indian Online Round Website</span> - official website of our
        online contest,has details about their regional contest and their links.
      </p>
      <br />
      <br />
      <h2>Practice Questions</h2>
      <div className="about-col-row">
        <img src={OnlineJudge} alt="" />
        <img src={CodeForces} alt="" />
        <img src={CodeChef} alt="" />
      </div>
      <p>
        <span>UVa Online Judge</span> - A programming contest site with problems
        similar to those of the ACM-ICPC, including many past problem sets and
        an online judging program.
      </p>
      <p>
        <span>ICPC Live Problem Archive</span> - This site provides an online
        judge for many actual ICPC problems from 2000 and later, both from
        regionals around the world, and from the world finals themselves.
      </p>
      <p>
        <span>Codeforces</span> - a platform to practice, organize, run, and
        discuss ICPC-like programming contests. A good practice site.
      </p>
      <p>
        <span>CodeChef</span> - an Indian platform competitive programming, has
        decent number of questions, good for beginners.
      </p>
      <h2>Books</h2>
      <img style={{width:"70px",height:"auto"}} src={Book} alt="" />
      <p>
        <span>Competitive Programming 3 (CP3) Book</span>- This book contains a
        collection of relevant data structures, algorithms, and programming tips
        written for University students who want to be more competitive in the
        International Collegiate Programming Contest (ICPC).
      </p>
    </div>
  );
};

export default About;
