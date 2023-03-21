import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Rocket from "./components/Rocket";
import Mission from "./components/Missions";
import MyProfile from "./components/MyProfile";
import Dragon from "./components/Dragon";
import { fetchRockets } from "./redux/Rocket/rocketSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
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
