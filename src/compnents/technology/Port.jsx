import React from "react";
import Img from "../../assets/technology/image-spaceport-portrait.jpg";

function Port() {
  return (
    <div className="tech-info">
      <div className="tech-det">
        <h6>The terminology...</h6>
        <h3>Spaceport</h3>
        <p>
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth's rotation for launch.
        </p>
      </div>
      <div className="img">
        <img src={Img} alt="/" />
      </div>
    </div>
  );
}

export default Port;
