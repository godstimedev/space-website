import { Routes, Route, Navigate } from "react-router-dom";
import Crew from "./compnents/Crew";
import Destination from "./compnents/destination/Destination";
import Europa from "./compnents/destination/Europa";
import Mars from "./compnents/destination/Mars";
import Moon from "./compnents/destination/Moon";
import Titan from "./compnents/destination/Titan";
import Home from "./compnents/Home";
import Nav from "./compnents/Nav";
import Capsule from "./compnents/technology/Capsule";
import Port from "./compnents/technology/Port";
import Technology from "./compnents/technology/Technology";
import Vehicle from "./compnents/technology/Vehicle";

function App() {
  return (
    <>
      <Routes>
        {/* <Nav /> */}
        <Route path="/" element={<Home />} />
        <Route path="/destination/*" element={<Destination />}>
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route
          path="/destination/"
          element={<Navigate to="/destination/moon" />}
        />
        <Route
          path="/destination/moon/*"
          element={<Navigate to="/destination/moon" />}
        />
        <Route
          path="/destination/mars/*"
          element={<Navigate to="/destination/mars" />}
        />
        <Route
          path="/destination/europa/*"
          element={<Navigate to="/destination/europa" />}
        />
        <Route
          path="/destination/titan/*"
          element={<Navigate to="/destination/titan" />}
        />

        <Route path="/crew" element={<Crew />} />
        <Route path="/technology/*" element={<Technology />}>
          <Route path="vehicle" element={<Vehicle />} />
          <Route path="port" element={<Port />} />
          <Route path="capsule" element={<Capsule />} />
        </Route>
        <Route
          path="/technology/"
          element={<Navigate to="/technology/vehicle" />}
        />
      </Routes>
    </>
  );
}

export default App;
