import React, { useState } from "react";
import "../../styles/Contact.scss";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5j0tc5y",
        "template_98xj7zk",
        formData,
        "p23g0Tg0dfL-1f5yj"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setResponseMessage("Email sent successfully!");
        setIsSuccess(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setResponseMessage("Error sending email. Please try again.");
        setIsSuccess(false);
      });

    setTimeout(() => {
      setResponseMessage("");
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>

        <div className="social-icons">
          <a
            href="https://github.com/kirandighe695"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/kiran-v-dighe0725"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://firebase.google.com/docs/hosting/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFirebase size={30} />
          </a>
        </div>

        <p>
          I’d love to hear from you! Whether you have a question, a project in
          mind, or just want to connect, feel free to reach out.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>

        {responseMessage && (
          <div className={isSuccess ? "success-message" : "error-message"}>
            {responseMessage}
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
