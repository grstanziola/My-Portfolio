import React, { useState } from "react";
import Link from "next/link";
import { FiX, FiMenu } from "react-icons/fi"; // Close and hamburger icons
import { motion } from "framer-motion"; // For smooth animations
import { SiGithub, SiLinkedin } from "react-icons/si"; // Social Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon (trigger to open navbar) */}
      <div className="fixed top-5 right-5 z-50 cursor-pointer">
        <FiMenu size={35} className="text-white" onClick={toggleMenu} />
      </div>

      {/* Full-Screen Navbar Pop-Up */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white z-40"
        >
          {/* X Icon to Close Navbar */}
          <div className="absolute top-5 right-5 cursor-pointer">
            <FiX
              size={35}
              onClick={toggleMenu}
              className="text-white hover:scale-125 transition-transform duration-300 ease-in-out"
            />
          </div>

          {/* Navbar Links */}
          <nav className="flex flex-col items-center space-y-8">
            <motion.ul
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl font-bold"
            >
              <li>
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/resume" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </motion.ul>
          </nav>

          {/* Social Icons at the Bottom */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-10 flex space-x-4"
          >
            <a
              href="https://www.linkedin.com/in/gabriel-stanziola-862722187"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
              onClick={toggleMenu}
            >
              <SiLinkedin size={30} />
            </a>
            <a
              href="https://github.com/gabo2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              onClick={toggleMenu}
            >
              <SiGithub size={30} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
