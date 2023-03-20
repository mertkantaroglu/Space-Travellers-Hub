import { NavLink } from "react-router-dom";
import logo from "../img/planet.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="logo-container">
          <img src={logo} className="logo" alt="website-logo" />
          <h1 className="home-title">Space Travelers' Hub</h1>
        </div>
        <ul>
          <li>
            <NavLink to="/MyProfile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
      <hr className="line" />
    </>
  );
}
export default Navbar;
