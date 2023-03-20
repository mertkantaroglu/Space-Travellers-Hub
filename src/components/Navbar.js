import { NavLink } from "react-router-dom";
import logo from "../img/planet.png";
import "../styles/navbar.css";

function Navbar() {
  const navbar = {
    display: "inline-flex",
    float: "right",
    marginLeft: "5vw",
  };
  const linkListBox = {
    listStyle: "none",
    display: "flex",
    fontSize: "1.2rem",
  };
  const linkStyle = {
    textDecoration: "none",
    color: "orange",
    margin: "3vw",
  };
  const linkList = {
    borderRight: "2px solid black",
    borderLeft: "2px solid black",
  };
  return (
    <>
      <nav className="nav">
        <div className="logo-container">
          <img src={logo} className="logo" alt="website-logo" />
          <h1 className="home-title">Space Travelers' Hub</h1>
        </div>
        <ul style={linkListBox}>
          <li>
            <NavLink to="/" style={linkStyle}>
              Rocket
            </NavLink>
          </li>
          <li style={linkList}>
            <NavLink to="/Missions" style={linkStyle}>
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/MyProfile" style={linkStyle}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr className="line" />
    </>
  );
}
export default Navbar;
