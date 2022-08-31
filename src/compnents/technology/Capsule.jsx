import React from "react";
import Img from "../../assets/technology/image-space-capsule-portrait.jpg";

function Capsule() {
  return (
    <div className="tech-info">
      <div className="tech-det">
        <h6>The terminology...</h6>
        <h3>Space capsule</h3>
        <p>
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      </div>
      <div className="img">
        <img src={Img} alt="/" />
      </div>
    </div>
  );
}

export default Capsule;
