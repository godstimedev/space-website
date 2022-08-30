import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import Europa from "./Europa";
import Mars from "./Mars";
import Moon from "./Moon";
import Titan from "./Titan";

function Destination() {
  return (
    <div className="container destination">
      <Nav />
      <div className="navigation">
        <h5>
          <span>01</span> Pick your destination
        </h5>
      </div>
      <div className="content destination-con">
        <div className="left"></div>
        <div className="info">
          <ul>
            <li>
              <NavLink to="/destination/">Moon</NavLink>
            </li>
            <li>
              <NavLink to="/destination/mars">Mars</NavLink>
            </li>
            <li>
              <NavLink to="/destination/europa">Europa</NavLink>
            </li>
            <li>
              <NavLink to="/destination/titan">Titan</NavLink>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Destination;
