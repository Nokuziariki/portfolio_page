import React from "react";
import {
    FaGitAlt,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaWordpress,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import "../styles/skills.css";

const Skills: React.FC = () => {
    return (
        <div className="skills" id="skills">
            <div className="logoslide">
                <FaHtml5 className="skill-logo-item" />
                <FaCss3Alt className="skill-logo-item" />
                <FaJs className="skill-logo-item" />
                <SiTypescript className="skill-logo-item" />
                <FaReact className="skill-logo-item" />
                <RiNextjsFill className="skill-logo-item" />
                <FaWordpress className="skill-logo-item" />
                <FaGitAlt className="skill-logo-item" />
            </div>
            <div className="logoslide">
                <FaHtml5 className="skill-logo-item" />
                <FaCss3Alt className="skill-logo-item" />
                <FaJs className="skill-logo-item" />
                <SiTypescript className="skill-logo-item" />
                <FaReact className="skill-logo-item" />
                <RiNextjsFill className="skill-logo-item" />
                <FaWordpress className="skill-logo-item" />
                <FaGitAlt className="skill-logo-item" />
            </div>
        </div>
    );
};

export default Skills;
