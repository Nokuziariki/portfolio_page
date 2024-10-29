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
            <div className="skill-logo">
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <SiTypescript />
                <FaReact />
                <RiNextjsFill />
                <FaWordpress />
                <FaGitAlt />
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
