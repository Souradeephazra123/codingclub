import React from "react";
import NavbarCoding from "../Component/NavbarCoding/NavbarCoding";

import FooterCoding from "../Component/FooterCoding/FooterCoding";
import Hero from "../Component/Resources/Hero/Hero";
import About from "../Component/Resources/About/About";
const resourcesCoding = () => {
  return (
    <div>
      <NavbarCoding />
      <Hero />
      <About />
      <FooterCoding />
    </div>
  );
};

export default resourcesCoding;
