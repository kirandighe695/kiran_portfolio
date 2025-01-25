import React from "react";
import "../../styles/Contact.scss";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiFirebase } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer">
            <SiFirebase size={30} />
          </a>
        </div>

        <p>
          I’d love to hear from you! Whether you have a question, a project in mind, or just want to connect, feel free to reach out.
        </p>
        
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
