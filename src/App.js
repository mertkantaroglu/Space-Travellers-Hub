import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Rocket from './components/Rocket';
import Missions from './pages/Missions';
import MyProfile from './components/MyProfile';
import Dragon from './components/Dragon';
import { getMissions } from './redux/mission/missionSlice';
import { fetchRockets } from './redux/Rocket/rocketSlice';
import { getDragon } from './redux/dragon/dragonSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
    dispatch(fetchRockets());
    dispatch(getDragon());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Dragon" element={<Dragon />} />
        <Route path="/Rocket" element={<Rocket />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
