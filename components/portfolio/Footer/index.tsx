"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Branding */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-white">YourName</h1>
          <p className="text-sm">Building solutions for the modern web.</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.263.82-.583 0-.287-.012-1.244-.012-2.26-3.338.744-4.042-1.397-4.042-1.397-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.728.084-.728 1.203.088 1.835 1.232 1.835 1.232 1.07 1.833 2.807 1.304 3.492.996.108-.774.418-1.304.76-1.604-2.665-.305-5.466-1.33-5.466-5.93 0-1.31.465-2.38 1.232-3.22-.12-.305-.54-1.53.12-3.193 0 0 1.005-.323 3.3 1.23a11.47 11.47 0 0 1 3.006-.404c1.02.005 2.04.137 3.006.404 2.295-1.553 3.3-1.23 3.3-1.23.66 1.663.24 2.888.12 3.193.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.624-5.475 5.92.432.368.81 1.103.81 2.22 0 1.606-.015 2.897-.015 3.29 0 .32.21.705.825.583C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14C2.686 0 0 2.686 0 6v12c0 3.314 2.686 6 6 6h14c3.314 0 6-2.686 6-6V6c0-3.314-2.686-6-6-6zM7.601 19h-3.2V9h3.2v10zm-1.6-11.2c-1.045 0-1.88-.835-1.88-1.88 0-1.046.835-1.88 1.88-1.88s1.88.835 1.88 1.88c0 1.046-.835 1.88-1.88 1.88zM20 19h-3.2v-4.95c0-1.18-.02-2.7-1.64-2.7-1.64 0-1.89 1.281-1.89 2.6V19h-3.2V9h3.07v1.38h.045c.427-.8 1.467-1.64 3.017-1.64 3.23 0 3.83 2.13 3.83 4.89V19z" />
            </svg>
          </a>
          <a
            href="mailto:yourname@example.com"
            className="text-gray-400 hover:text-white transition"
            aria-label="Email"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 2H2C.895 2 0 2.895 0 4v16c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2zM2 6l10 6.5L22 6v-.01L12 12.5 2 6V6zm0 12V9.5l9.985 6.498 10.015-6.5V18H2z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
