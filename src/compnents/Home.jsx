import React from "react";
// import Bg from "../assets/home/background-home-desktop.jpg";
import Nav from "./Nav";

function Home() {
  return (
    <div className="container home">
      <Nav />
      <div className="content">
        <div className="info">
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">
          <div className="hover"></div>
          <button>EXPLORE</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
