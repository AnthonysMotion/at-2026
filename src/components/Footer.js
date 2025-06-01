// src/components/Footer.js
import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Anthony Thach. All rights reserved.</p>
      <p>Shaping desire with art and technology.</p>
    </footer>
  );
};

export default Footer;
