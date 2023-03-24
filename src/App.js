import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rocket from './components/Rocket';
import Missions from './pages/Missions';
import MyProfile from './components/MyProfile';
import Dragon from './components/Dragon';

function App() {
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
