import React from "react";
import { NavLink } from "react-router-dom";

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
    <div className="nav">
      <div>
        <h1 className="home-heading">Space Travelers' Hub</h1>
      </div>
      <nav style={navbar}>
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
    </div>
  );
}
export default Navbar;
