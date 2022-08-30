import { Routes, Route } from "react-router-dom";
import Crew from "./compnents/Crew";
import Destination from "./compnents/destination/Destination";
import Home from "./compnents/Home";
import Nav from "./compnents/Nav";
import Technology from "./compnents/technology/Technology";

function App() {
  return (
    <>
      <Routes>
        {/* <Nav /> */}
        <Route path="/" element={<Home />} />
        <Route path="/destination/*" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology/*" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
