// src/components/Footer.jsx

import React from 'react';

const Footer = () => (
  <footer className="bg-black py-6">
    <div className="max-w-7xl mx-auto flex justify-center items-center space-x-6">
      <a
        href="https://github.com/Marchosias405"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex items-center text-timberWolf hover:text-white transition"
      >
        <i className="fab fa-github text-2xl"></i>
        <span className="ml-2">GitHub</span>
      </a>
      <a
        href="https://www.instagram.com/marchosias405"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex items-center text-timberWolf hover:text-white transition"
      >
        <i className="fab fa-instagram text-2xl"></i>
        <span className="ml-2">Instagram</span>
      </a>
      <a
        href="https://www.linkedin.com/in/kazi-boni-amin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex items-center text-timberWolf hover:text-white transition"
      >
        <i className="fab fa-linkedin text-2xl"></i>
        <span className="ml-2">LinkedIn</span>
      </a>
      <a
        href="mailto:kaziboniamin402@gmail.com"
        aria-label="Email"
        className="flex items-center text-timberWolf hover:text-white transition"
      >
        <i className="fas fa-envelope text-2xl"></i>
        <span className="ml-2">kaziboniamin402@gmail.com</span>
      </a>
    </div>
  </footer>
);

export default Footer;
