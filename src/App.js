import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Rocket from "./components/Rocket";
import Mission from "./components/Missions";
import MyProfile from "./components/MyProfile";
import Dragon from "./components/Dragon";

function App() {
  return (
    <BrowserRouter>
      <div id="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/Missions" element={<Mission />} />
          <Route path="/Dragon" element={<Dragon />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
