import React from "react";
import "./UpcomingCoding.css";
import Boy from "../../../img/02.jpg";
import Logo from "../../../img/logo-dark.png";
const UpcomingCoding = () => {
  return (
    <div className="upcoming-e">
      <span>Upcoming Events</span>
      <div className="upcoming-content">
        <div className="upcoming-col">
          <img src={Boy} alt="" />
          <p>Event Name</p>
          <div className="col-part">
            <div className="col-part-date">7thNov</div>
            <div className="col-part-logo">
              <img src={Logo} alt="" style={{ width: "70px" }} />
            </div>
          </div>
          <button className="upcoming-button">Show more</button>
        </div>

        <div className="upcoming-col">
          <img src={Boy} alt="" />
          <p>Event Name</p>
          <div className="col-part">
            <div className="col-part-date">7thNov</div>
            <div className="col-part-logo">
              <img src={Logo} alt="" style={{ width: "70px" }} />
            </div>
          </div>
          <button className="upcoming-button">Show more</button>
        </div>

        <div className="upcoming-col">
          <img src={Boy} alt="" />
          <p>Event Name</p>
          <div className="col-part">
            <div className="col-part-date">7thNov</div>
            <div className="col-part-logo">
              <img src={Logo} alt="" style={{ width: "70px" }} />
            </div>
          </div>
          <button className="upcoming-button">Show more</button>
        </div>
      </div>
      <span>See all events</span>
    </div>
  );
};

export default UpcomingCoding;
