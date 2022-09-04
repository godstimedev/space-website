import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "../Nav";
// import Europa from "./Europa";
// import Mars from "./Mars";
// import Moon from "./Moon";
// import Titan from "./Titan";

function Destination() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // console.log(location.pathname);
  // const path =
  //   location.pathname !== "/destination/moon" ||
  //   location.pathname !== "/destination/mars" ||
  //   location.pathname !== "/destination/europa" ||
  //   location.pathname !== "/destination/titan" ||
  //   location.pathname !== "/destination";

  // useEffect(() => {
  //   if (path) {
  //     return <Navigate to="/" />;
  //   }
  // }, [path]);

  return (
    <div className="container destination">
      <Nav />
      <div className="navigation">
        <h5>
          <span>01</span> Pick your destination
        </h5>
      </div>
      <div className="content destination-con">
        <ul>
          <li>
            <NavLink to="/destination/moon">Moon</NavLink>
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
        <Outlet />
      </div>
    </div>
  );
}

export default Destination;
