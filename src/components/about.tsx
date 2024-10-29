import React, { useEffect } from "react";
import "../styles/about.css";
import { textAnimator } from "../scripts/textAnimation";
import codePicture from "../assets/codePicture.png";

const About: React.FC = () => {
    useEffect(() => {
        const inText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

        textAnimator("text", inText, 50);
    }, []);

    return (
        <div className="about" id="about">
            <div className="about-left">
                <h2 className="about-title">About Me</h2>
                <div id="text" className="about-text"></div>
            </div>
            <div className="about-right">
                <h2 className="about-title"> </h2>
                <div className="about-text">
                    <img
                        className="codePicture"
                        src={codePicture}
                        alt="Coding"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
