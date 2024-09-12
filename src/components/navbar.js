import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
    return (
        <>
            <nav class="navbar">
                <div class="logo">
                    <img class="logopic" src={logo} alt="Noku's Logo" />
                </div>
                <ul class="menulist">
                    <li class="menu">About Me</li>
                    <li class="menu">Projects</li>
                    <li class="menu">Skills</li>
                    <li class="menu">Contact</li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
