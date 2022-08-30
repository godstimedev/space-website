import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Nav() {
  return (
    <header>
      <img src={Logo} alt="/" />
      <span className="nav-line"></span>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">
              <span>01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
