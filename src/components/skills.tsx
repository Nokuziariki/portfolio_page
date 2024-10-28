import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/skills.css";

const Skills: React.FC = () => {
    return (
        <div className="skills">
            <div className="skill-logo">
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-js"></i>
                <i className="fa-brands fa-react"></i>
                <i className="fa-brands fa-wordpress"></i>
                <i className="fa-brands fa-git"></i>
            </div>
            <div className="skill-intro">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Skills;