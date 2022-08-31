import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header>
      <img src={Logo} alt="/" />
      <span className="nav-line"></span>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">
              <span className="numbering">00</span> <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">
              <span className="numbering">01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              <span className="numbering">02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
              <span className="numbering">03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
      <div onClick={handleNav} className="menu">
        <AiOutlineMenu size={30} />
      </div>
      <div className={nav ? "block nav-menu" : "none"}>
        <AiOutlineClose size={30} onClick={handleNav} className="close" />
        <ul>
          <li>
            <NavLink to="/">
              <span className="numbering">00</span> <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">
              <span className="numbering">01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              <span className="numbering">02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
              <span className="numbering">03</span> Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
