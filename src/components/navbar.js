import React from "react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img className="logopic" src={logo} alt="Noku's Logo" />
            </div>
            <ul className="menulist">
                <li className="menu">About Me</li>
                <li className="menu">Projects</li>
                <li className="menu">Skills</li>
                <li className="menu">Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;
