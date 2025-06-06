import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: lucide icons
import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'


const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Tools", path: "/tools" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="bg-white shadow-md sticky top-1 z-50 rounded-xl">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to={'/'}>
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center"
                    >
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                            BG Remover
                        </span>
                    </motion.div>
                </Link>

                {/* Desktop Links */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-indigo-800 transition ${isActive ? "font-semibold text-indigo-800 dark:text-indigo-400" : ""
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button onClick={toggleMenu} className="md:hidden text-gray-700 dark:text-gray-200">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden px-4 pb-4 space-y-2 bg-white">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `block py-2 px-2 rounded text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-800 ${isActive ? "font-semibold text-indigo-600 dark:text-indigo-400" : ""
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Navbar;
