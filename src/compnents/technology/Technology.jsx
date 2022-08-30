import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import Capsule from "./Capsule";
import Port from "./Port";
import Vehicle from "./Vehicle";

function Technology() {
  return (
    <div className="container technology">
      <Nav />
      <div className="navigation">
        <h5>
          <span>03</span> Space launch 101
        </h5>
      </div>
      <div className="content technology-con">
        <div className="btn">
          <button>
            <NavLink to="/technology/">1</NavLink>
          </button>
          <button>
            <NavLink to="/technology/port">2</NavLink>
          </button>
          <button>
            <NavLink to="/technology/capsule">3</NavLink>
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Vehicle />} />
          <Route path="port" element={<Port />} />
          <Route path="capsule" element={<Capsule />} />
        </Routes>
      </div>
    </div>
  );
}

export default Technology;
