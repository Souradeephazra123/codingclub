import React from "react";
import Hero from "../Component/EventCoding/Hero/Hero";
import NavbarCoding from "../Component/NavbarCoding/NavbarCoding";
import FooterCoding from "../Component/FooterCoding/FooterCoding";
import Heading from "../Component/EventCoding/heading/heading";
const eventCoding = () => {
  return (
    <div>
      <NavbarCoding />
      <Heading />
      <Hero />
      <FooterCoding />
    </div>
  );
};

export default eventCoding;
