import React from "react";
import "../styles/contact.css";

function Contact() {
    return (
        <div className="contact">
            <div className="contact-data">
                <div className="contact-text">
                    <span>Get in Touch</span>
                </div>
                <div className="button-place">
                    <button className="button">Button</button>
                </div>
            </div>
            <div className="creator">
                <p>
                    Made by Adam aka <span className="noku">Noku</span>
                </p>
            </div>
        </div>
    );
}

export default Contact;
