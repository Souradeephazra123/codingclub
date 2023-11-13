import React from "react";
import HeroCoding from "../Component/HomeCoding/HeroCoding/HeroCoding";
import NavbarCoding from "../Component/NavbarCoding/NavbarCoding";
import AboutCoding from "../Component/HomeCoding/AboutCoding/AboutCoding";
import AimCoding from "../Component/HomeCoding/AimCoding/AimCoding";
import AchievementsCoding from "../Component/HomeCoding/AchievementsCoding/AchievementsCoding";
import UpcomingCoding from "../Component/HomeCoding/UpcomingCoding/UpcomingCoding";
import FooterCoding from "../Component/FooterCoding/FooterCoding";

const homeCoding = () => {
  return (
    <div>
      <NavbarCoding />
      <HeroCoding />
      <AboutCoding />
      <AimCoding />
      <AchievementsCoding />
      <UpcomingCoding />
      <FooterCoding />
    </div>
  );
};

export default homeCoding;
