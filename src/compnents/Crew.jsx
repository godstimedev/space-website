import React from "react";
import Nav from "./Nav";

function Crew() {
  return (
    <div className="container crew">
      <Nav />
      <div className="navigation">
        <h5>
          <span>02</span> Meet your crew
        </h5>
      </div>
      <div className="content crew-con">
        <div className="info">
          <div className="right"></div>
          <div className="crew-det">
            <h4>Commander</h4>
            <h3>Douglas Hurley</h3>
            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
        </div>
        <div className="blank"></div>
      </div>
    </div>
  );
}

export default Crew;
