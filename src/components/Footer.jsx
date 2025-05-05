// src/components/Footer.jsx

import React from 'react';

const Footer = () => (
  <footer className="bg-black text-white text-center py-5 mt-10 w-full">
    {/* Use flex-wrap so icons never get clipped, and justify-center to center them */}
    <div className="flex flex-wrap justify-center gap-6 p-4">
      <a
        href="https://github.com/Marchosias405"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex items-center gap-2 text-white hover:text-gray-300 transition"
      >
        <i className="fab fa-github text-2xl"></i>
        <span>GitHub</span>
      </a>
      <a
        href="https://www.instagram.com/marchosias405"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex items-center gap-2 text-white hover:text-gray-300 transition"
      >
        <i className="fab fa-instagram text-2xl"></i>
        <span>Instagram</span>
      </a>
      <a
        href="https://www.linkedin.com/in/kazi-boni-amin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex items-center gap-2 text-white hover:text-gray-300 transition"
      >
        <i className="fab fa-linkedin text-2xl"></i>
        <span>LinkedIn</span>
      </a>
      <a
        href="mailto:kaziboniamin402@gmail.com"
        aria-label="Email"
        className="flex items-center gap-2 text-white hover:text-gray-300 transition"
      >
        <i className="fas fa-envelope text-2xl"></i>
        <span>kaziboniamin402@gmail.com</span>
      </a>
    </div>
  </footer>
);

export default Footer;
