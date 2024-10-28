import React from "react";
import "../styles/contact.css";

const Contact: React.FC = () => {
    return (
        <div className="contact">
            <div className="contact-window">
                <div className="contact-window-left-side">
                    <div className="contact-window-title">
                        <h2 className="the-title">Get in Touch</h2>
                    </div>
                    <div>
                        <form></form>
                    </div>
                </div>
                <div className="contact-window-right-side">
                    <div>
                        <h2 className="the-title">Message</h2>
                    </div>
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write text here..."
                        ></textarea>
                        <button className="button-box">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
