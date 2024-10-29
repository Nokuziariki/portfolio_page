import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import { FaArrowUp } from "react-icons/fa";

const Navbar: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    function handleMenuClick(event: React.MouseEvent<HTMLElement>) {
        const targetId = event.currentTarget.getAttribute("data-target");
        const targetElement = targetId
            ? document.getElementById(targetId)
            : null;
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    useEffect(() => {
        const targetElement = document.getElementById("banner");

        function handleScroll() {
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                setShowButton(rect.bottom < 0);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar" id="navbar">
            <a
                href="https://github.com/nokuziariki"
                target="blank"
                rel="noopener noreferrer"
                className="logo"
            >
                <img className="logopic" src={logo} alt="Noku's Logo" />
            </a>
            <ul className="menulist">
                <li
                    className="menu"
                    data-target="about"
                    onClick={handleMenuClick}
                >
                    About Me
                </li>
                <li
                    className="menu"
                    data-target="projects"
                    onClick={handleMenuClick}
                >
                    Projects
                </li>
                <li
                    className="menu"
                    data-target="skills"
                    onClick={handleMenuClick}
                >
                    Skills
                </li>
                <li
                    className="menu"
                    data-target="contact"
                    onClick={handleMenuClick}
                >
                    Contact
                </li>
            </ul>
            {showButton && (
                <div className="navbar-button-zone">
                    <button
                        className="navbar-button"
                        data-target="navbar"
                        onClick={handleMenuClick}
                    >
                        <FaArrowUp className="navbar-button-icon" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
