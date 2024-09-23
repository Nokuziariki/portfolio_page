import React, { useEffect } from "react";
import "../styles/about.css";
import { textAnimator } from "../scripts/textAnimation";

function About() {
    useEffect(() => {
        let inText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

        textAnimator("text", inText, 50);
    }, []);

    return (
        <div className="about">
            <div className="about-left">
                <h2 className="about-title">About Me</h2>
                <div id="text" className="about-text"></div>
            </div>
            <div className="about-right">
                <h2 className="about-title">Valami kép</h2>
                <p className="about-text">
                    Valami kép Valami kép Valami kép Valami kép Valami kép
                    Valami kép Valami kép Valami kép Valami kép Valami kép
                    Valami kép Valami kép Valami kép Valami kép Valami kép
                    Valami kép Valami kép Valami kép Valami kép Valami kép
                    Valami kép Valami kép Valami kép Valami kép Valami kép
                    Valami kép Valami kép Valami kép Valami kép Valami kép
                    Valami kép Valami kép Valami kép{" "}
                </p>
            </div>
        </div>
    );
}

export default About;
