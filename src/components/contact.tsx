import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

const sanitizeInput = (input: string): string => {
    return input
        .replace(/[<>]/g, "") // HTML tag
        .replace(/[&]/g, "&amp;") // HTML entities
        .trim(); // Whitespace
};

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (form.current) {
            const formData = new FormData(form.current);

            const name = sanitizeInput(formData.get("from_name") as string);
            const email = sanitizeInput(formData.get("user_email") as string);
            const message = sanitizeInput(formData.get("message") as string);

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address");
                return;
            }

            if (message.length > 500) {
                alert("Message is too long");
                return;
            }

            const lastSubmitTime = localStorage.getItem("lastEmailSubmit");
            const currentTime = Date.now();
            if (
                lastSubmitTime &&
                currentTime - parseInt(lastSubmitTime) < 60000
            ) {
                alert("Please wait before sending another message");
                return;
            }
            emailjs
                .send(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                    {
                        from_name: name,
                        user_email: email,
                        message: message,
                        to_name: "Admin",
                    },
                    process.env.REACT_APP_EMAILJS_USER_ID!
                )
                .then(
                    (result) => {
                        console.log("Email sent successfully:", result.text);
                        localStorage.setItem(
                            "lastEmailSubmit",
                            currentTime.toString()
                        );
                        alert("Email sent successfully!");
                        if (form.current) {
                            form.current.reset();
                        }
                    },
                    (error) => {
                        console.error("Failed to send email:", error.text);
                        alert("Failed to send email. Please try again later.");
                    }
                );
        }
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-window">
                <div className="contact-content">
                    <form
                        ref={form}
                        className="contact-form"
                        onSubmit={sendEmail}
                    >
                        <div className="contact-title contact-item">
                            <h2 className="contact-head">Get in Touch</h2>
                        </div>
                        <input
                            id="name"
                            name="from_name"
                            type="text"
                            placeholder="Name"
                            className="contact-input contact-item"
                            required
                        />

                        <input
                            id="email"
                            name="user_email"
                            type="email"
                            placeholder="E-mail"
                            className="contact-input contact-item"
                            required
                        />

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write text here (Maximum 500 character)"
                            className="contact-textarea contact-item"
                            required
                        ></textarea>
                        <div className="check-zone">
                            <input
                                type="checkbox"
                                id="checkbox"
                                name="checkbox"
                                value="checkbox"
                                className="contact-checkbox contact-item"
                            />
                            <label
                                htmlFor="checkbox"
                                className="contact-checkbox-label contact-item"
                            >
                                This is a checkbox -- it has no role (YET)
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="contact-button contact-item"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
