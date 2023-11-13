import React from "react";
import NavbarCoding from "../Component/NavbarCoding/NavbarCoding";
import ContactCoding from "../Component/TeamNCodings/Hero/Hero";
import FooterCoding from "../Component/FooterCoding/FooterCoding";
import Team from "../Component/TeamNCodings/Team/Team";
const teamCoding = () => {
  return (
    <div>
      <NavbarCoding />
      <ContactCoding />
      <Team />
      <FooterCoding />
    </div>
  );
};

export default teamCoding;
