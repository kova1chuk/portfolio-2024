"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavMenu from "./NavMenu";
import MobileMenuButton from "./MobileMenuButton";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-gray-800 text-white fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <a href="#home" className="hover:text-blue-400 transition">
            My Portfolio
          </a>
        </h1>

        {/* Desktop Navigation */}
        <NavMenu links={navLinks} />

        {/* Mobile Menu Button */}
        <MobileMenuButton isMenuOpen={isMenuOpen} onToggle={toggleMenu} />
      </nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-700 text-white fixed top-16 left-0 right-0 z-40 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <NavMenu
              links={navLinks}
              onLinkClick={() => setIsMenuOpen(false)}
              isMobile
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
