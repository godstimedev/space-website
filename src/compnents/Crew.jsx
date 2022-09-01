import React from "react";
import Nav from "./Nav";
import CrewSlider from "./CrewSlider";

function Crew() {
  return (
    <div className="container crew">
      <Nav />
      <div className="navigation">
        <h5>
          <span>02</span> Meet your crew
        </h5>
      </div>
      <CrewSlider />
    </div>
  );
}

export default Crew;
