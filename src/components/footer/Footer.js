import React from "react";
import "../../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Kiran Dighe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
